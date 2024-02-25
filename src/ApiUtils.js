// dinh nghia lien quan toi Axios de goi data
/**
 * https://github.com/axios/axios
 * tim kiem: custom instance defaults 
 * 
 */

import axios from "axios";

const api = axios.create({
    baseURL: "https://airbnbnew.cybersoft.edu.vn/api",
})

/**
 * Interceptors (TOKEN)
 */


api.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem("USER_LOGIN") ? JSON.parse(localStorage.getItem("USER_LOGIN")).token : "";

    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
        TokenCybersoft: 
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI`,
        token: JSON?.parse(localStorage.getItem("USER_LOGIN"))?.token
    };
    return config;
});

export default api;
