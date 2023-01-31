import React from 'react';
import styled from 'styled-components/macro';
import CustomButton from './components/CustomButton';
import { WEIGHTS } from './constants';
function App() {
  // Note: This layout given here is all placeholder
  // Use a structure suitable to your app, and ensure
  // you use Semantic html as much as possible.
  return (
    <Wrapper>
      <Nav>Navbar contents</Nav>
      <MainArea>
        <SideBar>SideBar contents</SideBar>
        <Main>
          Main Area<CustomButton>Tap me</CustomButton>{' '}
        </Main>
      </MainArea>
      <Footer>Footer</Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: gray;
`;

const Nav = styled.nav`
  background-color: steelblue;
  height: 10%;
  font-weight: ${WEIGHTS.medium};
`;

const SideBar = styled.aside`
  height: 100%;
  min-width: 5%;
  max-width: 200px;
  background-color: pink;
  flex: 1;
`;

const Main = styled.main`
  height: 100%;
  background-color: green;
  flex: 3;
`;

const MainArea = styled.div`
  display: flex;
  height: 80%;
`;

const Footer = styled.footer`
  background-color: yellow;
  height: 10%;
`;

export default App;
