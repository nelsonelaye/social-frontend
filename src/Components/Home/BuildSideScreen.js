import React from "react";
import styled from "styled-components";
import DisplayCard from "../DisplayCard/DisplayCard";
const BuildSideScreen = () => {
  const [display, setDisplay] = React.useState(false);
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
            <Image src="/assets/elon.jpeg" />
            <Hold>
              <RealName
                onMouseEnter={() => {
                  setDisplay(true);
                }}
                onMouseLeave={() => {
                  setDisplay(false);
                }}
              >
                Space_Elon
              </RealName>
              <Profile>Elon Musk</Profile>
              {display ? (
                <DIv>
                  <DisplayCard setDisplay={setDisplay} />
                </DIv>
              ) : null}
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

const Hold = styled.div`
  position: relative;
`;
const Name = styled.div`
  font-weight: 700;
`;
const Profile = styled.div`
  font-size: 13px;
`;
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

const RealName = styled.div`
  font-size: 12px;
  font-weight: 700;
  position: relative;
  cursor: pointer;

  :after {
    content: "";
    height: 2px;
    background-color: purple;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    opacity: 0;
    transition: all 350ms;
  }

  :hover {
    :after {
      opacity: 1;
    }
  }
`;
const Content = styled.div`
  cursor: pointer;
  color: #69bff8;
`;

const DIv = styled.div`
  position: absolute;
  top: 20px;
  z-index: 5;
`;
