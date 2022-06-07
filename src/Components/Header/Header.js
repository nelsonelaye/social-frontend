import React from "react";
import styled from "styled-components";
import { AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { BiAddToQueue, BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Hold>
          <Logo>
            <img src="/assets/social.png" />
            Insta Clone
          </Logo>
          <SearchBar>
            <Icon />
            <SearchInput placeholder="Search" />
          </SearchBar>
        </Hold>
        <Hold>
          <Home />
          <Send />
          <Love />
          <Image src="/assets/black.jpg" />
        </Hold>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid silver;
  position: fixed;
  background-color: white;
`;
const Wrapper = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Hold = styled.div`
  display: flex;
`;
const Logo = styled.div`
  margin-right: 40px;
  font-size: 25px;
  font-style: italic;
  font-weight: 500;
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }
`;
const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  border: 1px solid silver;
  border-radius: 3px;
  background-color: rgba(220, 220, 220, 0.3);
`;

const Icon = styled(BiSearch)`
  margin: 0 30px;
`;
const SearchInput = styled.input`
  outline: none;
  font-size: 20px;
  border: 0;
  background-color: transparent;
  ::placeholder {
    font-family: Poppins;
  }
`;
const Home = styled(AiFillHome)`
  font-size: 28px;
  margin: 0px 8px;
`;
const Send = styled(BiAddToQueue)`
  margin: 0px 8px;
  font-size: 28px;
`;
const Love = styled(AiOutlineHeart)`
  margin: 0px 8px;
  font-size: 28px;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-left: 8px;
`;
