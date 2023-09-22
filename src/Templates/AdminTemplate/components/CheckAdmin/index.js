import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function CheckAdmin() {
    const userData = JSON?.parse(localStorage.getItem("USER_LOGIN"));
    const navigate = useNavigate();

    useEffect(() => {
        if (userData?.data !== "ADMIN") {
            alert("Bạn không có quyền truy cập");
            return navigate("/");
        }
    }, [])
}