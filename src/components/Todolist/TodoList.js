import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Navbar";

function TodoList() {
  //Todolist State
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    const todoStore = JSON.parse(localStorage.getItem("todoStore"));
    if (todoStore) setToDo(todoStore);
  }, []);
  useEffect(() => {
    localStorage.setItem("todoStore", JSON.stringify(toDo));
  }, [toDo]);

  //Temp State
  const [newTask, setNewtask] = useState("");
  const [updateData, setUpdateData] = useState("");

  //Add Task
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewtask("");
    }
  };

  //delete task

  const deleteTask = (id) => {
    let newTasks = toDo.filter((task) => task.id !== id);
    setToDo(newTasks);
  };

  //Mark task as done or completed
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id === id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  //Cancel update
  const cancelUpdate = () => {
    setUpdateData("");
  };

  //Change task for update
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  //update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };
  return (
    <>
    <Navbar title="Todo App"/>
      <div className="container todo">
        <br></br>
        <h2>To Do List ?</h2>
        <br></br>

        {updateData && updateData ? (
          <>
            {/* update Task */}
            <div className="row">
              <div className="col">
                <input
                  value={updateData && updateData.title}
                  onChange={(e) => changeTask(e)}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-auto">
                <button
                  onClick={updateTask}
                  className="btn btn-lg btn-success me-3"
                >
                  Update
                </button>
                <button
                  onClick={cancelUpdate}
                  className="btn btn-lg btn-warning"
                >
                  Cancel
                </button>
              </div>
            </div>
            <br />
          </>
        ) : (
          <>
            {/* add task */}
            <div className="row">
              <div className="col">
                <input
                  value={newTask}
                  onChange={(e) => setNewtask(e.target.value)}
                  className="form-control form-control-lg"
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-lg btn-success" onClick={addTask}>
                  ADD TO DO
                </button>
              </div>
            </div>
            <br />
          </>
        )}

        {/* display Todos */}

        {toDo && toDo.length ? "" : "No Tasks..."}

        {toDo &&
          toDo
            .sort((a, b) => (a.id > b.id ? 1 : -1))
            .map((task, index) => {
              return (
                <React.Fragment key={task.id}>
                  <div className="col taskBg">
                    <div className={task.status ? "done" : ""}>
                      <span className="taskNumber">{index + 1}</span>
                      <span className="taskText">{task.title}</span>
                    </div>

                    <div className="iconWrap">
                      <span
                        className="Completed / Not Completed"
                        onClick={(e) => markDone(task.id)}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>
                      {task.status ? null : (
                        <span
                          className="Edit"
                          onClick={() =>
                            setUpdateData({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            })
                          }
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}
                      <span
                        className="Delete"
                        onClick={() => deleteTask(task.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
      </div>
    </>
  );
}

export default TodoList;
