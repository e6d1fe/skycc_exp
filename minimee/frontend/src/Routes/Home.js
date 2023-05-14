import React from "react";
import Navigation from "../components/Navigation";
import styled from "styled-components";

const Screen = styled.div`
  height: 812px;
  width: 375px;
  background-color: white;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Minimee = styled.img`
  width: 250px;
  height: auto;
`;


function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Box>
          <Screen>
            <img src={`${process.env.PUBLIC_URL}/icons/minimee_logo.svg`} alt="" />
            <Minimee
              src={`${process.env.PUBLIC_URL}/icons/minimee1.svg`}
              alt=""
            />
            <Navigation />
          </Screen>
        </Box>
      </header>
    </div>
  );
}

export default Home;
