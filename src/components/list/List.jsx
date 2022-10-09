import React from "react";
import { useSelector } from "react-redux";
import Todo from "../todo/Todo";


const List = ({title, isDoneList}) => {
    const todos = useSelector((state) => state.todos.list);

    return (
        <div className="list">
            <div className="working"><h2>{title}</h2></div>
           <ul>
           {todos.map((todoItem)=> {
            if(isDoneList !== todoItem.isDone) return null;
            return(
            <Todo todoItem={todoItem}/>)})}
            </ul>
            
       
        </div>
    );
};

export default List;