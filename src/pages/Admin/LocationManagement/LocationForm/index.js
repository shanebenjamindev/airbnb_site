import React, { useEffect, useState } from "react";
import { Input, Modal, Button, Form, Table, Upload, Select } from "antd";
import axios from "axios";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

export default function LocationForm({ visible, onCancel, onOk, formData, mode }) {
  const [form] = Form.useForm();
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedCity, setSelectedCity] = useState(formData ? formData.tinhThanh : "");
  const [selectedDistrict, setSelectedDistrict] = useState(formData ? formData.tenViTri : "");
  const [fileList, setFileList] = useState([]); // Define fileList in the state


  console.log(formData);

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
    setSelectedCity(value);
    fetchDistricts(value.split(',')[1]);
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        const state = {
          ...values,
          hinhAnh: imagePreview,
          tinhThanh: selectedCity,
          tenViTri: selectedDistrict,
        };
        onOk(state);
      })
      .catch((errorInfo) => {
        console.error('Validation error:', errorInfo);
      });
  };

  const renderEditModal = () => {
    return (
      <Modal
        visible={visible}
        title={mode === "edit" ? "Edit Location" : "Add Location"}
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
          <Form.Item name="quocGia" label="Quốc gia" initialValue="Việt Nam">
            <Input />
          </Form.Item>

          <Form.Item label="Tỉnh thành">
            <Select
              name="tinhThanh"
              className="ant-input"
              id="city"
              onChange={handleCityChange}
              value={selectedCity}
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
            name="tenViTri"
            rules={[
              {
                required: true,
                message: 'This field is required.',
              },
            ]}
          >
            <Select
              name="tenViTri"
              className="ant-input"
              id="district"
              onChange={handleDistrictChange}
              value={selectedDistrict}
            >
              <Option value="" disabled>
                Chọn vị trí
              </Option>
              {districts.map((district) => (
                <Option
                  key={district.code}
                  value={district.name.replace('Quận ', '').replace('Huyện ', '')}
                >
                  {district.name.replace('Quận ', '').replace('Huyện ', '')}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Upload Image"
            name="hinhAnh"
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
