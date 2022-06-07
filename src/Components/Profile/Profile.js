import React from "react";
import styled from "styled-components";

const Profile = () => {
  return (
    <Container>
      <Wrapper>
        <Top>
          <Image />
          <Content>
            <NameDetails>
              <ProfileName></ProfileName>
              <EditButton> Edit Profile</EditButton>
              <Icon />
            </NameDetails>
            <NameDetails>
              <Post>
                <Count>{9}</Count>
                <Title>Posts</Title>
              </Post>
            </NameDetails>

            <Detail>
              <Name>Peter Oti</Name>
              <Bio>Bio</Bio>
              <Website>github.com</Website>
            </Detail>
          </Content>
        </Top>
      </Wrapper>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
  width: 768px;
  height; 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div``;
const Top = styled.div``;
const Image = styled.img``;
const Content = styled.div``;
const NameDetails = styled.div``;
const ProfileName = styled.div``;
const EditButton = styled.div``;
const Icon = styled.img``;
const Post = styled.div``;
const Count = styled.div``;
const Title = styled.div``;
const Detail = styled.div``;
const Name = styled.div``;
const Bio = styled.div``;
const Website = styled.div``;
