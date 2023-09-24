import React, { Fragment, useEffect, useState } from "react";
import { Input, Modal, Button, Form, Space, Table, Upload } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
} from "@ant-design/icons";

import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { actAddCity, actDeleteCity, actListCity } from "../../../redux/actions/actCity";
import './manage-location.css'
import axios from "axios";
import { UploadFileOutlined } from "@mui/icons-material";
// import LocationModal from "./LocationModal";

export default function AdminLocation(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actListCity())
  }, [dispatch]);

  const cityListData = useSelector(state => state.cityReducer?.data)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [formData, setFormData] = useState(null);

  const showModal = (mode, cityData) => {
    setModalMode(mode);

    setFormData(cityData);

    setIsModalVisible(true);
  };

  const handleModalOk = (newData) => {
    if (modalMode === "add") {
      console.log(newData);
      dispatch(actAddCity(newData))

    } else if (modalMode === "edit") {
      console.log('Edited Data:', newData);
    }
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      value: (city, index) => {
        return <span key={index}>{city.id}</span>;
      },
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Tên Vị Trí",
      dataIndex: "tenViTri",
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (city, index) => {
        return (
          <div>
            <img
              src={city}
              alt={city.tenViTri}
              width={50}
              height={50}
              onError={(e) => {
                e.target.onError = null;
                e.target.src = `https://piscum.photos/id/${index}/50/50`;
              }}
            />
          </div>
        );
      },
    },
    {
      title: "Tỉnh Thành",
      dataIndex: "tinhThanh",
      sorter: (a, b) => {
        let tinhThanhA = a.tinhThanh.toLowerCase().trim();
        let tinhThanhB = b.tinhThanh.toLowerCase().trim();
        if (tinhThanhA > tinhThanhB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Quốc Gia",
      dataIndex: "quocGia",
    },
    {
      title: "Hành  Động",
      render: (city, index) => {
        return (
          <div key={index}>
            <div className="d-md-flex justify-content-around">
              <button
                onClick={() => showModal("edit", city)}
                className="btn btn-outline-info"
              >
                <EditOutlined />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault()
                  if (window.confirm("Bạn có muốn xóa " + city.tenViTri)) {
                    dispatch(actDeleteCity(city.id))
                    // console.log(city.id);                    
                  }
                }}
                className="btn btn-outline-danger"
              >
                <DeleteOutlined />
              </button>
            </div>
          </div >
        );
      },
    },
  ];

  return (
    <div className="container-fluid">
      <div>
        <h3 className="main__Title my-2 text-center">Quản Lý Vị Trí</h3>
        <LocationModal visible={isModalVisible} onCancel={handleModalCancel} onOk={handleModalOk} mode={modalMode} />
        <div className="text-right my-2">
          <button className="btn__Primary" onClick={() => showModal("add")}>Thêm Vị Trí</button>
        </div>

        <div className="bg-white table-responsive" >
          {cityListData && (
            <Table
              className="table"
              columns={columns}
              dataSource={cityListData}
              rowKey={"id"}
            />

          )}
        </div>
      </div>
    </div>
  );
}

function LocationModal({ visible, onCancel, onOk, formData, mode }) {
  const [form] = Form.useForm();

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

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);

  const [selectedCity, setSelectedCity] = useState(formData ? (formData.tinhThanh) : "")
  const [selectedDistrict, setSelectedDistrict] = useState(formData ? (formData.tenViTri) : "")


  const initialFileList = formData && formData.hinhAnh
    ? [{ uid: '-1', name: 'image.png', status: 'done', url: formData.hinhAnh }]
    : [];

  const [fileList, setFileList] = useState(initialFileList);

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

  const uploadButton = (
    <div>
      <UploadFileOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );


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
          hinhAnh: imagePreview,
          tinhThanh: selectedCity,
          tenViTri: selectedDistrict,
          // quocGia: "Việt Nam"
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
        title={mode === 'edit' ? "Edit Location" : "Add Location"}
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
          //   rules={[
          //     {
          //       required: true,
          //       message: 'This field is required.',
          //     },
          //   ]}
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
              // showUploadList={false}
              beforeUpload={beforeUpload}
              // customRequest={dummyRequest}
              fileList={fileList}
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