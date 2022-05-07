import React from "react";
import styled from 'styled-components';
import { useMessageState } from '../Context/MessageContext';

/*
type MessageListProps = {
    };
    useMessageDispatch
    */
    
const MessageList = ( ) => {
    const state = useMessageState();
    //const dispatch = useMessageDispatch();

return (
    <MessageListArea>
        <MessageListField>
        {state.map(({ userID, text }) => (
            <ChatInfoWrapper>
                <UserWrapper>
                    <ProfileImg />
                    <UserName>
                        {userID === 1 ? 'Judi' : 'Nick'}
                    </UserName>
                </UserWrapper>
                <Bubble>
                    {text}
                </Bubble>
            </ChatInfoWrapper>
        ))}
        </MessageListField>
    </MessageListArea>);
}

const MessageListArea = styled.div`
    width: 100%;
    height: 56%;
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    background: #FFFFFF;
    border-radius: 24px;
`;

const MessageListField = styled.div`
    width: 100%;
    height: 90%;
    display : flex;
    flex-direction : column;
    margin : auto; 
    font-family: sans-serif;
    align-items: flex-start;
    background: #FFFFFF;
    border-radius: 24px;
    overflow : auto;
`;

const ChatInfoWrapper = styled.div`
    margin : 4px 24px 2px 24px;
    display: flex;
    flex-direction : column;
    justify-content : left;
`;

const UserWrapper = styled.div`
    width: 60px;
    display: flex;
    padding : 2px 0px px 0px;
`;

const ProfileImg = styled.img`
    width: 20px;
    height: 20px;
    border-radius: 8px;
    object-fit: cover;
    background-color : #999999;
`;
        
const UserName = styled.div`
    font-size: 12px;
    font-weight : 400;
    color: #444444;
    margin : auto 6px ;
`;

const Bubble = styled.span`
    padding: 6px 12px;
    width : auto;
    margin: 3px;
    font-size: 12px;
    line-height: 16px;
    color : #FFFFFF;
    font-weight: 500;
    border-radius : 12px;
    background-color : #567BFF;

`;

export default MessageList;