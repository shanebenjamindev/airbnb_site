import React, { useEffect, useState } from "react";
import { Input, Modal, Button, Form, Table, Upload, Select } from "antd";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";
const { Option } = Select;

export default function LocationForm({ open, onCancel, onOk, formData, mode }) {
  const [form] = Form.useForm();
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedCity, setSelectedCity] = useState(formData ? formData.tinhThanh : "");
  const [selectedDistrict, setSelectedDistrict] = useState(formData ? formData.tenViTri : "");
  const [fileList, setFileList] = useState([]); // Define fileList in the state


  // console.log(formData);

  useEffect(() => {
    axios
      .get("https://provinces.open-api.vn/api/?depth=1")
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => console.error('Error fetching city data:', error));
  }, []);

  const fetchDistricts = (cityCode) => {
    if (cityCode) {
      axios
        .get(`https://provinces.open-api.vn/api/p/${cityCode}?depth=2`)
        .then((response) => {
          setDistricts(response.data.districts || []);
        })
        .catch((error) => console.error('Error fetching district data:', error));
    } else {
      setDistricts([]);
    }
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }

    if (e && e.fileList) {
      e.fileList = e.fileList.slice(-1); // Keep only the last uploaded file
    }

    return e && e.fileList;
  };

  const beforeUpload = (file) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };

    reader.readAsDataURL(file);

    return false;
  };

  const handleCityChange = (value) => {
    setSelectedCity(value.split(`,`)[0]);
    fetchDistricts(value.split(',')[1]);
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then(() => {
        form.resetFields();
        const state = {
          hinhAnh: imagePreview,
          tinhThanh: selectedCity,
          tenViTri: selectedDistrict,
          quocGia: "Việt Nam"
        };
        onOk(formData ? formData.id : null, state);
      })
      .catch((errorInfo) => {
        console.error('Validation error:', errorInfo);
      });
  };

  const renderEditModal = () => {
    return (
      <Modal
        labelCol={{ span: 8}}
        wrapperCol={{ span: 13 }}
        open={open}
        title={mode === "edit" ? "Cập nhật vị trí" : "Thêm vị trí"}
        onCancel={onCancel}
        onOk={handleOk}
        footer={[
          <Button key="back" onClick={onCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Save
          </Button>,
        ]}
      >
        <Form form={form} initialValues={formData}>
          <Form.Item
            label="Quốc gia"
            name="quocGia"
            labelCol={{ span: 8}}
            wrapperCol={{ span: 13 }}
            initialValue="Việt Nam"
          >
            <Input value="Việt Nam" disabled />
          </Form.Item>

          <Form.Item
            label="Tỉnh thành"
            name="tinhThanh"
            labelCol={{ span: 8}}
            wrapperCol={{ span: 13 }}
            rules={[
              {
                required: true,
                message: 'This field is required.',
              },
            ]}
          >
            <Select
              name="tinhThanh"
              className="ant-input"
              id="city"
              onChange={handleCityChange}
              value={(formData) ? formData.tinhThanh : ""}
            >
              <Option value="" disabled>
                Chọn Thành phố
              </Option>
              {cities.map((city) => (
                <Option key={city.code} value={`${city.name.replace('Tỉnh ', '')},${city.code}`}>
                  {city.name.replace('Tỉnh ', '')}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Vị trí"
            name="viTri"
            labelCol={{ span: 8}}
            wrapperCol={{ span: 13 }}
            rules={[
              {
                required: true,
                message: 'This field is required.',
              },
            ]}
          >
            <Select
              className="ant-input"
              id="district"
              onChange={handleDistrictChange}
              value={(selectedDistrict) ? selectedDistrict : ""}
            >
              <Option value="" disabled>
                Chọn vị trí
              </Option>
              {
                districts.map((district) => (
                  <Option
                    key={district.code}
                    value={district.name.replace('Quận ', '').replace('Huyện ', '')}
                  >
                    {district.name.replace('Quận ', '').replace('Huyện ', '')}
                  </Option>
                ))
              }
            </Select>
          </Form.Item>

          <Form.Item
            label="Upload Image"
            name="hinhAnh"
            labelCol={{ span: 8}}
            wrapperCol={{ span: 13 }}
            valuePropName="hinhAnh"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: 'This field is required.',
              },
            ]}
          >
            <Upload
              name="fileList"
              listType="picture-card"
              beforeUpload={beforeUpload}
              fileList={imagePreview ? [] : formData ? [] : fileList}
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" style={{ width: '100%' }} />
              ) : (
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return <>{renderEditModal()}</>;
}
