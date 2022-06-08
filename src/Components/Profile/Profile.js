import React, { useState } from "react";
import styled from "styled-components";
import { BsGrid3X3, BsBookmark, BsPersonBoundingBox } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { MdSlowMotionVideo } from "react-icons/md";
const Profile = () => {
  const [post, setPost] = useState(true);
  const [video, setVideo] = useState(false);
  const [save, setSave] = useState(false);
  const [tag, setTag] = useState(false);
  return (
    <Container>
      <Wrapper>
        <Top>
          <ProfileImage src="/assets/elon.jpeg" />
          <Content>
            <NameDetails>
              <ProfileName>Space_Elon</ProfileName>
              <EditButton> Edit Profile</EditButton>
              <Icon />
            </NameDetails>
            <NameDetails>
              <Post>
                <Count>{3}</Count>
                <Title>Posts</Title>
              </Post>
              <Post>
                <Count>{9}</Count>
                <Title>Followers</Title>
              </Post>
              <Post>
                <Count>{23}</Count>
                <Title>Following</Title>
              </Post>
            </NameDetails>

            <Detail>
              <Name>Elon Musk</Name>
              <Bio>
                We ship anything to space - people, satellite,
                technologies...you name it
              </Bio>
              <Website href="#">teslahq.com</Website>
            </Detail>
          </Content>
        </Top>

        <Nav>
          <NavHold
            bg={post ? "bg" : ""}
            onClick={() => {
              setPost(true);
              setVideo(false);
              setSave(false);
              setTag(false);
            }}
          >
            <BsGrid3X3 style={{ fontSize: "10px", marginRight: "3px" }} />
            <NavTitle>Posts</NavTitle>
          </NavHold>

          <NavHold
            bg={video ? "bg" : ""}
            onClick={() => {
              setPost(false);
              setVideo(true);
              setSave(false);
              setTag(false);
            }}
          >
            <MdSlowMotionVideo
              style={{ fontSize: "10px", marginRight: "3px" }}
            />
            <NavTitle>Video</NavTitle>
          </NavHold>
          <NavHold
            bg={save ? "bg" : ""}
            onClick={() => {
              setPost(false);
              setVideo(false);
              setSave(true);
              setTag(false);
            }}
          >
            <BsBookmark style={{ fontSize: "10px", marginRight: "3px" }} />
            <NavTitle>save</NavTitle>
          </NavHold>

          <NavHold
            bg={tag ? "bg" : ""}
            onClick={() => {
              setPost(false);
              setVideo(false);
              setSave(false);
              setTag(true);
            }}
          >
            <BsPersonBoundingBox
              style={{ fontSize: "10px", marginRight: "3px" }}
            />
            <NavTitle>Tags</NavTitle>
          </NavHold>
        </Nav>

        <PostImages>
          <Image src="/assets/quote.jpg" />
          <Image src="/assets/img1.jpeg" />
          <Image src="/assets/sdg.jpg" />
        </PostImages>
      </Wrapper>
    </Container>
  );
};

export default Profile;

const Container = styled.div`
width: 100%;
  padding-top: 90px;
  height; 100%;
  min-height: calc(100vh - 70px);
  display: flex;
  background-color: var(--bg);
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 768px;
  background-color: white;
  padding: 10px;
`;
const Top = styled.div`
  display: flex;
`;
const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 50px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
const NameDetails = styled.div`
  margin: 10px 0;
  display: flex;
  align-items: center;
`;
const ProfileName = styled.div`
  font-size: 25px;
  font-weight: lighter;
  margin-right: 20px;
  object-fit: cover;
`;
const EditButton = styled.div`
  padding: 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  margin-right: 20px;
  font-size: 12px;
  :hover {
    cursor: pointer;
  }
`;
const Icon = styled(FiSettings)`
  font-size: 30px;
`;
const Post = styled.div`
  display: flex;
  margin-top: 10px;
  margin-right: 20px;
`;
const Count = styled.div`
  margin-right: 8px;
`;
const Title = styled.div``;
const Detail = styled.div``;
const Name = styled.div`
  font-weight: 600;
  margin-bottom: 5px;
`;
const Bio = styled.div`
  margin-bottom: 5px;
`;
const Website = styled.a``;
const Nav = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-top: 1px solid silver;
  padding: 20px;
  margin-top: 30px;
`;
const NavHold = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;

  :after {
    content: "";
    height: 2px;
    background-color: ${({ bg }) => (bg ? "purple" : "transparent")};
    width: 100%;
    position: absolute;
    top: -21px;
  }
  cursor: pointer;
`;

const NavIcon = styled.div``;
const NavTitle = styled.div`
  text-transform: uppercase;
  font-size: 13px;
`;

const PostImages = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;
