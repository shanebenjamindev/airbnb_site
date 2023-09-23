import React, { useEffect, useState } from 'react';
import { Modal, Upload, Form, Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

function LocationModal({ visible, onCancel, onOk, formData, mode }) {
  const [form] = Form.useForm();

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [selectedCity, setSelectedCity] = useState(formData ? (formData.tinhThanh) : "")
  const [selectedDistrict, setSelectedDistrict] = useState(formData ? (formData.tenViTri) : "")

  const [imagePreview, setImagePreview] = useState(null);

  const initialFileList = formData && formData.hinhAnh
    ? [{ uid: '-1', name: 'image.png', status: 'done', url: formData.hinhAnh }]
    : [];

  const [fileList, setFileList] = useState(initialFileList);

  useEffect(() => {
    axios.get('https://provinces.open-api.vn/api/?depth=1')
      .then((response) => {
        setCities(response.data);
      })
      .catch((error) => console.error('Error fetching city data:', error));
  }, []);

  const fetchDistricts = (cityCode) => {
    if (cityCode) {
      axios.get(`https://provinces.open-api.vn/api/p/${cityCode}?depth=2`)
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

  // Define a dummy request function for custom upload handling (you can customize this)
  const dummyRequest = ({ file, onSuccess }) => {
    setTimeout(() => {
      onSuccess('ok');
    }, 0);
  };

  const uploadButton = (
    <div>
      <UploadOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );


  const handleCityChange = (event) => {
    console.log(event.target.value);
    const [name, code] = event.target.value.split(',');
    fetchDistricts(code);
    setSelectedCity(name)
  };

  const handleDistrictChange = (event) => {
    const name = event.target.value;
    setSelectedDistrict(name)
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
          quocGia: "Việt Nam"
        };
        onOk(state);
      })
      .catch((errorInfo) => {
        return <div>{errorInfo}</div>;
      });
  };

  const renderEditModal = () => {
    return (
      <Modal
        open={visible}
        title="Edit Location"
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
            name="quocGia"
            label="Quốc gia"
            initialValue="Việt Nam"
          >
            <Input />

          </Form.Item>

          <Form.Item
            label="Tỉnh thành"
            rules={[
              {
                required: true,
                message: 'This field is required.',
              },
            ]}
          >
            <select name='tinhThanh' className='ant-input css-dev-only-do-not-override-i0102m' id="city" onChange={handleCityChange}>

              {formData ? <option value={formData.tinhThanh} >{formData.tinhThanh}</option>
                : <option value="" required >Chọn Thành phố</option>}

              {cities.map((city) => (
                <option key={city.code} value={`${city.name.replace('Tỉnh ', '')},${city.code}`}>
                  {city.name.replace('Tỉnh ', '')}
                </option>
              ))}
            </select>
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
            <select name='tenViTri' className='ant-input css-dev-only-do-not-override-i0102m' id="district" onChange={handleDistrictChange} value={selectedDistrict}>
              {formData ? <option value={formData.tenViTri} >{formData.tenViTri}</option> : <option value="">Chọn vị trí</option>}
              {districts.map((district) => (

                <option key={district.code} value={district.name.replace('Quận ', '').replace('Huyện ', '')}>
                  {district.name.replace('Quận ', '').replace('Huyện ', '')}
                </option>

              ))}
            </select>

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
              showUploadList={false}
              beforeUpload={beforeUpload}
              // customRequest={dummyRequest}
              fileList={fileList} // Set fileList here
            >
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" style={{ width: '100%' }} />
              ) : (
                uploadButton
              )}
            </Upload>
          </Form.Item>
        </Form>
      </Modal >

    );
  };

  return (
    <>
      {renderEditModal()}
    </>
  );
}

export default LocationModal;
