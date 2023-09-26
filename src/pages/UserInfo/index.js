import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { actDeleteUserRoom, actEditUserInfo, actGetUserInfo } from '../../redux/actions/actUser';
import './user-info.css'
import { useCheckRole } from '../../hooks/useCheckRole'
import { Upload, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function UserInfo() {
    const dispatch = useDispatch()
    const user = useCheckRole()

    const { loading, error } = useSelector(state => state.userReducer)
    const listRoomByUser = useSelector((state) => state.roomReducer.data)
    const [isEditMode, setIsEditMode] = useState(false);
    const [userAvatar, setUserAvatar] = useState("");

    const [isModalVisible, setIsModalVisible] = useState(false);


    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    const [editedUser, setEditedUser] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        birthday: user.birthday,
        role: user.role,
    });
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        gender: true,
        email: '',
        password: '',
        birthday: '',
        role: '',
        avatar: user.avatar,
    });

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>Vui lòng kiểm tra lại {error}</div>
        }
    }

    const renderListRoomByUser = () => {
        return (
            <>
                <table className="table text-center">
                    <thead>
                        <tr className='text-center'>
                            <th>Phòng</th>
                            <th>Ngày đến</th>
                            <th>Ngày đi</th>
                            <th>Khách</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listRoomByUser?.map((room, index) => (
                            <tr key={index}>
                                <td>{room.maPhong}</td>
                                <td>{room.ngayDen}</td>
                                <td>{room.ngayDi}</td>
                                <td>{room.soLuongKhach}</td>
                                <td className='d-flex justify-content-around'>
                                    <Link to={`/roomdetail/${room.maPhong}`} className="btn btn-outline-info">View</Link>
                                    <button className="btn btn-outline-danger" onClick={handleDelete} value={room.id}>Delete</button>
                                </td>
                            </tr>
                        )).slice(0, 5)}
                    </tbody>

                </table>
            </>
        );
    }

    useEffect(() => {
        dispatch(actGetUserInfo(user.id))
    }, [user.id, dispatch]);

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({
            ...editedUser,
            [name]: value
        });
        if (name === 'name') {
            setErrors({
                ...errors,
                name: value.trim() === '' ? 'Tên không được để trống' : value.trim().length < 4 ? 'Phải từ 4 kí tự' : '',
            });
        } else if (name === 'phone') {
            setErrors({
                ...errors,
                phone: value.trim() === '' ? 'Số điện thoại không được để trống' : !/^\d{10,11}$/.test(value) ? 'Số điện thoại không hợp lệ' : '',
            });
        } else if (name === 'email') {
            setErrors({
                ...errors,
                email: value.trim() === '' ? 'Email không được để trống' : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Email không hợp lệ' : '',
            });
        } else if (name === 'birthday') {
            setErrors({
                ...error,
                birthday: !/^\d{4}-\d{2}-\d{2}$/.test(value) ? "Ngày sinh không hợp lệ" : ""
            })
        }
        else {
            setErrors({
                ...errors,
                [name]: '',
            });
        }

    };

    const handleSave = () => {
        dispatch(actEditUserInfo(user.id, editedUser))
        setIsEditMode(false)
    }

    // Tab:
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // const handleAvatarChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = (e) => {
    //             setEditedUser({
    //                 ...editedUser,
    //                 avatar: e.target.result,
    //             });
    //         console.log(editedUser);

    //         };
    //         reader.readAsDataURL(file);

    //     }

    // };
    const handleAvatarChange = (info) => {
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
            setEditedUser({
                ...editedUser,
                avatar: info.file.response.url, // Update the edited avatar with the uploaded image URL
            });
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const handleDelete = (e) => {
        e.preventDefault();
        if (window.confirm(`Bạn có muốn xóa phòng ${e.target.value} ?`)) {
            dispatch(actDeleteUserRoom(e.target.value))
            dispatch(actGetUserInfo(user.id))
        }
    }

    return (
        <>
            <div className='container section__UserInfo align-items-center d-md-flex'>
                <div className='section__Background'>
                    <div className='section__BackgroundTitle'>
                        <h2 className='thanks-message'>Profile Page</h2>
                    </div>
                </div>
                <div className='section__Item-primary d-flex'>
                    <div className='userAvatar__Container section__Item-primary  col-6 col-md-3 col-lg-3 p-3 d-none d-md-block'>
                        <div className='text-center flex-column align-items-center h-100 justify-content-center'>
                            <div className='d-flex justify-content-center py-2'>
                                {/* Add a button or icon to trigger the file input */}
                                <label htmlFor="avatar-input" className="avatar-trigger">
                                    <div className="avatar-overlay">
                                        <div className="avatar-overlay-text">Change Avatar</div>
                                    </div>

                                    <button onClick={showModal} className="btn btn-primary">
                                        Open Avatar Upload Form
                                    </button>

                                    {isModalVisible && (
                                        <AvatarUploadModal open={isModalVisible} onCancel={handleCancel} />
                                    )}


                                    <input
                                        name='avatar'
                                        type="file"
                                        id="avatar-input"
                                        accept="image/*"
                                        style={{ display: 'none' }}
                                        onChange={handleAvatarChange}
                                    />
                                </label>
                                {/* Display the selected or default avatar */}
                                <img
                                    className=''
                                    width="200"
                                    height="200"
                                    alt=""
                                    src={editedUser.avatar || user.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                />
                            </div>
                            <div className='main__p'>{user.name}</div>
                        </div>
                    </div>

                    <div className='user-Info__Container  col-md-9 col-lg-9'>

                        <div className='userAvatar__Container text-center d-block d-md-none'>
                            <div className='userAvatar d-flex justify-content-center align-items-center h-100 '>
                                <input
                                    name='avatar'
                                    type="file"
                                    id="avatar-input"
                                    accept="image/*"
                                    style={{ display: 'none' }}

                                />
                                <img
                                    className=''
                                    width="200"
                                    height="200"
                                    alt=""
                                    src={`${editedUser.avatar}` || (user.avatar) ? (user.avatar) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                                />
                            </div>
                            <div className='main__p my-4'>{user.name}</div>
                        </div>
                        <Box sx={{ width: '100%' }}>
                            <Tabs
                                value={value}
                                className=''
                                onChange={handleChange}
                                aria-label="wrapped label tabs example"
                            >
                                <Tab label="User Information" className='' value={0} />
                                <Tab label="Room Contract" value={1} />
                            </Tabs>

                            {/* Content for Tab 0 (User Information) */}
                            {value === 0 && (
                                <div className='section__Item-secondary p-4'>
                                    <form className=''>
                                        <div className='form-header d-flex justify-content-end'>
                                            <div className='d-flex align-items-center'>
                                                <div className='mx-2'>
                                                    {error && <div className="">{showError()}</div>}
                                                </div>
                                                <Button
                                                    variant="contained"
                                                    color="warning"
                                                    className='mr-2'
                                                    onClick={() => setIsEditMode(!isEditMode)}
                                                >
                                                    {isEditMode ? 'Close' : 'Edit'}
                                                </Button>

                                                <Button
                                                    variant="contained"
                                                    color="warning"
                                                    onClick={handleSave}
                                                    disabled={!isEditMode} // Disable the save button when not in edit mode
                                                >
                                                    Save
                                                </Button>

                                            </div>
                                        </div>

                                        <div className='col-12'>
                                            <label className='main__p'>Email:</label>
                                            <input
                                                name='email'
                                                className={`form-control custom-formControl ${errors.email ? 'is-invalid' : ''}`}
                                                defaultValue={editedUser.email}

                                                readOnly={!isEditMode} // Make the input editable only in edit mode
                                                onChange={handleOnChange}
                                            />
                                            {errors.email && <div className="alert alert-danger error-message">{errors.email}</div>}

                                        </div>

                                        <div className='d-md-flex'>
                                            <div className='col-lg-6 col-md-6'>
                                                <div>
                                                    <label className='main__p'>Tên:</label>
                                                    <input
                                                        type='text'
                                                        name='name'
                                                        className={`form-control custom-formControl ${errors.name ? 'is-invalid' : ''}`}
                                                        defaultValue={editedUser.name}
                                                        onChange={handleOnChange}
                                                        readOnly={!isEditMode} // Make the input editable only in edit mode
                                                    />
                                                    {errors.name && <div className="alert alert-danger error-message">{errors.name}</div>}
                                                </div>
                                                <div className=''>
                                                    <label className='main__p'>Giới tính:</label>
                                                    <select
                                                        name='gender'
                                                        className='form-control custom-formControl'
                                                        disabled={!isEditMode} // Make the input editable only in edit mode
                                                        onChange={handleOnChange}
                                                        defaultValue={editedUser.gender}
                                                    >
                                                        <option className='' value={true}>Nam</option>
                                                        <option className='' value={false}>Nữ</option>
                                                    </select>
                                                </div>

                                                <div className=''>
                                                    <label htmlFor="birthday">Ngày sinh</label>
                                                    <input
                                                        type="date"
                                                        name="birthday"
                                                        id="birthday"
                                                        className={`form-control custom-formControl ${errors.birthday ? 'is-invalid' : ''}`}
                                                        required
                                                        onChange={handleOnChange}
                                                    />
                                                    {errors.birthday && <div className="alert alert-danger error-message">{errors.birthday}</div>}

                                                </div>

                                            </div>

                                            <div className='col-lg-6 col-md-6'>
                                                <div className=''>
                                                    <label className='main__p'>Số điện thoại:</label>
                                                    <input
                                                        name='phone'
                                                        className={`form-control custom-formControl ${errors.phone ? 'is-invalid' : ''}`}
                                                        defaultValue={editedUser.phone}
                                                        readOnly={!isEditMode} // Make the input editable only in edit mode
                                                        onChange={handleOnChange}
                                                    />
                                                    {errors.phone && <div className="alert alert-danger error-message">{errors.phone}</div>}
                                                </div>
                                                <div className=''>
                                                    <label className='main__p'>Quyền:</label>
                                                    <select
                                                        name='role'
                                                        className='form-control custom-formControl'
                                                        defaultValue={editedUser.role}
                                                        disabled={!isEditMode} // Make the input editable only in edit mode
                                                        onChange={handleOnChange}
                                                    >
                                                        <option className='' value="USER">USER</option>
                                                        <option className='' value="ADMIN">ADMIN</option>
                                                    </select>
                                                </div>

                                            </div>

                                        </div>




                                    </form>
                                </div>
                            )}

                            {/* Content for Tab 2 (Room) */}
                            {value === 1 && (
                                <div>
                                    <div className='user__ListRoom'>
                                        {(listRoomByUser) && listRoomByUser.length >= 1 ? (
                                            <div className='my-3'>
                                                <div className='text-right my-2'>
                                                    <Link to="/" className='btn__Primary' >
                                                        Thêm phòng
                                                    </Link>
                                                </div>
                                                <div className=' p-2 table-responsive'>

                                                    <>
                                                        {renderListRoomByUser()}
                                                    </>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='text-center noti__NotFound'>
                                                <div>
                                                    <h3 className='main__Title'>Not Found</h3>
                                                    <div className='main__'>Hiện bạn chưa đặt phòng ó</div>
                                                    <Link to="/">Hãy đặt thêm tại đây</Link>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </Box>
                    </div>
                </div>
            </div >

        </>
    );
};


const AvatarUploadModal = ({ open, onCancel }) => {
    const onFinish = (values) => {
        // Handle the form submission (e.g., upload the avatar)
        console.log('Form values:', values);
        // You can add your API call to upload the avatar here
        // Remember to handle success and error cases
        message.success('Avatar uploaded successfully');
    };

    return (
        <Modal
            title="Avatar Upload"
            open={open} // Use 'visible' instead of 'open'
            onCancel={onCancel}
            footer={null}
        >
            <Form onFinish={onFinish}>
                {/* Avatar Upload */}
                <Form.Item
                    label="Avatar"
                    name="avatar"
                    rules={[
                        {
                            required: true,
                            message: 'Please upload your avatar!',
                        },
                    ]}
                >
                    <Upload
                        name="avatar"
                        action="/your-upload-api-endpoint" // Replace with your actual API endpoint
                        listType="picture-card"
                        showUploadList={false}
                    >
                        <Button icon={<UploadOutlined />}>Upload Avatar</Button>
                    </Upload>
                </Form.Item>

                {/* Submit Button */}
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
