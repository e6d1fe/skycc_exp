import styled from "styled-components";
import Navigation from "../components/Navigation";
import { useState, useEffect } from "react";
import axios from "axios";

const Screen = styled.div`
  height: 812px;
  width: 375px;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const HeaderTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #4c4c4d;
    position: absolute;
    top: 60px;
`;

const ToDoContainer = styled.div`
  width: 100%;
  height: 80%;
  background-color: #f9f9f9;
  position: absolute;
  top: 100px;
`;

const ToDoList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const PlusImg = styled.img`
    margin: 10px;
`;

const DateShow = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-evenly;
  color: #898a8e;
  font-size: 15px;
`;

const ListItem = styled.li`
    list-style: none;
    background-color: white;
    width: 348px;
    height: 64px;
    background: #FFFFFF;
    border: 1px solid rgba(233, 233, 233, 0.8);
    border-radius: 12px;
    margin: 10px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    padding: 20px;
    font-size: 15px;
    color: #898A8E;
`;

const ToDoInput = styled.input`
    padding: 5px;
`;

const CheckInput = styled.input`
    margin-right: 10px;
    border-color: #898A8E;
`;

const AddToDoButton = styled.button`
    padding: 10px;
    width: 80px;
    margin: 50px auto;
`;

const ModalBody = styled.div`
  width: 360px;
  height: 354px;
  background-color: #ffebea;
  box-shadow: 2px 3px 17px 1px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  position: absolute;
  top: 30%;
  z-index: 200;
  background: #FFFFFF;
  box-shadow: 0px 2px 2px 2px rgba(115, 92, 89, 0.05);
  border-radius: 12px;
`;

const ToDoForm = styled.form`
    display: flex; 
    flex-direction: column;
    padding: 100px;
`;

const ExitButton = styled.img`
    width: 20px;
    hight: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    margin: 20px;
`;

function ToDo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  }

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/goal/")
      .then((response) => {
        setToDos(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function todoPost(){
    let form = new FormData();
    var todo = document.getElementById("todo_input").value;
    form.append("title", todo);
    console.log(form);
    axios
      .post("http://127.0.0.1:8000/goal/", form, {
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      window.location.reload();
  }

  const [check, isChecked] = useState(false);
  const clickToDo = () => {
    isChecked((prev) => !prev);
  }
  
  return (
    <Box>
      <Screen>
        {check ? (
            <ModalBody>
                <ToDoForm onSubmit={onSubmit}>
                <ExitButton src={`${process.env.PUBLIC_URL}/icons/x.svg`} alt="" onClick={clickToDo} />
                    <ToDoInput
                        id="todo_input"
                        onChange={onChange}
                        value={toDo}
                        type="text"
                        placeholder="Write your to do"
                    />
                    <AddToDoButton onClick={todoPost}>Add To Do</AddToDoButton>
                </ToDoForm>
            </ModalBody>
        ) : null}
        <Container>
          <HeaderTitle>
            <p>오늘의 할일</p>
          </HeaderTitle>
          <ToDoContainer>
            <DateShow>
                <p>{`${month}월 ${day}일`}</p>
            </DateShow>
            <ToDoList>
                <ul>
                {/* {toDos.map((item, index) => (
                    <ListItem key={index}><label><CheckInput type="checkbox" />{item}</label></ListItem>
                ))} */}
                {toDos.map((item, index) => (
                    <ListItem key={index}><label><CheckInput type="checkbox" />{item.title}</label></ListItem>
                ))}
                </ul>
                <PlusImg src={`${process.env.PUBLIC_URL}/icons/plus.svg`} alt="" onClick={clickToDo} />
            </ToDoList>
          </ToDoContainer>
        </Container>
        <Navigation />
      </Screen>
    </Box>
  );
};  


export default ToDo;
