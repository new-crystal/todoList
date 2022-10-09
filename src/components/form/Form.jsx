import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { addTodos } from "../../redux/modules/ModifyTodo";
import axios from "axios";

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [id, setId] = useState(3);
  const inputRef = useRef(null);
  const [todo, setTodo] = useState({
     title: "", body: ""})

  const onChangeInputTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeInputBody = (event0) => {
    setBody(event0.target.value);
  };

  const onClickAddButton = () => {
    setId(id + 1);
    dispatch(addTodos({id, title, body}));
    setTodo({title, body})
    
    setTitle("");
    setBody("");
    inputRef.current.focus();
  };
  // const createTodos = axios.post("http://localhost:3001/posts", todo)
  
  // console.log(createTodos);

  return (
    <form className="input-box">
      <input
        className="title-input"
        name="title"
        value={title}
        type="text"
        ref={inputRef}
        placeholder="제목을 입력해주세요"
        onChange={onChangeInputTitle}
      />

      <input
        className="body-input"
        name="body"
        value={body}
        type="text"
        ref={inputRef}
        placeholder="내용을 입력해주세요"
        onChange={onChangeInputBody}
      />

      <button type="submit" className="add-btn" onClick={onClickAddButton}>
        추가
      </button>
    </form>
  );
};

export default Form;
