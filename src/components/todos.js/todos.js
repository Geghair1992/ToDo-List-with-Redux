import React from "react";
import { useDispatch,useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button'
import styled from 'styled-components';


const StyledLi = styled.li`
  margin: 10px;  
  list-style-type:none;
  position: relative;
  left: 45%;
  `
const StyledA = styled.a`
  text-decoration: none;
  font-size: 2em;
  color: blue;
  position: relative;
  right: 100px;  
  @media only screen and (max-width:768px){
    font-size: 0.5em;
    color: yellow;
    text-decoration: dotted;
  }
`
const StyledH3 = styled.h3`
  position: relative;
  left: 40%;
  padding: 10px;
  
`

const Todos = () =>{
    const dispatch = useDispatch();
    const todos = useSelector(state=>state.todos);
    const handleClick = id => dispatch({
      type: 'DELETE',
      payload: id,
    });
    if(!todos || !todos.length){
      return <StyledH3>Write Your Daily Sceduale</StyledH3>
    }
    return(
      <ul>
        {
          todos.map(todo => <StyledLi >          
           <StyledA key={todo.id}> {todo.label}  </StyledA>         
            <Button onClick={() => handleClick(todo.id) } variant="primary">Delete</Button>
            <Button variant="warning">
             <a href="/change" >
                  Edit
               </a>
            </Button>
          </StyledLi>)         
        }   
           
      </ul>
      
    )
  };

  export default Todos;