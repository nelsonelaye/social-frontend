import React from "react";
import styled from "styled-components";
import BuildMainScreen from "./BuildMainScreen";
import BuildSideScreen from "./BuildSideScreen";

const Home = () => {
  return (
    <Container>
      <Wrapper>
        <MainScreen>
          <BuildMainScreen />
        </MainScreen>
        <SideScreen>
          <BuildSideScreen />
        </SideScreen>
      </Wrapper>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  background-color: lightgrey;
  padding-top: 70px;
`;
const Wrapper = styled.div`
  width: 1200px;
  padding-top: 50px;
  display: flex;
  justify-content: center;

  background-color: silver;
`;

const MainScreen = styled.div`
  width: 600px;
  display: flex;

  justify-content: center;
`;

const SideScreen = styled.div`
  width: 400px;
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
