import React from 'react'
import styled, { css } from "styled-components"

const RankWrapper = styled.div`
  padding: 110px  25px;
`

const RankHeader = styled.h2`
  font-weight: 600;
`

const RankTableWrapper = styled.table`
  background: ${props => props.theme.colors.white};
  width: 100%;
  border-radius: ${props => props.theme.cards.borderRadius};
  padding: ${props => props.theme.cards.padding};
  text-align: center;
  box-shadow: ${props => props.theme.boxShadows.boxShadow_1};
  transition: all 300ms ease;
  margin-top: 25px;

  &:hover{
      box-shadow: none;
  }

  tbody td{
      height: 2.8rem;
      border-bottom: 1px solid ${props => props.theme.colors.light};
      color: ${props => props.theme.colors.darkVariant};
  }

  tbody tr:last-child td{
      border: none;
  }

  img{
    width: 30px;
    height: 30px;
  }
`

const TableCell = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  img{
    position: absolute;
    left: -5px;
  }
`

const RankNumber = styled.div`
  width: 25px;
  height: 25px;
  font-size: 12px;
  background-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: -5px;
`

const ProgressCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ProgressIcon = styled.span`
  color: ${props => props.theme.colors.danger};
  font-size: 26px;
  
  ${props => props.progress && css`
    color: ${props => props.theme.colors.success};
  `}
`


function RankTable() {

  const topCustomers = [
    {
      name: "John Smith",
      orders: 34,
      amount: "599.32$",
      lastMonth: 5,
      progress: true,
    },
    {
      name: "John Smith",
      orders: 34,
      amount: "599.32$",
      lastMonth: 3,
      progress: false,
    },
    {
      name: "John Smith",
      orders: 34,
      amount: "599.32$",
      lastMonth: 7,
      progress: false,
    },
    {
      name: "John Smith",
      orders: 34,
      amount: "599.32$",
      lastMonth: 1,
      progress: true,
    },
    {
      name: "John Smith",
      orders: 34,
      amount: "599.32$",
      lastMonth: 6,
      progress: true
    },
  ];

  return (
    <RankWrapper>
      <RankHeader>Top 5 Customers</RankHeader>
      <RankTableWrapper>
        <thead>
          <tr>
            <th>Name</th>
            <th>Orders</th>
            <th>Amount</th>
            <th>Progress</th>
          </tr>
        </thead>
        <tbody>
          {topCustomers?.map(((customer, index) => {
            return(
              <tr>
                <td><TableCell><RankNumber>{index + 1}</RankNumber>{customer.name}</TableCell></td>
                <td>{customer.orders}</td>
                <td>{customer.amount}</td>
                <td><ProgressCell><ProgressIcon className="material-symbols-outlined" progress={customer.progress}>{customer.progress ? "arrow_drop_up" : "arrow_drop_down"}</ProgressIcon>{customer.lastMonth}</ProgressCell></td>
              </tr>
            )
          }))}
        </tbody>
      </RankTableWrapper>
    </RankWrapper>
  )
}

export default RankTable