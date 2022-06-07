import React from "react";
import styled from "styled-components";

const BuildSideScreen = () => {
  return (
    <Container>
      <Wrapper>
        <Holder>
          <Image src="/assets/black.jpg" />
          <Hold>
            <Name>Name</Name>
            <Profile>Just me</Profile>
          </Hold>
        </Holder>

        <Text>
          <Suggest>Suggestions for you</Suggest>
          <Action>See All</Action>
        </Text>

        <Text>
          <Holder>
            <Image src="/assets/black.jpg" />
            <Hold>
              <Name>Name</Name>
              <Profile>Name</Profile>
            </Hold>
          </Holder>
          <Content>Follow</Content>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default BuildSideScreen;

const Container = styled.div`
  position: fixed;
  // background-color: purple;
  width: 400px;
`;
const Wrapper = styled.div`
  margin-left: 30px;
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Hold = styled.div``;
const Name = styled.div`
  font-weight: 700;
`;
const Profile = styled.div``;
const Text = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  // background-color: red;
  margin: 15px 0;
`;
const Suggest = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: gray;
  cursor: pointer;
`;
const Action = styled.div`
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 15px;
`;

const Content = styled.div`
  cursor: pointer;
  color: #69bff8;
`;
