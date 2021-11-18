import React from 'react';
import "../Assets/App.css";
import styled from 'styled-components';
import Principal from '../components/Principal/Principal';

const Body = styled.body`
   margin:0;
   padding:0;
   height:100%;
`;



function Home() {
  return (

    <Body>
      <Principal />
    </Body>
  );
}

export default Home;
