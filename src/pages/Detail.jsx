import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getTodos} from "../redux/modules/ModifyTodo";

const Detail = () => {
 const dispatch = useDispatch();
 const todoList = useSelector((state)=>state.todos.list);
 const navigate = useNavigate();
 const {id} = useParams();
 const todos = todoList.find((todo)=>todo.id == id);

 useEffect(()=>{
    setTimeout(()=>{
        dispatch(getTodos())
    },300)
 },[])

    return (
        <DetailBox>
            <p>id : {todos.id}</p>
            <h1>{todos.title}</h1>
            <hr></hr>
            <h3>{todos.body}</h3>
            <DetailBut
            onClick={()=>{navigate('/')}}>홈으로!</DetailBut>
        </DetailBox>
    );
};


const DetailBox = styled.div`
    width : 400px;
    height: 400px;
    margin: auto;
    border: 1px solid #ddd;
    border-radius : 15px;
    text-align: center;
`
const DetailBut = styled.button`
    background-color: cornsilk;
    color: limegreen;
    border: 2px solid rgb(119, 228, 113);
    border-radius: 15px;
    padding: 8px;`


export default Detail;