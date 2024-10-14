import Header from "../components/Header";
import ToDoForm from "../components/ToDoForm";
import ToDoList from "../components/ToDoList";
import ToDoContext from "../context/ToDoContext";
import ApiService from "../services/ApiService";


const Home = () => {
  const {allToDo, toDo, loading, error, getAllToDo, getToDoById, addToDo, editToDo, deleteTodo, setToDo} = ApiService();  
  return (
    <>
        <Header />
        <ToDoContext.Provider value={{allToDo, toDo, loading, error, getAllToDo, getToDoById, addToDo, editToDo, deleteTodo, setToDo}}>
            <ToDoForm />
            <ToDoList />
        </ToDoContext.Provider>
    </>
  )
}

export default Home;