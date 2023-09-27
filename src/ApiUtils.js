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
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTUzNjAwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1NjgzNjAwfQ.s4X0R0Wi80X0f9MLJ2XYxRKJdQJBW27dwvkpfN03100`,
        token: JSON?.parse(localStorage.getItem("USER_LOGIN"))?.token
    };
    return config;
});

export default api;
