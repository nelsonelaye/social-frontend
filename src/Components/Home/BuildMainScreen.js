import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { BsBookmark, BsThreeDots } from "react-icons/bs";
import { FiSend } from "react-icons/fi";

const BuildMainScreen = () => {
  return (
    <Container>
      <TopBuild>
        <Hold>
          <Image src="/assets/black.jpg" alt="A photo of a black woman" />
          <Name>Name</Name>
        </Hold>
      </TopBuild>

      <PostBuild>
        <Top>
          <ProfileImage
            src="/assets/black.jpg"
            alt="A photo of a black woman"
          />
          <ProfileHold>
            <ProfileName>My Name</ProfileName>
            <Location>Lagos, Nigeria</Location>
          </ProfileHold>
        </Top>

        <PostImage src="/assets/dream.png" alt="Vision Board" />

        <Icons>
          <Like />
          <Comment />
          <Send />
        </Icons>
      </PostBuild>
    </Container>
  );
};

export default BuildMainScreen;

const Container = styled.div`
  width: 100%;
`;

const TopBuild = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 0;
  padding-left: 20px;
  width: 100%;
  background-color: white;
  border-radius: 7px;
  box-sizing: border-box;
`;

const Hold = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  outline: 2px solid purple;
  border: 2px solid transparent;
`;

const Name = styled.div``;

const PostBuild = styled.div`
  background-color: white;
  width: 100%;
  border-radius: 7px;
  margin: 10px 0;
`;
const Top = styled.div`
  padding: 20px;
  display: flex;
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

const ProfileHold = styled.div``;

const ProfileName = styled.div`
  font-weight: 700;
  margin-bottom: 3px;
`;

const Location = styled.div`
  color: grey;
  font-size: 13px;
`;

const PostImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const Icons = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 0px 20px;
  display; flex;
  align-items: center;
`;
const Like = styled(AiOutlineHeart)`
  font-size: 30px;
  margin: 5px;
`;
const Comment = styled(FiSend)`
  font-size: 30px;
  margin: 5px;
`;
const Send = styled(FiSend)`
  font-size: 30px;
  margin: 5px;
`;
// const Bookmark = styled(BsBookmark)``;
