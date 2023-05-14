import styled from "styled-components";
import Navigation from "../components/Navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import CalendarModal from "../components/CalendarModal";
import React, { useState, useEffect } from "react";
import axios from "axios";


const Screen = styled.div`
  height: 812px;
  width: 375px;
  background-color: white;
  position: absolute;
  display: flex;
  justify-content: center;
`;

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
`;

const CalendarContainer = styled.div`
  padding-top: 30px;
  position: absolute;
  top: 80px;
}`;

const HeaderTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #4c4c4d;
  position: absolute;
  top: 60px;
`;



function CalendarPage() {
  const [modalState, setModalState] = useState(false);
  const [date, setDate] = useState([]);



  return (
    <Box>
      <Screen>
        <HeaderTitle>달력</HeaderTitle>
        <CalendarContainer>
          <Calendar
            locale="en-EN"
            // onClickDay={() => setModalState((prev) => !prev)}
            onClickDay={(value) => {
              setModalState((prev) => !prev);
              setDate([value.getMonth() + 1, value.getDate()]);
            }}
          />
        </CalendarContainer>
        {modalState ? <CalendarModal date={date} /> : null}
        <Navigation />
      </Screen>
    </Box>
  );
}

export default CalendarPage;
