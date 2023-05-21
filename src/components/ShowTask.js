import { useState } from "react";

export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleEdit = (id) => {
    const selectedTask = tasklist.find((todo) => todo.id === id);

    setTask(selectedTask);
  };

  const handleDelete = (id) => {
    const updatedTasklist = tasklist.filter((todo) => todo.id !== id);
    setTasklist(updatedTasklist);
  };
  const handleBackgroundColor = (id) => {
    const updatedTasklist = tasklist.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });

    setTasklist(updatedTasklist);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div className="tasklist-info">
          <span className="title">Tasks</span>
          <span className="count">{tasklist.length}</span>
          <span className="title">Done</span>
          <span className="count">
            {tasklist.filter((todo) => todo.completed).length}
          </span>
        </div>
        <button onClick={() => setTasklist([])} className="clearAll">
          Clear All
        </button>
      </div>

      <ul>
        {tasklist.map((todo) => (
          <li
            key={todo.id}
            id={todo.id}
            className={todo.completed ? "completed" : ""}
          >
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            <i
              onClick={() => handleBackgroundColor(todo.id)}
              className="bi bi-check2-square"
            ></i>
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
