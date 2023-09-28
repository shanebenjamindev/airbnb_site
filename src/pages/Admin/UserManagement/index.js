import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actAddUser, actDeleteUser, actGetListUser } from '../../../redux/actions/actUser';
import { Table } from 'antd';
import UserModal from './UserModal';
import AddModal from './AddModal';

export default function UserManagement() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actGetListUser());
  }, []);

  const listUserData = useSelector((state) => state.userReducer.data);

  const [isShowModalOpen, setIsShowModalOpen] = useState(false);
  const [isAddModalVisible, setIsAddModalOpen] = useState(false);

  const [formData, setFormData] = useState(null);

  const [searchKeyword, setSearchKeyword] = useState("");
  const [filteredUserData, setFilteredUserData] = useState(null);

  const showModal = (user) => {
    setFormData(user);
    setIsShowModalOpen(true);
  };

  const addModal = () => {
    setIsAddModalOpen(true);
  };

  const handleAddModalOk = (newUser) => {
    // Handle your add here
    dispatch(actAddUser(newUser))
    setIsShowModalOpen(false);
  };


  const handleModalCancel = () => {
    setIsShowModalOpen(false);
    setIsAddModalOpen(false);
  };

  const handleSearch = () => {
    const filteredData = listUserData.filter((user) => {
      const { name, email, id } = user;
      const keyword = searchKeyword.toLowerCase();
      return (
        name.toLowerCase().includes(keyword) ||
        email.toLowerCase().includes(keyword) ||
        id.toString().includes(keyword)
      );
    });

    setFilteredUserData(filteredData);
  };

return (
    <div className="container">
      <h3 className="main__Title text-center">Quản lý người dùng</h3>

      <div className=" justify-content-center d-flex align-items-center mb-2">
        <button className="btn__Primary" onClick={() => addModal(null)}>
          Thêm
        </button>
        <div className='text-center w-50 mx-2'>
          <input
            type="text"
            className='form-control'
            placeholder="Tìm theo id, tên, email"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
        <button className="btn__Primary" onClick={() => handleSearch()}>Search</button>
      </div>

      <div className="table-responsive">
        <Table
          className="table"
          dataSource={filteredUserData !== null ? filteredUserData : listUserData}
          rowKey="id" columns={[
            {
              title: 'ID',
              dataIndex: 'id',
            },
            {
              title: 'Họ Tên',
              dataIndex: 'name',
            },
            {
              title: 'Email',
              dataIndex: 'email',
            },
            {
              title: 'Chức vụ',
              dataIndex: 'role',
            },
            {
              title: 'Hành động',
              render: (user, index) => {
                return (
                  <div className="d-flex justify-content-around" key={index}>
                    <button className="btn btn-info" value={user.id} onClick={() => showModal(user)}>
                      View
                    </button>
                    <button
                      className="btn btn-danger"
                      value={user.id}
                      onClick={(e) => {
                        e.preventDefault();
                        if (window.confirm('Bạn có muốn xóa ' + user.name)) {
                          dispatch(actDeleteUser(user.id));
                          window.location.reload();
                        }
                      }}
                    >
                      Delete
                    </button>
                  </div>
                );
              },
            },
          ]}
        ></Table>
      </div>
      <AddModal open={isAddModalVisible} onCancel={handleModalCancel} onOk={handleAddModalOk} />
      <UserModal open={isShowModalOpen} onCancel={handleModalCancel} formData={formData} />
    </div>
  );
}