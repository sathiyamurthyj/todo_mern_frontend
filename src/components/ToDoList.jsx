import { useContext, useEffect } from "react";
import ToDoContext from "../context/ToDoContext";
import Info from "./Info";
import ToDoItem from "./ToDoItem";


const ToDoList = () => {
  const {allToDo, getAllToDo, editToDo, deleteTodo, getToDoById, loading, error} = useContext(ToDoContext); 

  useEffect(()=>{
    getAllToDo();
  },[]);

  return (
    <section className="my-4 mx-8">
        {
            loading ? (
            <Info message="Loading..." />
        ):(
            allToDo && allToDo.map((todo) => {
                return <ToDoItem todo={todo} key={todo._id} editToDo={editToDo} deleteTodo={deleteTodo} getToDoById={getToDoById} />
            })
        )}
        {
            allToDo && allToDo.length === 0 && <Info message="You have no tasks to complete" />
        }
        {
            !loading && error && <Info message="Unable to process request.Please Try again later" />
        }
    </section>
  )
}

export default ToDoList;