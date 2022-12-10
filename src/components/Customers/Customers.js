import React from 'react'
import styled, { css } from "styled-components";
import RankTable from './RankTable';

const CustomersContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

const CustomersWrapper = styled.main`
    padding: 50px  25px;
`

const CustomersHeader = styled.h1`
    font-weight: 600;
`

const SearchWrapper = styled.div`
    position: relative;
    width: 25%;
`

const SearchBar = styled.input`
    margin-top: 15px;
    padding: 10px 20px;
    border-radius: 25px;
    width: 100%;
    transition: all 0.3s ease-out;
    border: 1px solid transparent;

    &:focus{
        border: 1px solid ${props => props.theme.colors.primary};
    }
`

const SearchButton = styled.button`
    background: transparent;
    position: absolute;
    top: 20px;
    right: 10px;
    cursor: pointer;
`

const CustomersTable = styled.table`
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

function Customers() {

    const customers = [
        {
            name: "John Smith",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Laryy Patrick",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Stephan Harry",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Josephine Nelly",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Peter Houser",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Thomas Wolt",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Fullo Zares",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Fullo Zares",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Fullo Zares",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Fullo Zares",
            amount: "58,43$",
            address: "5th Holland Square",
        },
        {
            name: "Fullo Zares",
            amount: "58,43$",
            address: "5th Holland Square",
        }
    ];


  return (
    <CustomersContainer>
        <CustomersWrapper>
            <CustomersHeader>Customers</CustomersHeader>
            <SearchWrapper class="search">
                <SearchBar type="text" placeholder="Search Customers"/>
                <SearchButton><span class="material-symbols-outlined">search</span></SearchButton>
            </SearchWrapper>
            <CustomersTable>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Address</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {customers?.map((customer) => {
                        return(
                            <tr>
                                <td>{customer.name}</td>
                                <td>{customer.amount}</td>
                                <td>{customer.address}</td>
                            </tr>
                        )
                    })}
                </tbody>

            </CustomersTable>
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
        </CustomersWrapper>
        <RankTable />
    </CustomersContainer>
  )
}

export default Customers