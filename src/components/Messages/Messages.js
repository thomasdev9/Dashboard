import React from 'react'
import styled, { css } from "styled-components";
import Chatbody from './ChatBody/Chatbody';

const MessageWrapper = styled.div`
    max-width: 80%;
    margin: auto;
    background-color: #fff;
    min-height: 85vh;
    width: 80%;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 0 2rem 3rem rgba(132, 139, 200, 0.18);
`

const MessageHeader = styled.h1`
  font-weight: 600;
  padding-bottom: 20px;
`

function Messages() {
  return (
    <MessageWrapper>
      <MessageHeader>Messages</MessageHeader>
      <Chatbody />
    </MessageWrapper>
  )
}

export default Messages