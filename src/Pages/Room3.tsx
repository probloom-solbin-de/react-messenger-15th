import React from "react";
import styled from 'styled-components';
import UserBox from '../Component/UserBox';
import InputBox from '../Component/InputBox';

import Userprofile from "../Component/Molecule/Userprofile";

const Room3 = () => {
    return (
    <PageWrapper>
        <Userprofile id={'1'} maintext={'다 고쳐 필릭스'} subtext={'다 고쳐 필릭스님과의 채팅입니다'}></Userprofile>
        <MesssageListWrapper>
        </MesssageListWrapper>
    </PageWrapper>
    );
};

const PageName = styled.div`
    width: 100%;
    font-weight : 700;
    font-size : 20px;
    margin : 0px 20px 0px 0px;
`;

const PageWrapper = styled.div`
    width : 100%;
    height: 100%;
    margin: 0px 20px 20px 20px;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    background: #FFFFFF;
    border-radius: 24px;
`;

const MesssageListWrapper = styled.div` 
    display : flex;
    flex-direction : column;
    font-family: sans-serif;
    align-items: left;
    justify-content : center;
    background: #FFFFFF;
`;

export default Room3;