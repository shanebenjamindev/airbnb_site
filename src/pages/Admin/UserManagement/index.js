import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { actDeleteRoom, actHomeListRoom } from '../../../redux/actions/actRoom'
import { actDeleteCity } from '../../../redux/actions/actCity'
import { Link } from 'react-router-dom'
import { actGetListUser } from '../../../redux/actions/actUser'
import { UploadFileOutlined } from '@mui/icons-material'
import { Input, Modal, Button, Form, Table, Upload } from "antd";

export default function UserManagement() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actGetListUser())
  }, [dispatch])

  const listUserData = useSelector((state) => state.userReducer.data)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  // const [formData, setFormData] = useState(null);
  // const [cityListData, setListCity] = useState(null)

  const showModal = (mode, cityData) => {
    setModalMode(mode);

    // setFormData(cityData);

    setIsModalVisible(true);
  };

  const handleModalOk = (id, newData) => {
    if (modalMode === "add") {
      if (!id) {
        // dispatch(actAddCity(newData))
      }

    } else if (modalMode === "edit") {
      // dispatch(actEditCity(id, newData))
    }
    setIsModalVisible(false);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <div className='container'>
      <h3 className="main__Title text-center">Quản lý người dùng</h3>


      <div className='text-right mb-2'>
        <button className="btn__Primary" onClick={() => showModal("add", null)}>Thêm</button>
      </div>
      <div className="table-responsive">
        <Table
          className="table"
          dataSource={listUserData}
          rowKey={"id"}
          columns={[
            {
              title: "ID",
              dataIndex: "id"
            },
            {
              title: "Hình ảnh",
              dataIndex: "avatar",
              render: (hinhAnh, index) => {
                return <img key={index} width={150} src={hinhAnh} alt=''></img>
              }
            },
            {
              title: "Họ Tên",
              dataIndex: "name"
            },
            {
              title: "Email",
              dataIndex: "email",
            },
            {
              title: "Chức vụ",
              dataIndex: "role",
            },
            {
              title: "Hành động",
              render: (user, index) => {
                return <div className='d-flex justify-content-around' key={index}>
                  <button className='btn btn-info' value={user.id} > <Link to={`/roomdetail/${user.id}`}>View</Link> </button>
                  <button className='btn btn-danger' value={user.id} onClick={(e) => {
                    e.preventDefault();
                    if (window.confirm("Bạn có muốn xóa " + user.name)) {
                      dispatch(actDeleteCity(user.id))
                    }
                  }}
                  > Delete </button>
                </div>
              }
            }
          ]}
        >
        </Table >
      </div >
      <UserModal open={isModalVisible} mode={setModalMode} onCancel={handleModalCancel} onOk={handleModalOk} />
    </div>
  )
}

function UserModal({ open, mode, onCancel, onOk }) {

  const [form] = Form.useForm();
  // const [fileList, setFileList] = useState([]); // Define fileList in the state
  const [imagePreview, setImagePreview] = useState(null);


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


  const handleOk = () => {
    form
      .validateFields()
      .then(() => {
        form.resetFields();
        const state = {
        };
        onOk(state);
      })
      .catch((errorInfo) => {
        console.error('Validation error:', errorInfo);
      });
  };

  return <Modal
    labelCol={{ span: 8 }}
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
    <Form form={form} >
      <Form.Item
        label="Quốc gia"
        name="quocGia"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 13 }}
        initialValue="Việt Nam"
      >
        <Input value="Việt Nam" disabled />
      </Form.Item>

      <Form.Item
        label="Tỉnh thành"
        name="tinhThanh"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 13 }}
        rules={[
          {
            required: true,
            message: 'This field is required.',
          },
        ]}
      >
      </Form.Item>

      <Form.Item
        label="Vị trí"
        name="viTri"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 13 }}
        rules={[
          {
            required: true,
            message: 'This field is required.',
          },
        ]}
      >

      </Form.Item>

      <Form.Item
        label="Upload Image"
        name="hinhAnh"
        labelCol={{ span: 8 }}
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
        >
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" style={{ width: '100%' }} />
          ) : (
            <div>
              <UploadFileOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          )}
        </Upload>
      </Form.Item>
    </Form>
  </Modal>
}