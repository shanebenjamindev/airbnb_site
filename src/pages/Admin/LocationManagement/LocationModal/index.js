import React, { useEffect, useState } from 'react';
import { Modal, Upload, Form, Input, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import axios from 'axios';

function LocationModal({ visible, onCancel, onOk, data, mode }) {
  const [form] = Form.useForm();

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);

  const [selectedCity, setSelectedCity] = useState(data ? (data.tinhThanh) : "")
  const [selectedDistrict, setSelectedDistrict] = useState(data ? (data.tenViTri) : "")

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

  const handleCityChange = (event) => {
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
          tinhThanh: selectedCity,
          vitri: selectedDistrict,
        };
        onOk(state);
      })
      .catch((errorInfo) => {
        return <div>{errorInfo}</div>;
      });
  };


  const renderAddModal = () => {
    return (
      <Modal
        open={visible}
        title='Add Location'
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
        <Form form={form}>
          <Form.Item
            label="Tỉnh thành"
          >
            <div className='d-flex'>
              <div className='col-7 ant-form-item-control-input-content'>
                <select name='tinhThanh' className='ant-input css-dev-only-do-not-override-i0102m' id="city" onChange={handleCityChange}>
                  <option value="" disabled>Chọn Thành phố</option>
                  {cities.map((city) => (
                    <option key={city.code} value={`${city.name.replace('Tỉnh ', '')},${city.code}`}>
                      {city.name.replace('Tỉnh ', '')}
                    </option>
                  ))}
                </select>
              </div>

              <div className='col-5 ant-form-item-control-input-content'>
                <select className='ant-input css-dev-only-do-not-override-i0102m' id="district" onChange={handleDistrictChange}>
                  <option value="" disabled>Chọn vị trí</option>
                  {districts.map((district) => (
                    <option key={district.code} value={district.name.replace('Quận ', '').replace('Huyện ', '')}>
                      {district.name.replace('Quận ', '').replace('Huyện ', '')}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </Form.Item>
          <Form.Item
            name="quocGia"
            label="Quốc gia"
            initialValue="Việt Nam"
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="hinhAnh"
            label="Hình ảnh"
            rules={[
              {
                required: true,
              },
              {
                validator: (rule, value, callback) => {
                  if (value && value.length > 0) {
                    const file = value[0];
                    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
                    if (!allowedFileTypes.includes(file.type)) {
                      callback('Invalid file type. Please upload a JPEG, PNG, or GIF image.');
                    } else {
                      callback();
                    }
                  } else {
                    callback('Please upload an image!');
                  }
                },
              },
            ]}
            valuePropName="fileList"
            getValueFromEvent={(event) => {
              const fileList = event && event.fileList;
              if (Array.isArray(fileList)) {
                return fileList;
              }
              return [];
            }}
          >
            <Upload
              beforeUpload={() => false}
              maxCount={1}
              listType="picture"
              showUploadList={{ showRemoveIcon: false }}
              fileList={(data && data.hinhAnh) ? [data.hinhAnh] : []} // Ensure fileList is always an array
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
        </Form>
      </Modal>
    );
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
        <Form form={form} initialValues={data}>
          <Form.Item
            label="Tỉnh thành"
          >
            <div className='d-flex'>
              <div className='col-7 ant-form-item-control-input-content'>
                <select name='tinhThanh' className='ant-input css-dev-only-do-not-override-i0102m' id="city" onChange={handleCityChange}>
                  <option value="" readOnly>{data.tinhThanh}</option>
                  {cities.map((city) => (
                    <option key={city.code} value={`${city.name.replace('Tỉnh ', '')},${city.code}`}>
                      {city.name.replace('Tỉnh ', '')}
                    </option>
                  ))}
                </select>
              </div>

              <div className='col-5 ant-form-item-control-input-content'>
                <select name='tenViTri' className='ant-input css-dev-only-do-not-override-i0102m' id="district" onChange={handleDistrictChange}>
                  <option value="" readOnly>{data.tenViTri}</option>
                  {districts.map((district) => (
                    <option key={district.code} value={district.name.replace('Quận ', '').replace('Huyện ', '')}>
                      {district.name.replace('Quận ', '').replace('Huyện ', '')}
                    </option>
                  ))}
                </select>
              </div>
            </div>

          </Form.Item>
          <Form.Item
            name=""
            label="Quốc gia"
            initialValue="Việt Nam"
          >
            <Input readOnly />
          </Form.Item>
          <Form.Item
            name="hinhAnh"
            label="Hình ảnh"
            rules={[
              {
                required: true,
              },
              {
                validator: (rule, value, callback) => {
                  if (value && value.length > 0) {
                    const file = value[0];
                    const allowedFileTypes = ['image/jpeg', 'image/png', 'image/gif'];
                    if (!allowedFileTypes.includes(file.type)) {
                      callback('Invalid file type. Please upload a JPEG, PNG, or GIF image.');
                    } else {
                      callback();
                    }
                  } else {
                    callback('Please upload an image!');
                  }
                },
              },
            ]}
            valuePropName="fileList"
            getValueFromEvent={(event) => {
              const fileList = event && event.fileList;
              if (Array.isArray(fileList)) {
                return fileList;
              }
              return [];
            }}
          >
            <Upload
              beforeUpload={() => false}
              maxCount={1}
              listType="picture"
              showUploadList={{ showRemoveIcon: false }}
              fileList={(data && data.hinhAnh) ? [data.hinhAnh] : []} // Ensure fileList is always an array
            >
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>

          </Form.Item>
        </Form>
      </Modal>
    );
  };

  return (
    <>
      {data ? renderEditModal() : renderAddModal()}
    </>
  );
}

export default LocationModal;
