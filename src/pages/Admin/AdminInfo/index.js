import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { actGetRoomByUser } from '../../../redux/types/actions';
import './admin-info.css'

export default function AdminInfo() {
    const dispatch = useDispatch();

    const userData = JSON.parse(localStorage.getItem("USER_LOGIN"));
    const [isEditMode, setIsEditMode] = useState(false);
    const [newProfile, setNewProfile] = useState({
        avatar: '',
        name: '',
        email: '',
        phone: '',
        birthday: '',
        gender: true,
        role: '',
    })

    useEffect(() => {
        dispatch(actGetRoomByUser(user.id))
        if (user) {
            setNewProfile({
                avatar: user.avatar,
                name: user.name,
                email: user.email,
                phone: user.phone,
                birthday: user.birthday,
                gender: user.gender,
                role: user.role,
            })
        }

    }, [])

    const { loading, data, error } = useSelector((state) => state.listRoomByIdReducer)

    const listRoomByUser = data

    // Tab:
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setNewProfile({
            avatar: user.avatar,
            name: user.name,
            email: user.email,
            phone: user.phone,
            birthday: user.birthday,
            gender: user.gender,
            role: user.role,
        })
    };
    const [selectedImage, setSelectedImage] = useState(null);

    if (!userData) {
        return null;
    } else {
        var { user } = userData;
    }

    const handleSave = (e) => {
        console.log(newProfile);
        setIsEditMode(false);
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setNewProfile({
            ...newProfile,
            [name]: value,
        })
    };


    const renderListRoomByUser = () => {
        return listRoomByUser?.map((room, index) => {
            return <Link to={`/roomdetail/${room.id}`} key={index} className='card p-1 m-3'>
                <div className='d-md-flex align-items-center'>
                    <div className='col-md-6'>
                        <img className="img-fluid" src={room.hinhAnh} alt="Cardcap" />
                    </div>
                    <div className='col-md-6'>
                        <span className="">{room.tenPhong}</span>
                        <p>Price: {room.giaTien}</p>
                    </div>
                </div>
            </Link>

        })
    }

    const handleAvatarClick = () => {
        // Open a file selection dialog when the avatar is clicked
        const fileInput = document.getElementById('avatar-input');
        fileInput.click();
    };

    const handleUploadImage = (e) => {
        // Send the selected image to the server for upload
        // Update the user's avatar URL with the received image URL
        // Update the state accordingly
        console.log(e.target.value);
    };


    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target.result); // Store the selected image
            };
            reader.readAsDataURL(file);
        }
    };
    return (
        <div className='container section__Content-secondary'>
            <div className='section__Background'>
                <div className='section__BannerTitle'>
                    <h2 className='thanks-message'>Profile Page</h2>
                </div>
            </div>
            <div className='row'>
                <div className='userAvatar__Container bg-info col-6 col-md-3 col-lg-3 p-3 d-none d-md-block'>
                    <div className='userAvatar text-center flex-column align-items-center h-100 justify-content-center'>
                        <div className='d-flex justify-content-center py-5'>
                            <input
                                name='avatar'
                                type="file"
                                id="avatar-input"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleAvatarChange}
                            />
                            <img
                                className=''
                                width="200"
                                height="200"
                                alt=""
                                src={`${newProfile.avatar}` || (user.avatar) ? (user.avatar) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
                            />
                        </div>
                        <div className='main__p my-4'>{user.name}</div>
                    </div>
                </div>

                <div className='userInfo__Container col-md-9 col-lg-9 section__Item-primary'>

                    <div className='userAvatar__Container text-center d-block d-md-none'>
                        <div className='userAvatar d-flex justify-content-center align-items-center h-100 '>
                            <input
                                name='avatar'
                                type="file"
                                id="avatar-input"
                                accept="image/*"
                                style={{ display: 'none' }}
                                onChange={handleAvatarChange}
                            />
                            <img
                                className=''
                                width="200"
                                height="200"
                                alt=""
                                src={`${newProfile.avatar}` || (user.avatar) ? (user.avatar) : "https://cdn-icons-png.flaticon.com/512/149/149071.png"}
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
                            <Tab label="Room" value={1} />
                        </Tabs>

                        {/* Content for Tab 0 (User Information) */}
                        {value === 0 && (
                            <div className='section__Item-secondary p-4'>
                                <form className=''>
                                    <div className='form-header d-flex justify-content-end'>
                                        <div className='d-flex align-items-center'>
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
                                            className='form-control custom-formControl'
                                            placeholder={user.email}
                                            readOnly={!isEditMode} // Make the input editable only in edit mode
                                            onChange={handleOnChange}
                                        />
                                    </div>

                                    <div className='d-md-flex'>
                                        <div className='col-lg-6 col-md-6'>
                                            <div>
                                                <label className='main__p'>Tên:</label>
                                                <input
                                                    type='text'
                                                    name='name'
                                                    className='form-control custom-formControl'
                                                    defaultValue={user.name}
                                                    onChange={handleOnChange}
                                                    readOnly={!isEditMode} // Make the input editable only in edit mode
                                                />
                                            </div>
                                            <div className=''>
                                                <label className='main__p'>Giới tính:</label>
                                                <select
                                                    name='gender'
                                                    className='form-control custom-formControl'
                                                    defaultValue={user.role}
                                                    disabled={!isEditMode} // Make the input editable only in edit mode
                                                    onChange={handleOnChange}
                                                >
                                                    <option className='' value={true}>Nam</option>
                                                    <option className='' value={false}>Nữ</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className='col-lg-6 col-md-6'>
                                            <div className=''>
                                                <label className='main__p'>Số điện thoại:</label>
                                                <input
                                                    name='phone'
                                                    className='form-control custom-formControl'
                                                    defaultValue={user.phone}
                                                    readOnly={!isEditMode} // Make the input editable only in edit mode
                                                    onChange={handleOnChange}
                                                />
                                            </div>
                                            <div className=''>
                                                <label className='main__p'>Quyền:</label>
                                                <select
                                                    name='role'
                                                    className='form-control custom-formControl'
                                                    defaultValue={user.role}
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

                        {/* Content for Tab 1 (Room) */}
                        {value === 1 && (
                            <div>
                                {listRoomByUser.length !== 0 ? (
                                    <div className='section__Item-secondary'>
                                        {renderListRoomByUser()}
                                    </div>) : (<div className='main__p'> Hiện chưa đặt phòng </div>)}
                            </div>
                        )}
                    </Box>
                </div>
            </div >
        </div >

    );
}
