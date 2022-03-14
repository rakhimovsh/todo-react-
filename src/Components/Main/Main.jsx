import React from "react";
import "./Main.scss";
import Item from "../Item/Item";
import Button from "../Button/Button";

function Main() {
  const [todos, setTodos] = React.useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );
  const [type, setType] = React.useState(
    window.localStorage.getItem("type") || "all"
  );

  const handleDelete = (evt) => {
    const todoId = evt.target.dataset.todoId - 0;
    const filtredTodo = todos.filter((todo) => todoId != todo.id);
    window.localStorage.setItem("todos", JSON.stringify(filtredTodo));
    setTodos(filtredTodo);
  };
  const handleCheck = (evt) => {
    const todoCheckId = evt.target.dataset.todoCheck - 0;
    const foundTodo = todos.find((todo) => todoCheckId == todo.id);
    foundTodo.isComplited = !foundTodo.isComplited;
    window.localStorage.setItem("todos", JSON.stringify([...todos]));
    setTodos([...todos]);
  };
  const getTodosByType = (_type, _todos) => {
    if (_type === "all") {
      return _todos;
    } else if (_type === "uncomlited") {
      return _todos.filter((todo) => !todo.isComplited);
    } else if (_type === "complited") {
      return _todos.filter((todo) => todo.isComplited);
    }
  };
  const localGetType = (_type) => {
    setType(_type);
    window.localStorage.setItem("type", _type);
  };
  return (
    <section className="hero container">
      <input
        onKeyUp={(evt) => {
          if (evt.code === "Enter") {
            const newTodo = {
              id: todos[todos.length - 1]?.id + 1 || 0,
              title: evt.target.value.trim(),
              isComplited: false,
            };
            setType("all");
            window.localStorage.setItem(
              "todos",
              JSON.stringify([...todos, newTodo])
            );
            setTodos([...todos, newTodo]);
            evt.target.value = "";
          }
        }}
        className="hero__input"
        type="text"
        placeholder="Enter text"
        autoComplete="off"
        required
      />
      <ul className="hero__list">
        {todos.length > 0
          ? getTodosByType(type, todos).map((todo) => (
              <Item
                key={todo.id}
                todo={todo}
                handleDelete={handleDelete}
                handleCheck={handleCheck}
              >
                {todo.title}
              </Item>
            ))
          : ""}
      </ul>
      <div className="hero__bottom">
        <Button onClick={() => localGetType("all")} text="All" typeBtn="all" />
        <Button
          onClick={() => localGetType("uncomlited")}
          text="Uncomlited"
          typeBtn="uncomlited"
        />
        <Button
          onClick={() => localGetType("complited")}
          text="Complited"
          typeBtn="complited"
        />
      </div>
    </section>
  );
}

export default Main;
