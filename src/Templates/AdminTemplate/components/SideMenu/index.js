import { AppstoreOutlined, ShopOutlined, UserOutlined } from '@ant-design/icons'
import { CommentBankOutlined, LocationCityOutlined, RoomOutlined, Shop2Outlined, ShoppingBagOutlined } from '@mui/icons-material'
import { Menu } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SideMenu() {
    const navigate = useNavigate()

    return (
        <div className='SideMenu'>
            <Menu
                onClick={(item) => {
                    navigate(item.key)
                }}
                items={[
                    {
                        label: "Dashboard",
                        icon: <AppstoreOutlined />,
                        key: "dashboard"
                    },

                    {
                        label: "Location",
                        icon: <RoomOutlined />,
                        key: "manage-locations",
                    },

                    {
                        label: "Room",
                        icon: <LocationCityOutlined />,
                        key: "manage-rooms"
                    },

                    {
                        label: "Comment",
                        icon: <CommentBankOutlined />,
                        key: "manage-comments"
                    },

                    {
                        label: "User",
                        icon: <UserOutlined />,
                        key: "manage-users"
                    },
                    
                ]}
            >
            </Menu>

        </div>
    )
}
