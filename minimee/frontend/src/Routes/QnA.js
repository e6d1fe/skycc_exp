import styled from "styled-components";
import Navigation from "../components/Navigation";
import React, { useState, useEffect } from "react";
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
  width: 332px;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

const QnAHeader = styled.div`
  display: flex;
  flex-direction: column;
  height: 136px;
  width: 100%;
  margin-bottom: 26px;
  padding: 0px 30px 30px 30px;
  justify-content: space-between;
`;

const HeaderTitle = styled.div`
  font-size: 30px;
  color: #4c4c4d;
  font-weight: 600;
`;

const QnAContext = styled.div`
  font-size: 18px;
  color: #898a8e;
`;

const AnswerInput = styled.div`
  width: 100%;
  height: 337px;
  background-color: #ffebea;
  border-radius: 15px;
`;

const AnswerContentInput = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  padding: 5px 20px 10px 20px;
  border: none;
  height: 240px;
  color: #898a8e;
  font-size: 16px;
  white-space: pre-wrap;
  word_wrap: break-word;
  word-break: break-all;
  ::placeholder {
    font-size: 16px;
    font-weight: 400;
  }
  :focus {
    outline: none;
  }
`;

const DateShow = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-evenly;
  color: #898a8e;
  font-size: 15px;
`;

const SaveButton = styled.button`
  background-color: #ffc8c8;
  height: 62px;
  width: 100%;
  border-radius: 15px;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  :focus {
    outline: none;
  }
  margin: 30px;
`;

function QnA() {
  const [text, setText] = useState([]);

  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/qa/")
      .then((response) => {
        setText(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function QAPost() {
    let form = new FormData();
    var answer = document.getElementById("answer").value;
    // console.log(text.content);
    console.log(answer)
    form.append("question", text.content);
    form.append("answer", answer);
    axios
      .post("http://127.0.0.1:8000/qa/", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <Box>
      <Screen>
        <Container>
          <QnAHeader>
            <HeaderTitle>
              <p>오늘의 문답</p>
            </HeaderTitle>
            <QnAContext>
              <p>{text.content}</p>
            </QnAContext>
          </QnAHeader>
          <AnswerInput>
            <DateShow>
              <p>{`${month}월 ${day}일`}</p>
            </DateShow>
            <form>
              <AnswerContentInput
                type="text" id = "answer"
                placeholder="오늘의 답변을 입력하세요."
              />
            </form>
          </AnswerInput>
          <SaveButton onClick={QAPost}>저장하기</SaveButton>
        </Container>
        <Navigation />
      </Screen>
    </Box>
  );
}

export default QnA;
