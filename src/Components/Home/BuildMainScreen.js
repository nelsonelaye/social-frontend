import React from "react";
import styled from "styled-components";
import { BsBookmark, BsThreeDots, BsFillBookmarkFill } from "react-icons/bs";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { FaRegComment, FaRegSmileWink } from "react-icons/fa";

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
          <Box>
            <ProfileImage
              src="/assets/black.jpg"
              alt="A photo of a black woman"
            />
            <ProfileText>
              <ProfileName>My Name</ProfileName>
              <Location>Lagos, Nigeria</Location>
            </ProfileText>
          </Box>

          <ThreeDots />
        </Top>

        <PostImage src="/assets/dream.png" alt="Vision Board" />

        <Icons>
          <Box>
            <Like />
            <CommentIcon />
            <Send />
          </Box>
          <SaveIcon />
        </Icons>

        <LikePost>
          <span>2, 034</span>likes{" "}
        </LikePost>

        <Post>
          <span>My Name</span>
          <Content>Let's dream big! </Content>
        </Post>

        <View>
          View All <span>{1}</span> comments{" "}
        </View>

        <Comment>
          <Box>
            <span>Rodn3y</span>
            <Content>Dream onmy friend, dream on... </Content>
          </Box>

          <LoveIconComment />
        </Comment>

        <Time>Posted 3Hours Ago</Time>

        <PostInput>
          <PostIcon />
          <Input placeholder="Add a commment..." />
          <Text>Post</Text>
        </PostInput>
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
  justify-content: space-between;
  align-items: center;
`;

const Box = styled.div`
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
  font-weight: 700;
  margin-bottom: 3px;
`;

const Location = styled.div`
  color: grey;
  font-size: 13px;
`;

const ThreeDots = styled(BsThreeDots)`
  font-size: 25px;
  color: black;
`;

const PostImage = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const Icons = styled.div`
  width: 100%;
  margin-top: 15px;
  padding: 0px 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Like = styled(AiOutlineHeart)`
  font-size: 30px;
  transition: all 350ms;
  color: black;
  margin-right: 20px;

  :hover {
    cursor: pointer;
    color: silver;
  }
`;

const CommentIcon = styled(FaRegComment)`
  font-size: 30px;
  transition: all 350ms;
  color: black;
  margin-right: 20px;

  :hover {
    cursor: pointer;
    color: silver;
  }
`;

const Send = styled(FiSend)`
  font-size: 30px;
  transition: all 350ms;
  color: black;
  margin-right: 20px;

  :hover {
    cursor: pointer;
    color: silver;
  }
  font-size: 30px;
  margin: 5px;
`;

const SaveIcon = styled(BsBookmark)`
  font-size: 30px;
  transition: all 350ms;
  color: black;

  :hover {
    cursor: pointer;
    color: silver;
  }
`;

const LikePost = styled.div`
  margin-left: 20px;
  margin-top: 13px;
  font-size: 20px;
  font-family: Poppins;
  span {
    font-weight: 700;
    margin-right: 5px;
  }
`;

const Post = styled.div`
  margin: 0 20px;
  display: flex;
  font-size: 18px;
  span {
    margin-right: 5px;
    font-weight: 500;
    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const View = styled.div`
  color: lightgray;
  margin: 20px;
`;

const Comment = styled.div`
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-right: 5px;
    font-weight: 700;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

const Content = styled.div``;

const LoveIconComment = styled(AiOutlineHeart)`
  font-size: 25px;
  transition: all 350ms;
  color: gray;
  margin-right: 20px;

  :hover {
    cursor: pointer;
    color: silver;
  }
`;

const Time = styled.div`
  color: silver;
  text-transform: uppercase;
  font-size: 12px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const PostInput = styled.div`
  display: flex;
  padding: 20px 0;

  border-top: 1px solid silver;
`;

const PostIcon = styled(FaRegSmileWink)`
  margin: 0 10px;
  font-size: 30px;
`;

const Input = styled.input`
  outline: none;
  border: 0;
  background-color: transparent;
  flex: 1;
  font-size: 18px;

  ::placeholder {
    font-family: Poppins;
    font-size: 18px;
  }
`;

const Text = styled.div`
  font-weight: bold;
  color: lightblue;
  font-size: 18px;
  text-transform: uppercase;
  margin-right: 12px;

  :hover {
    cursor: pointer;
  }
`;
