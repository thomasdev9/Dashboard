import React from 'react'
import styled from "styled-components";
import logoPhoto from "../../images/logo.png"

const TopContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.4rem;
`

const Logo = styled.div`
    display: flex;
    gap: 0.8rem;

    img{
        width: 2rem;
        height: 2rem;
    }
`

const Close = styled.div`
    display: none;
`

const Header = styled.h2`
    span{
        color: ${props => props.theme.colors.danger};
    }
`

function TopBar() {
  return (
    <TopContainer>
        <Logo>
            <img src={logoPhoto} alt=""/>
            <Header>EGA<span>TOR</span></Header>
        </Logo>
        <Close>
            <span className="material-symbols-sharp">close</span>
        </Close>
    </TopContainer>
  )
}

export default TopBar