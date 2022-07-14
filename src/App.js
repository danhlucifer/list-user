import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import "./App.css";
import Home from "./components/Home";
import TodoList from "./components/Todolist/TodoList";
import User from "./components/User/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/todolist" element={<TodoList />}/>
        <Route path="/user" element={<User />}/>
        <Route />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
