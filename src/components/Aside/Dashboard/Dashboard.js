import React from 'react'
import styled from "styled-components"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
`

const Container = styled.main`
    margin-top: 1.4rem;
`

const Header = styled.h1`
    color: rgb(54, 57, 73);
`

const DateWrapper = styled.div`
    display: inline-block;
    background: ${props => props.theme.colors.light};
    border-radius: ${props => props.theme.borders.radius_1};
    margin-top: 1rem;
    padding: 0.5rem 1.6rem;

    input[type='date']{
        background: transparent;
        color: ${props => props.theme.colors.dark};
    }
`

const Insights = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.6rem
`

const InsightContainer = styled.div`
    background: ${props => props.theme.colors.white};
    padding: ${props => props.theme.cards.padding};
    border-radius: ${props => props.theme.cards.borderRadius};
    margin-top: 1rem;
    box-shadow: ${props => props.theme.boxShadows.boxShadow_1};
    transition: all 300ms ease;

    &:hover{
        box-shadow: none;
    }

    span{
        background: ${props => props.theme.colors.primary};
        padding: 0.5rem;
        border-radius: 50%;
        color: ${props => props.theme.colors.white};
        font-size: 2rem;
    }

    h3{
        margin: 1rem 0 0.6rem;
        font-size: 1rem;
    }

    &:nth-child(2) span{
        background: ${props => props.theme.colors.danger};
    }

    &:nth-child(3) span{
        background: ${props => props.theme.colors.success};
    }

    &:nth-child(1) svg circle{
        stroke-dashoffset: -30;
        stroke-dasharray: 200;
    }

    &:nth-child(2) svg circle{
        stroke-dashoffset: 20;
        stroke-dasharray: 80;
    }

    &:nth-child(3) svg circle{
        stroke-dashoffset: 35;
        stroke-dasharray: 110;
    }
`

const MiddleWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme.colors.dark}
`

const Progress = styled.div`
    position: relative;
    height: 92px;
    width: 92px;
    border-radius: 50%;

    svg{
        width: 7rem;
        height: 7rem;
    }

    svg circle{
        fill: none;
        stroke: ${props => props.theme.colors.primary};
        stroke-width: 14;
        stroke-linecap: round;
        transform: translate(5px, 5px);
        stroke-dasharray: 110;
        stroke-dashoffset: 92;
    }
`

const Number = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TimeText = styled.small`
    margin-top: 1.3rem;
    display: block;
    color: ${props => props.theme.colors.infoDark};
`

const RecentOrders = styled.div`
    margin-top: 2rem;

    table{
        background: ${props => props.theme.colors.white};
        width: 100%;
        border-radius: ${props => props.theme.cards.borderRadius};
        padding: ${props => props.theme.paddings.padding_1};
        text-align: center;
        box-shadow: ${props => props.theme.boxShadows.boxShadow_1};
        transition: all 300ms ease;
    }

    table:hover{
        box-shadow: none;
    }

    table tbody td{
        height: 2.8rem;
        border-bottom: 1px solid ${props => props.theme.colors.light};
        color: ${props => props.theme.colors.darkVariant};
    }

    table tbody tr:last-child td{
        border: none;
    }
`

const RecentOrdersHeader = styled.h2`
    color: rgb(54, 57, 73);
`

const ShowAll = styled.a`
    text-align: center;
    display: block;
    margin: 1rem auto;
    color: ${props => props.theme.colors.primary};
    cursor: pointer;
`

const orders = [
    {
        productName: 'Foldable Mini Drone',
        productNumber: '85631',
        paymentStatus: 'Due',
        shipping: 'Pending'
    },
    {
        productName: 'LARVENDER KF102 Drone',
        productNumber: '36378',
        paymentStatus: 'Refunded',
        shipping: 'Declined',
    },
    {
        productName: 'Ruko F111 Pro Drone',
        productNumber: '49347',
        paymentStatus: 'Due',
        shipping: 'Pending',
    },
    {
        productName: 'Drone with Camera Drone',
        productNumber: '96996',
        paymentStatus: 'Paid',
        shipping: 'Delivered',
    },
    {
        productName: 'GPS 4K Drone',
        productNumber: '22821',
        paymentStatus: 'Paid',
        shipping: 'Delivered',
    },
    {
        productName: 'Lozenge Drone',
        productNumber: '00482',
        paymentStatus: 'Paid',
        shipping: 'Delivered',
    }
];



function Dashboard() {
  return (
    <Container>
        <Header>Dashboard</Header>
        <DateWrapper className="date">
            <input type="date" />
        </DateWrapper>

        <Insights>
            <InsightContainer className="sales">
                <span className="material-symbols-outlined">analytics</span>
                <MiddleWrapper>
                    <div className="left">
                        <h3>Total Sales</h3>
                        <h1>$25,024</h1>
                    </div>
                    <Progress>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <Number>
                            <p>81%</p>
                        </Number>
                    </Progress>
                </MiddleWrapper>
                <TimeText>
                    Last 24 Hours
                </TimeText>
            </InsightContainer>

            <InsightContainer className="expenses">
                <span className="material-symbols-outlined">bar_chart</span>
                <MiddleWrapper>
                    <div className="left">
                        <h3>Total Expenses</h3>
                        <h1>$14,160</h1>
                    </div>
                    <Progress>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <Number>
                            <p>62%</p>
                        </Number>
                    </Progress>
                </MiddleWrapper>
                <TimeText>
                    Last 24 Hours
                </TimeText>
            </InsightContainer>

            <InsightContainer className="income">
                <span className="material-symbols-outlined">stacked_line_chart</span>
                <MiddleWrapper>
                    <div className="left">
                        <h3>Total Sales</h3>
                        <h1>$10,864</h1>
                    </div>
                    <Progress>
                        <svg>
                            <circle cx="38" cy="38" r="36"></circle>
                        </svg>
                        <Number>
                            <p>44%</p>
                        </Number>
                    </Progress>
                </MiddleWrapper>
                <TimeText>
                    Last 24 Hours
                </TimeText>
            </InsightContainer>
        </Insights>

        <RecentOrders>
            <RecentOrdersHeader>Recent Orders</RecentOrdersHeader>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Number</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {orders.map((order) => {
                    return(
                        <tr>
                            <td>{order.productName}</td>
                            <td>{order.productNumber}</td>
                            <td>{order.paymentStatus}</td>
                            <td className={`${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}`}>{order.shipping}</td>
                            <td className="primary">Details</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
            <ShowAll>Show All</ShowAll>
        </RecentOrders>
    </Container>
  )
}

export default Dashboard;