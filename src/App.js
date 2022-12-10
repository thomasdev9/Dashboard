import './App.css';
import React, { useState } from 'react';
import { lightTheme, darkTheme } from './theme';
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from './Globalstyle';
import Dashboard from './components/Aside/Dashboard/Dashboard';
import Aside from './components/Aside/Aside';
import RightBar from "./components/RightBar"
import Customers from './components/Customers/Customers';
import Orders from './components/Orders/Orders';
import Settings from './components/Settings/Settings';

const Wrapper = styled.div`
  display: grid;
  width: 96%;
  margin: 0 auto;
  gap: 1.8rem;
  grid-template-columns: 14rem auto;
  /* grid-template-columns: 14rem auto 23rem */;
  background: ${props => props.theme.colors.background};
`

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Wrapper>
          <GlobalStyles />
          <Aside />
          {/* <Customers /> */}
          {/* <Dashboard theme={theme}/>
          <RightBar /> */}
          {/* <Orders /> */}
          <Settings />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
