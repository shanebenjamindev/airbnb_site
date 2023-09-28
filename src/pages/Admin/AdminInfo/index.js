import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Modal } from 'antd';
import { actDeleteUserRoom, actEditUserInfo, actGetUserInfo, actUploadAvatar } from '../../../redux/actions/actUser';
import './admin-info.css'
import { useCheckRole } from '../../../hooks/useCheckRole'
import { Upload, Form, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

export default function UserInfo() {
    const dispatch = useDispatch()
    const user = useCheckRole()

    const [isEditMode, setIsEditMode] = useState(false);
    const { error } = useSelector(state => state.userReducer)

    const [userAvatar, setUserAvatar] = useState({
        avatar: user.avatar,
        avatarPreview: "",
    })

    const [editedUser, setEditedUser] = useState({
        name: user.name,
        email: user.email,
        phone: user.phone,
        gender: user.gender,
        birthday: user.birthday,
    });
    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        gender: '',
        email: '',
        password: '',
        birthday: '',
    });

    const showError = () => {
        if (error) {
            return <div className='alert alert-danger'>Vui lòng kiểm tra lại {error}</div>
        }
    }

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

    const handleSave = (e) => {
        console.log(errors);
        dispatch(actEditUserInfo(user.id, editedUser))
        setIsEditMode(false)
    }

    // Tab:
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleAvatarChange = (e) => {
        setUserAvatar({
            avatarPreview: URL.createObjectURL(e.target.files[0]),
            avatar: e.target.files[0]
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // You can add your form submission logic here
    };


    return (
        <div className='container section__UserInfo align-items-center d-md-flex'>
            <div className='section__Item-primary d-flex'>
                <div className='userAvatar__Container section__Item-primary  col-6 col-md-3 col-lg-3 p-3 d-none d-md-block'>
                    <div className='text-center flex-column align-items-center h-100 justify-content-center'>
                        <div className='d-flex justify-content-center py-2'>

                            <img
                                className=''
                                width="200"
                                height="200"
                                alt=""
                                src={userAvatar.avatarPreview || user.avatar || "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
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

                    <div className='section__Item-secondary p-4'>
                        <form className='' onSubmit={handleSubmit}>
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
                                        disabled={!isEditMode || Object.values(errors).some(error => error !== '')}
                                    >
                                        Save
                                    </Button>
                                </div>
                            </div>

                            <div className='col-12'>
                                <label className='main__p'>Email:</label>
                                <input
                                    type='email'
                                    name='email'
                                    className={`form-control custom-formControl ${errors.email ? 'is-invalid' : ''}`}
                                    defaultValue={editedUser.email}

                                    readOnly={!isEditMode} // Make the input editable only in edit mode
                                    onChange={handleOnChange}
                                />
                                {errors.email && <div className="alert alert-danger error-message">{errors.email}</div>}

                            </div>

                            <div className='d-md-flex'>
                                <div className='col-lg-6 col-md-6 main__p'>
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
                                        <label className=''>Giới tính:</label>
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

                                    <div>
                                        <label htmlFor="avatar">Avatar:</label>
                                        <input type='file' name="avatar" onChange={handleAvatarChange} />
                                    </div>

                                </div>

                                <div className='col-lg-6 col-md-6'>
                                    <div className=''>
                                        <label className='main__p'>Số điện thoại:</label>
                                        <input
                                            type='tel'
                                            name='phone'
                                            className={`form-control custom-formControl ${errors.phone ? 'is-invalid' : ''}`}
                                            defaultValue={editedUser.phone}
                                            readOnly={!isEditMode} // Make the input editable only in edit mode
                                            onChange={handleOnChange}
                                        />
                                        {errors.phone && <div className="alert alert-danger error-message">{errors.phone}</div>}
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
                                    <div className=''>
                                        <label className=''>Chức vụ:</label>
                                        <select
                                            name='role'
                                            className='form-control custom-formControl'
                                            disabled={!isEditMode} // Make the input editable only in edit mode
                                            onChange={handleOnChange}
                                            defaultValue={editedUser.gender}
                                        >
                                            <option className='' value="ADMIN">ADMIN</option>
                                            <option className='' value="USER">USER</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

