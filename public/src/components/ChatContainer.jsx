import React from 'react'
import styled from "styled-components"
import ChatInput from './ChatInput';
import Logout from './Logout';
import Messages from './Messages';
import axios from "axios";
import { sendMessageRoute } from '../utils/APIRoutes'

export default function ChatContainer({ currentChat, currentUser }) {
  const handleSendMsg = async (msg)=>{
    await axios.post(sendMessageRoute,{
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    })
    };
  return (
    <>
      {
        currentChat && (
          <Container>
            <div className="chat-header">
              <div className="user-details">
                <div className="avatar">
                  <img
                    src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                    alt="avatar" />
                </div>
                <div className="username">
                  <h3>{currentChat.username}</h3>
                </div>
              </div>
              <Logout />
            </div>
            <Messages />
            <ChatInput handleSendMsg={handleSendMsg}/>
          </Container>
        )
      }
    </>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 2.7rem;
        }
      }
      .username {
        h3 {
          color: white;
          text-transform: capitalize;
        }
      }
    }
  }`; 