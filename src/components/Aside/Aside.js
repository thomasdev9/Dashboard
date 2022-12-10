import React from 'react'
import styled from "styled-components";
import TopBar from './TopBar';
import Sidebar from './Sidebar';

const AsideContainer = styled.aside`
  height: 100vh;
  background: ${props => props.theme.colors.background};
`

function Aside() {
  return (
    <AsideContainer>
      <TopBar />
      <Sidebar />
    </AsideContainer>
  )
}

export default Aside;