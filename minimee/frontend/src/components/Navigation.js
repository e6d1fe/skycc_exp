import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Bar = styled.div`
  height: 63px;
  width: 375px;
  position: absolute;
  bottom: 0px;
  background: #ffffff;
  box-shadow: 0px -3px 17px 1px rgba(0, 0, 0, 0.12);
  border-radius: 10px 10px 0px 0px;
`;

const HomeButton = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background: #ffc8c8;
  box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.25);
  position: relative;
  bottom: 30px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IconsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px 0px 40px;
  position: relative;
  bottom: 50%;
`;

const IconsBoxHalf = styled.div`
  width: 100px;
  display: flex;
  justify-content: space-between;
`;

function Navigation() {
  return (
    <Bar>
      <HomeButton>
        <Link to="/"><img src={`${process.env.PUBLIC_URL}/icons/homebutton.svg`} alt="" /></Link>
      </HomeButton>
      <IconsBox>
        <IconsBoxHalf>
          <Link to="/diary"><img src={`${process.env.PUBLIC_URL}/icons/diary.svg`} alt="" /></Link>
          <Link to="/qna"><img src={`${process.env.PUBLIC_URL}/icons/qna.svg`} alt="" /></Link>
        </IconsBoxHalf>
        <IconsBoxHalf>
          <Link to="/todo"><img src={`${process.env.PUBLIC_URL}/icons/todo.svg`} alt="" /></Link>
          <Link to="/calendar"><img src={`${process.env.PUBLIC_URL}/icons/calendar.svg`} alt="" /></Link>
        </IconsBoxHalf>
      </IconsBox>
    </Bar>
  );
}

export default Navigation;
