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
            <Profile>Name</Profile>
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
          <Holder>
            <Image src="/assets/black.jpg" />
            <Hold>
              <Name>Name</Name>
              <Profile>Name</Profile>
            </Hold>
          </Holder>
          <Holder>
            <Image src="/assets/black.jpg" />
            <Hold>
              <Name>Name</Name>
              <Profile>Name</Profile>
            </Hold>
          </Holder>
        </Text>
      </Wrapper>
    </Container>
  );
};

export default BuildSideScreen;

const Container = styled.div`
  width: 100%;
  position: fixed;
`;
const Wrapper = styled.div`
  margin-left: 30px;
`;
const Holder = styled.div`
  display: flex;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Hold = styled.div``;
const Name = styled.div``;
const Profile = styled.div``;
const Text = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Suggest = styled.div``;
const Action = styled.div``;
