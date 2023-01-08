import React from 'react'
import styled, { css } from "styled-components";
import { Line, Doughnut } from "react-chartjs-2"
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    ArcElement,
    Tooltip
} from "chart.js"

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    Title,
    ArcElement,
    Tooltip
)

const Container = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

const AnalyticsWrapper = styled.div`
    padding: 50px  25px 0px 25px;
`

const AnalyticsHeader = styled.h1`
    font-weight: 700;
    color: ${props => props.theme.colors.dark} !important;
`

const AnalyticsContainer = styled.table`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1.8rem 0;
    text-align: center;
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
    text-align: left;

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

const ChartsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 25px;
`

const ChartWrapper = styled.div`
    height: 300px;
    width: 48%;
    background: ${props => props.theme.colors.white};
    padding: ${props => props.theme.cards.padding};
    border-radius: ${props => props.theme.cards.borderRadius};
    box-shadow: ${props => props.theme.boxShadows.boxShadow_1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

function Analytics() {
  const data = {
    labels : ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [{
        data: [8, 7.8, 6, 8, 7, 5],
        backgroundColor: 'transparent',
        borderColor: '#800000',
        pointBorderColor: 'transparent',
        pointBorderWidth: 4,
        tension: 0.5
    }]
  };

  const options = {
    plugins: {
        legend: false,
        title: {
            display: true,
            color: "#363949",
            text: "Sales in 2022",
            align: 'center',
            padding: {
                bottom: 25
            },
            font: {
                size: 18,
                family: "'Poppins', sans-serif"
            }
        }
    },
    scales: {
        x: {
            grid: {
                display: false
            }
        },
        y: {
            min: 2,
            max: 10,
            ticks: {
                stepSize: 2
            }
        }
    },
    maintainAspectRatio: false,
  };

  const dataDonught = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  const optionsDonught = {
    plugins: {
        legend: {
            display: true,
            position: 'right',
            labels: {
              usePointStyle: true,
              pointStyle: 'circle'
            }
        },
        title: {
            display: true,
            color: "#363949",
            text: "Categories of sold products",
            align: 'start',
            padding: {
                bottom: 25
            },
            font: {
                size: 18,
                family: "'Poppins', sans-serif"
            }
        }
    }
  }

  return (
    <Container>
        <AnalyticsWrapper>
            <AnalyticsHeader>Analytics</AnalyticsHeader>
            <AnalyticsContainer>
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
                <ChartsContainer>
                    <ChartWrapper>
                        <Line data={data} options={options}/>
                    </ChartWrapper>
                    <ChartWrapper>
                        <Doughnut data={dataDonught} options={optionsDonught} />
                    </ChartWrapper>
                </ChartsContainer>
            </AnalyticsContainer>
        </AnalyticsWrapper>
    </Container>
  )
}

export default Analytics