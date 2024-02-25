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
        `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoic3RyaW5nIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiUXVhblRyaSIsIm5iZiI6MTcwODg2ODY1OSwiZXhwIjoxNzA4ODcyMjU5fQ.823iATnsqxJl6TUKTIGJG0Qc4nhQoQf1Sqq9hFMTQ1Q`,
        token: JSON?.parse(localStorage.getItem("USER_LOGIN"))?.token
    };
    return config;
});

export default api;
