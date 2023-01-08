import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lightTheme, darkTheme } from './theme';
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles } from './Globalstyle';
import Dashboard from './components/Aside/Dashboard/Dashboard';
import Aside from './components/Aside/Aside';
import RightBar from "./components/RightBar"
import Customers from './components/Customers/Customers';
import Orders from './components/Orders/Orders';
import Settings from './components/Settings/Settings';
import Products from './components/Products/Products';
import SingleProduct from './components/Products/SingleProduct';
import Messages from './components/Messages/Messages';
import Notifications from './components/Notifications/Notifications';
import Analytics from './components/Analytics/Analytics';

const Wrapper = styled.div`
  // height: 100%;
  display: grid;
  width: 96%;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // justify-content: center;
  margin: 0 auto;
  gap: 1.8rem;
  grid-template-columns: 14rem auto;
  // grid-template-columns: 14rem auto 23rem;
  background: ${props => props.theme.colors.background};
`

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
        <Wrapper>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Aside />}>
                <Route index element={<Dashboard />}/>
                <Route path="customers" element={<Customers />}/>
                <Route path="orders" element={<Orders />}/>
                <Route path="settings" element={<Settings />}/>
                <Route path="products" element={<Products />}/>
                <Route path="messages" element={<Messages />}/>
                <Route path="add-product" element={<SingleProduct />}/>
                <Route path="notifications" element={<Notifications />}/>
              </Route>
            </Routes>
          </BrowserRouter>
          {/* <Customers /> */}
          {/* <Dashboard theme={theme}/>
          <RightBar /> */}
          {/* <Orders /> */}
          {/* <Settings /> */}
          {/* <Products /> */}
          {/* <Messages /> */}
          {/* <SingleProduct /> */}
          {/* <Notifications /> */}
        </Wrapper>
      </ThemeProvider>
    </div>
  );
}

export default App;
