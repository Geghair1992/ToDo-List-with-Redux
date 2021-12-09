import React,{useState} from "react";
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button'
import {Form} from 'react-bootstrap'
import styled from 'styled-components'

const StyledDiv = styled.div` 
  margin: 10px;
  width: 80%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  position: relative;
  left: 100px;  
`
const StyledBDiv = styled.div`
  margin: 10px;
  position: relative;
  left: 45%;
`



const TodoInput = () =>{
  


    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useLocalState('newTodo');
    // const [newTodo, setNewTodo] = useLocalStorage('newTodo',[]);
    // const [newTodo, setNewTodo] = useLocalStorage('');
    const handleChange = e => setNewTodo(e.target.value)
    const handleClick = () => dispatch ({
       type: 'ADD',
       payload: {
         label: newTodo,
         id: Math.ceil(Math.random() * 10000),
         },
       }) 

       function useLocalState(localItem){
        const [local,setState] = useState(localStorage.getItem(localItem));
      function setLocal(newItem){
        localStorage.setItem(localItem,newItem);
        setState(newItem)
      }
    
        return [local,setLocal];
      }

     return (
      <div>
         <StyledBDiv>
            <Button onClick={handleClick} variant="success">ADD New Items</Button>
         </StyledBDiv>   
          <StyledDiv>      
            <Form.Control size="lg" value={newTodo} onChange={handleChange}  type="text" placeholder="Write your daily SCHEDULE" />    
          </StyledDiv>         
      </div>
       )
    };

    export default TodoInput;