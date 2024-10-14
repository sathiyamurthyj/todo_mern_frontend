import axios from "axios";


const axiosInstance = axios.create({
    baseURL: `https://todo-mern-backend-7k0m.onrender.com/todo`
});

export default axiosInstance;