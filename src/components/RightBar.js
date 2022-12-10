import React from 'react'
import styled, { css } from "styled-components";
import profile1 from "../images/profile-1.jpg";
import profile2 from "../images/profile-2.jpg";
import profile3 from "../images/profile-3.jpg";
import profile4 from "../images/profile-4.jpg";

const RightContainer = styled.div`
    margin-top: 1.4rem;
`

const TopWrapper = styled.div`
    display: flex;
    justify-content: end;
    gap: 2rem;
`

const TopButton = styled.button`
    display: none;
`

const ThemeToggler = styled.div`
    background: ${props => props.theme.colors.light};
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 1.6rem;
    width: 4.2rem;
    cursor: pointer;
    border-radius: ${props => props.theme.borders.radius_1};

    span{
        font-size: 1.2rem;
        width: 50%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span.active{
        background: ${props => props.theme.colors.primary};
        color: white;
        border-radius: ${props => props.theme.borders.radius_1};
    }
`

const Profile = styled.div`
    display: flex;
    gap: 2rem;
    text-align: right;
`

const ProfilePhoto = styled.div`
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    overflow: hidden;
`

const RecentUpdates = styled.div`
    margin-top: 1rem;
`

const RecentUpdatesHeader = styled.h2`
    margin-bottom: 0.8rem;
`

const Update = styled.div`
    background: ${props => props.theme.colors.white};
    padding: ${props => props.theme.cards.padding};
    border-radius: ${props => props.theme.cards.borderRadius};
    box-shadow: ${props => props.theme.boxShadows.boxShadow_1};
    transition: all 300ms ease;
    display: grid;
    grid-template-columns: 2.6rem auto;
    gap: 1rem;
    margin-bottom: 1rem;
`

const SalesAnalytics = styled.div`
    margin-top: 2rem;
`

const SalesAnalyticsHeader = styled.h2`
    margin-bottom: 0.8rem;
`

const SalesAnalyticsItem = styled.div`
    background: ${props => props.theme.colors.white};
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 0.7rem;
    padding: 1.4rem ${props => props.theme.cards.padding};
    border-radius: ${props => props.theme.borders.radius_3};
    box-shadow: ${props => props.theme.boxShadows.boxShadow_1};
    transition: all 300ms ease;

    &:hover{
        box-shadow: none;
    }
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

const SalesAnalyticsIcon = styled.div`
    padding: 0.6rem;
    color: ${props => props.theme.colors.white};
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    display: flex;

    ${props => props.variant === 'primary' && css`
        background: ${props => props.theme.colors.primary};
    `}

    ${props => props.variant === 'danger' && css`
        background: ${props => props.theme.colors.danger};
    `}

    ${props => props.variant === 'success' && css`
        background: ${props => props.theme.colors.success};
    `}
`

const SalesAnalyticsRight = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin: 0;
    width: 100%;
`

const AddProduct = styled.div`
    background-color: transparent;
    border: 2px dashed ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.primary};
    padding: 1.4rem ${props => props.theme.cards.padding};
    border-radius: ${props => props.theme.borders.radius_3};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 300ms ease;

    div{
        display: flex;
        align-items: center;
        gap: 0.6rem;
    }

    &:hover{
        background: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.white};
    }
`

const AddProductHeader = styled.h3`
    font-weight: 600;
`

function RightBar() {
    debugger
  return (
    <RightContainer>
        <TopWrapper>
            <TopButton>
                <span className="material-symbols-sharp">menu</span>
            </TopButton>
            <ThemeToggler>
                <span className="material-symbols-sharp active">light_mode</span>
                <span className="material-symbols-sharp">dark_mode</span>
            </ThemeToggler>
            <Profile>
                <div>
                    <p>Hey, <b>Daniel</b></p>
                    <TextMuted>Admin</TextMuted>
                </div>
                <ProfilePhoto>
                    <img src={profile1} />
                </ProfilePhoto>
            </Profile>


        </TopWrapper>

        <RecentUpdates>
            <RecentUpdatesHeader>Recent Updates</RecentUpdatesHeader>
            <div>
                <Update>
                    <ProfilePhoto>
                        <img src={profile2} />
                    </ProfilePhoto>
                    <Messages>
                        <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                        <TextMuted>2 Minutes Ago</TextMuted>
                    </Messages>
                </Update>
                <Update>
                    <ProfilePhoto>
                        <img src={profile3} />
                    </ProfilePhoto>
                    <Messages>
                        <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                        <TextMuted>2 Minutes Ago</TextMuted>
                    </Messages>
                </Update>
                <Update>
                    <ProfilePhoto>
                        <img src={profile4} />
                    </ProfilePhoto>
                    <Messages>
                        <p><b>Mike Tyson</b> received his order of Night lion tech GPS drone.</p>
                        <TextMuted>2 Minutes Ago</TextMuted>
                    </Messages>
                </Update>
            </div>
        </RecentUpdates>

        <SalesAnalytics>
            <SalesAnalyticsHeader>Sales Analytics</SalesAnalyticsHeader>
            <SalesAnalyticsItem>
                <SalesAnalyticsIcon variant="primary">
                    <span className="material-symbols-sharp">shopping_cart</span>
                </SalesAnalyticsIcon>
                <SalesAnalyticsRight>
                    <div>
                        <h3>ONLINE ORDERS</h3>
                        <TextMuted>Last 24 Hours</TextMuted>
                    </div>
                    <h5 className="success">+39%</h5>
                    <h3>3849</h3>
                </SalesAnalyticsRight>
            </SalesAnalyticsItem>

            <SalesAnalyticsItem>
                <SalesAnalyticsIcon variant="danger">
                    <span className="material-symbols-sharp">local_mall</span>
                </SalesAnalyticsIcon>
                <SalesAnalyticsRight>
                    <div>
                        <h3>OFFLINE ORDERS</h3>
                        <TextMuted>Last 24 Hours</TextMuted>
                    </div>
                    <h5 className="danger">-17%</h5>
                    <h3>1100</h3>
                </SalesAnalyticsRight>
            </SalesAnalyticsItem>

            <SalesAnalyticsItem>
                <SalesAnalyticsIcon variant="success">
                    <span className="material-symbols-sharp">person</span>
                </SalesAnalyticsIcon>
                <SalesAnalyticsRight>
                    <div>
                        <h3>NEW CUSTOMERS</h3>
                        <TextMuted>Last 24 Hours</TextMuted>
                    </div>
                    <h5 className="success">+25%</h5>
                    <h3>849</h3>
                </SalesAnalyticsRight>
            </SalesAnalyticsItem>

            <AddProduct>
                <div>
                    <span className="material-symbols-sharp">add</span>
                    <AddProductHeader>Add Product</AddProductHeader>
                </div>
            </AddProduct>
        </SalesAnalytics>
    </RightContainer>
  )
}

export default RightBar