import React from 'react'
import styled, { css } from "styled-components";
import profile1 from "../../images/profile-1.jpg";
import profile2 from "../../images/profile-2.jpg";
import profile3 from "../../images/profile-3.jpg";
import profile4 from "../../images/profile-4.jpg";

const Container = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

const NotificationsWrapper = styled.div`
    padding: 50px  25px 0px 25px;
`

const NotificationsHeader = styled.h1`
    font-weight: 600;
`

const NotificationsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 20px;
    width: 100%;
`

const Update = styled.div`
    background: ${props => props.theme.colors.white};
    padding: 1.4rem;
    border-radius: ${props => props.theme.cards.borderRadius};
    box-shadow: ${props => props.theme.boxShadows.boxShadow_1};
    transition: all 300ms ease;
    display: grid;
    grid-template-columns: 2.6rem auto 4rem;
    gap: 1rem;
    margin-bottom: 1rem;
    width: 100%;
`

const ProfilePhoto = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
`

const TextMuted = styled.span`
    font-size: 0.75rem;
    color: ${props => props.theme.colors.infoDark};
`

const Messages = styled.div`
    p{
        color: ${props => props.theme.colors.darkVariant}
    }

    b{
        color: ${props => props.theme.colors.dark};
    }
`

const Date = styled.span`
    font-size: 12px;
    color: ${props => props.theme.colors.infoDark};
    text-align: center;
`

const Pagination = styled.div`
    padding: 30px 0px;
    text-align: center;
`

const PaginationList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
`

const PageLink = styled.a`
    display: inline-block;
    padding: 10px 18px;
    font-size: 14px;
    color: rgb(54, 57, 73);
    transition: all 0.3s ease;

    &:hover{
        color: ${props => props.theme.colors.primary};
    }

    ${props => props.status === "active" && css`
        background-color: ${props => props.theme.colors.primary};
        border-radius: 50%;
        border: none;
        color: #fff;

        &:hover{
            color: #fff;
        }
    `}
`

function Notifications() {
  return (
    <Container>
        <NotificationsWrapper>
            <NotificationsHeader>Notifications</NotificationsHeader>
            <NotificationsList>
                <Update>
                    <ProfilePhoto>
                        <img src={profile2} />
                    </ProfilePhoto>
                    <Messages>
                        <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                        <TextMuted>2 Minutes Ago</TextMuted>
                    </Messages>
                    <Date>Today 10:15 PM</Date>
                </Update>
                <Update>
                    <ProfilePhoto>
                        <img src={profile3} />
                    </ProfilePhoto>
                    <Messages>
                        <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                        <TextMuted>2 Minutes Ago</TextMuted>
                    </Messages>
                    <Date>Today 10:15 PM</Date>
                </Update>
                <Update>
                    <ProfilePhoto>
                        <img src={profile4} />
                    </ProfilePhoto>
                    <Messages>
                        <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                        <TextMuted>2 Minutes Ago</TextMuted>
                    </Messages>
                    <Date>Today 10:15 PM</Date>
                </Update>
                <Update>
                    <ProfilePhoto>
                        <img src={profile2} />
                    </ProfilePhoto>
                    <Messages>
                        <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                        <TextMuted>2 Minutes Ago</TextMuted>
                    </Messages>
                    <Date>Today 10:15 PM</Date>
                </Update>
                <Update>
                    <ProfilePhoto>
                        <img src={profile2} />
                    </ProfilePhoto>
                    <Messages>
                        <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                        <TextMuted>2 Minutes Ago</TextMuted>
                    </Messages>
                    <Date>Today 10:15 PM</Date>
                </Update>
            </NotificationsList>
        </NotificationsWrapper>
        <Pagination>
                <PaginationList>
                    <PageLink href="#"><li>Prev</li></PageLink>
                    <PageLink href="#"><li>1</li></PageLink>
                    <PageLink href="#"><li>2</li></PageLink>
                    <PageLink href="#"><li>3</li></PageLink>
                    <PageLink href="#" status="active"><li>4</li></PageLink>
                    <PageLink href="#"><li>5</li></PageLink>
                    <PageLink href="#"><li>6</li></PageLink>
                    <PageLink href="#"><li>7</li></PageLink>
                    <PageLink href="#"><li>Next</li></PageLink>
                </PaginationList>
        </Pagination>
    </Container>
  )
}

export default Notifications