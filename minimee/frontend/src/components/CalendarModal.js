import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ModalBody = styled.div`
  width: 333px;
  height: 341px;
  background-color: #ffebea;
  border-radius: 15px;
  position: absolute;
  top: 367px;
  z-index: 200;
`;

const ModalDiaryTab = styled.div`
  background-color: #ffebea;
  width: 111px;
  height: 78px;
  border-radius: 15px;
  position: absolute;
  left: 21px;
  top: 330px;
  color: #898A8E;
  display: flex;
  padding: 12px;
  align-items: start;
  justify-content: center;
`;

const ModalQnaTab = styled.div`
  background-color: #ffdfdd;
  width: 111px;
  height: 78px;
  border-radius: 15px;
  position: absolute;
  left: calc(50% - 111px / 2);
  top: 330px;
  color: #898A8E;
  display: flex;
  padding: 12px;
  align-items: start;
  justify-content: center;
`;

const ModalTodoTab = styled.div`
  background-color: #ffdfdd;
  width: 111px;
  height: 78px;
  border-radius: 15px;
  position: absolute;
  left: calc(50% - 111px / 2 + 111px);
  top: 330px;
  color: #898A8E;
  display: flex;
  padding: 12px;
  align-items: start;
  justify-content: center;
`;

const DateShow = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-evenly;
  color: #898a8e;
  font-size: 15px;
`;

function CalendarModal(props) {
    const diary = document.getElementById("diary");
    const qna = document.getElementById("qna");
    const todo = document.getElementById("todo");
    // const [diaryText, setDiaryText] = useState([]);
    // const [qaText, setQaText] = useState([]);
    // const [todoText, setTodoText] = useState([]);

    console.log(props.date)
    function diaryTabChange() {
        diary.style.backgroundColor = "#FFEBEA";
        qna.style.backgroundColor = "#FFDFDD";
        todo.style.backgroundColor = "#FFDFDD";
        // axios
        //   .get("http://127.0.0.1:8000/diary/")
        //   .then((response) => {
        //     setDiaryText(response.data);
        //     console.log(response.data);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
    function qnaTabChange() {
        diary.style.backgroundColor = "#FFDFDD";
        qna.style.backgroundColor = "#FFEBEA";
        todo.style.backgroundColor = "#FFDFDD";
        // axios
        //   .get("http://127.0.0.1:8000/qa/")
        //   .then((response) => {
        //     setQaText(response.data);
        //     console.log(response.data);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
    function todoTabChange() {
        diary.style.backgroundColor = "#FFDFDD";
        qna.style.backgroundColor = "#FFDFDD";
        todo.style.backgroundColor = "#FFEBEA";
        // axios
        //   .get("http://127.0.0.1:8000/goal/")
        //   .then((response) => {
        //     setTodoText(response.data);
        //     console.log(response.data);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
    }
  return (
    <>
      <ModalBody>
      <DateShow>
        <p>{`${props.date[0]}월 ${props.date[1]}일`}</p>
      </DateShow>
      </ModalBody>
      <ModalDiaryTab id="diary" onClick={diaryTabChange}>일기</ModalDiaryTab>
      <ModalQnaTab id="qna" onClick={qnaTabChange}>문답</ModalQnaTab>
      <ModalTodoTab id="todo" onClick={todoTabChange}>체크리스트</ModalTodoTab>
    </>
  );
}

export default CalendarModal;
