import styled from "styled-components";
import Navigation from "../components/Navigation";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const Screen = styled.div`
  height: 812px;
  width: 375px;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
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

const DiaryHeader = styled.div`
  height: 136px;
  width: 100%;
  margin-bottom: 26px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 30px 0px 30px;
`;

const DiaryInput = styled.div`
  width: 100%;
  height: 180px;
  margin-bottom: 15px;
  background-color: #ffebea;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
`;

const PhotoInput = styled.div`
  width: 100%;
  height: 180px;
  background-color: #ffebea;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 15px;
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
`;

const HeaderTitle = styled.div`
  font-size: 30px;
  color: #4c4c4d;
  font-weight: 600;
`;

const HeaderQuestion = styled.div`
  font-size: 18px;
  color: #898a8e;
`;

const FeelingsOptions = styled.form`
  display: flex;
  justify-content: space-between;
`;

const FeelingsInputs = styled.input`
  display: none;
`;

const FeelingsLabels = styled.label`
cursor: pointer;`;

const DiaryTitleInput = styled.input`
  display: block;
  height: 20px;
  background-color: transparent;
  padding: 10px 20px 5px 20px;
  border: none;
  color: #898a8e;
  font-size: 20px;
  font-weight: 700;
  overflow-wrap: normal;
  width: 100%;
  ::placeholder {
    font-size: 20px;
    font-weight: 700;
  }
  :focus {
    outline: none;
  }
`;

const DiaryContentInput = styled.input`
  display: block;
  width: 100%;
  background-color: transparent;
  padding: 5px 20px 10px 20px;
  border: none;
  height: 100px;
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

const PhotoInputBox = styled.div`
  width: 132px;
  height: 123px;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PhotoInputPrompt = styled.div`
  font-size: 8px;
  color: #898a8e;
  margin-top: 12px;
`;

const PhotoToday = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: #898a8e;
  margin-bottom: 15px;
`;

const PhotoTodayButton = styled.input`
  display: none;
`;
const PhotoTodayLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const DateShow = styled.div`
  padding: 20px 0px;
  display: flex;
  justify-content: space-evenly;
  color: #898a8e;
  font-size: 15px;
`;

function Diary() {
  const [input_image, setImg] = useState("");
  let date = new Date();
  let month = date.getMonth() + 1;
  let day = date.getDate();

  function setPreviewImg(event) {
    var reader = new FileReader();
    reader.onload = function(event) {
      setImg(event.target.result);
    };
    reader.readAsDataURL(event.target.files[0]);
  }

  function clicked(event) {
    const value = event.target.value;
    document.getElementById(`${value.toLowerCase()}Label`).innerHTML = `<img src="/icons/feelings/${value.toLowerCase()}Color.svg" alt="">`
  }

  function diaryPost() {
    let form = new FormData();
    var imageFile = document.getElementById("file");
    var feelingChoice = document.querySelector('input[name="feelings"]:checked').value;
    var title = document.getElementById("input_title").value;
    var content = document.getElementById("input_content").value;
    console.log(title);
    form.append('title', title);
    form.append('content', content);
    if (imageFile.files[0]) {
      form.append('img', imageFile.files[0]);
    }
    form.append('feeling', feelingChoice);
    axios.post("http://127.0.0.1:8000/diary/", form, {
      headers: {
       'Content-Type': 'multipart/form-data'
      }
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  /*useEffect(() => {
    axios.post("http://127.0.0.1:8000/diary/")
      .then((response) => {
        setText(response.data);
        console.log(response.data);
      })
      .catch(function (error){
        console.log(error);
      });
  }, []);*/

  return (
    <Box>
      <Screen>
        <Container>
          <DiaryHeader>
            <HeaderTitle>오늘 기록</HeaderTitle>
            <HeaderQuestion>오늘 하루는 어땠나요?</HeaderQuestion>
            <FeelingsOptions>
              <FeelingsInputs
                type="radio"
                id="happy"
                value="HAPPY"
                name="feelings"
                onClick={clicked}
              />
              <FeelingsLabels for="happy" id="happyLabel">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/feelings/happy.svg`}
                  alt=""
                />
              </FeelingsLabels>
              <FeelingsInputs
                type="radio"
                id="soso"
                value="SOSO"
                name="feelings"
                onClick={clicked}
              />
              <FeelingsLabels for="soso" id="sosoLabel">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/feelings/soso.svg`}
                  alt=""
                />
              </FeelingsLabels>
              <FeelingsInputs
                type="radio"
                id="sad"
                value="SAD"
                name="feelings"
                onClick={clicked}
              />
              <FeelingsLabels for="sad" id="sadLabel">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/feelings/sad.svg`}
                  alt=""
                />
              </FeelingsLabels>
              <FeelingsInputs
                type="radio"
                id="angry"
                value="ANGRY"
                name="feelings"
                onClick={clicked}
              />
              <FeelingsLabels for="angry" id="angryLabel">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/feelings/angry.svg`}
                  alt=""
                />
              </FeelingsLabels>
            </FeelingsOptions>
          </DiaryHeader>
          <DiaryInput>
            <DateShow>
              <p>{`${month}월 ${day}일`}</p>
            </DateShow>
            <form>
              <DiaryTitleInput
                id="input_title"
                input="text"
                placeholder="제목을 입력해주세요."
              />
              <DiaryContentInput
                id="input_content"
                input="text"
                placeholder="오늘을 기록하세요!"
              />
            </form>
          </DiaryInput>
          <PhotoInput>
            <PhotoToday>오늘의 사진</PhotoToday>
            <PhotoInputBox>
              <PhotoTodayLabel for="file">
                <img src={`${process.env.PUBLIC_URL}/icons/photo.svg`} alt="" />
                upload
              </PhotoTodayLabel>
              <PhotoTodayButton
                type="file"
                id="file"
                accept=".jpeg, .jpg, .png, .heic"
                onChange={setPreviewImg}
              />
              
              <img alt="upload_img" src="{input_image}"></img>
            </PhotoInputBox>
          </PhotoInput>
          <SaveButton
            onClick={diaryPost}>저장하기</SaveButton>
        </Container>
        <Navigation />
      </Screen>
    </Box>
  );
}

export default Diary;
