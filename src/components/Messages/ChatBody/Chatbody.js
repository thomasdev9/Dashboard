import React from 'react'
import "./Chatbody.css"
import logo from "../../../images/logo.png"
import ChatList from "../ChatList/ChatList"
import ChatContent from "../ChatContent/ChatContent"
import UserProfile from '../UserProfile/UserProfile'

function Chatbody() {
  return (
    <div className='main__chatbody'>
      <ChatContent />
      <UserProfile />
    </div>
  )
}

export default Chatbody