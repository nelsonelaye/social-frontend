import React from "react";
import styled from "styled-components";

const DisplayCard = ({ setDisplay }) => {
  return (
    <Container
      onMouseEnter={() => {
        setDisplay(true);
      }}
      onMouseLeave={() => {
        setDisplay(false);
      }}
    >
      <Wrapper>
        <Top>
          <ProfileImage
            src="/assets/black.jpg"
            alt="A photo of a black woman"
          />
          <ProfileText>
            <ProfileName>Username</ProfileName>
            <RealName>Real Name</RealName>
            <Follow>
              Followed by, <span>Another name</span>
            </Follow>
          </ProfileText>
        </Top>

        <Middle>
          <CountHold>
            <Count>1</Count>
            <Title>Posts</Title>
          </CountHold>
          <CountHold>
            <Count>45</Count>
            <Title>Follwers</Title>
          </CountHold>
          <CountHold>
            <Count>19</Count>
            <Title>Following</Title>
          </CountHold>
        </Middle>

        <Bottom></Bottom>
        <Button></Button>
      </Wrapper>
    </Container>
  );
};

export default DisplayCard;

const Container = styled.div`
  background-color: white;
  width: 350px;
  border-radius: 5px;
`;
const Wrapper = styled.div``;
// const Container = styled.div``

const Top = styled.div`
  padding: 20px;
  display: flex;

  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  outline: 2px solid purple;
  border: 2px solid transparent;
  margin-right: 10px;
`;

const ProfileText = styled.div``;

const ProfileName = styled.div`
  font-weight: 500;
  margin-bottom: 3px;
  color: lightblue;
`;

const RealName = styled.div``;

const Follow = styled.div`
  color: grey;
  font-size: 13px;
  margin-top: 15px;
`;

const Middle = styled.div`
  height: 50px;
  border-top: 1px solid silver;
  border-bottom: 1px solid silver;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CountHold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Count = styled.div``;
const Title = styled.div`
  text-transform: capitalize;
`;

const Button = styled.div`
margin: 10px;
height: 40px;
display: flex;
justify-content: center;
align-items: center;
font-sizeL 15px;
font-weight: 500;
border-radius: 3px;
background-color: blue;
color: white;
`;
const Bottom = styled.div``;
