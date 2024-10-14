import { useState } from "react";
import axiosInstance from "./ApiConfig";
import toast from "react-hot-toast";


const ApiService = () => {
  const [toDo, setToDo] = useState(null);
  const [allToDo, setAllToDo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getAllToDo = async()=>{
    setLoading(true);
    await axiosInstance.get("/all")
        .then((response)=>{
            setError(false);
            setAllToDo(response.data.message);
        })
        .catch((error)=>{
            setError(true);
            setAllToDo(null);
            toast.error((error.response && error.response.data.message) || error.message);
        });
        setLoading(false);
  };

  const addToDo = async(task, category) => {
    setLoading(true);
    await axiosInstance.post("/new", {task, category})
        .then((response)=>{
            setError(false);
            toast.success(response.data.message);
        })
        .catch((error)=>{
            setError(true);
            toast.error((error.response && error.response.data.message)|| error.message);
        });
        setLoading(false);
        getAllToDo();
  };

  const getToDoById = async(id) => {
    setLoading(true);
    await axiosInstance.get(`/${id}`)
        .then((response)=>{
            setError(false);
            setToDo(response.data.message[0]);
        })
        .catch((error)=>{
            setError(true);
            setToDo(null);
            toast.error((error.response && error.response.data.message)|| error.message);
        });
        setLoading(false);
  };

  const editToDo = async(id, task, category, isCompleted) => {
    setLoading(true);
    await axiosInstance.put(`/${id}`, {task, category, isCompleted})
        .then((response)=>{
            setError(false);
            setToDo(null);
            toast.success(response.data.message);
        })
        .catch((error)=> {
            setError(true);
            toast.error((error.response && error.response.data.message)|| error.message);
        });
        setLoading(false);
        getAllToDo();
  };

  const deleteTodo = async(id) => {
    setLoading(true);
    await axiosInstance.delete(`/${id}`)
        .then((response)=>{
            setError(false);
            toast.success(response.data.message);
        })
        .catch((error)=>{
            setError(true);
            toast.error((error.response && error.response.data.message)|| error.message);
        });
        setLoading(false);
        getAllToDo();
  };

  return {allToDo, toDo, loading, error, getAllToDo, getToDoById, addToDo, editToDo, deleteTodo, setToDo};
}

export default ApiService;