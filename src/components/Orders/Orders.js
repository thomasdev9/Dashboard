import React from 'react'
import styled ,{ css } from "styled-components";

const OrdersContainer = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

const OrdersWrapper = styled.main`
    padding: 50px  25px;
`

const OrdersHeader = styled.h1`
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

const OrdersTable = styled.table`
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

const ProductsCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const ProductCheckIcon = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background: ${props => props.theme.colors.primary};
    color: #fff;
    border-radius: 50%;
    width: 17px;
    height: 17px;
    margin-left: 7px;
    cursor: pointer;
`

const orders = [
  {
      orderId: '48374',
      products: 3,
      paymentStatus: 'Due',
      payment: "57$",
      address: "5th Holland Square",
      shipping: 'Pending'
  },
  {
      orderId: '32932',
      products: 7,
      paymentStatus: 'Refunded',
      payment: "90$",
      address: "5th Holland Square",
      shipping: 'Declined',
  },
  {
      orderId: '83457',
      products: 11,
      paymentStatus: 'Due',
      payment: "24$",
      address: "5th Holland Square",
      shipping: 'Pending',
  },
  {
      orderId: '90802',
      products: 2,
      paymentStatus: 'Paid',
      payment: "19$",
      address: "5th Holland Square",
      shipping: 'Delivered',
  },
  {
      orderId: '39233',
      products: 9,
      paymentStatus: 'Paid',
      payment: "28$",
      address: "5th Holland Square",
      shipping: 'Delivered',
  },
  {
      orderId: '09348',
      products: 15,
      paymentStatus: 'Paid',
      payment: "37$",
      address: "5th Holland Square",
      shipping: 'Delivered',
  },
  {
    orderId: '47349',
    products: 2,
    paymentStatus: 'Due',
    payment: "62$",
    address: "5th Holland Square",
    shipping: 'Pending'
  },
  {
      orderId: '39384',
      products: 1,
      paymentStatus: 'Refunded',
      payment: "18$",
      address: "5th Holland Square",
      shipping: 'Declined',
  },
  {
      orderId: '89894',
      products: 2,
      paymentStatus: 'Due',
      payment: "51$",
      address: "5th Holland Square",
      shipping: 'Pending',
  },
  {
      orderId: '83497',
      products: 5,
      paymentStatus: 'Paid',
      payment: "42$",
      address: "5th Holland Square",
      shipping: 'Delivered',
  },
];

const StatusButton = styled.button`
  width: 120px;
  height: 25px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 25px;
  color: ${props => props.theme.colors.primary};
  font-size: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease-in;
  cursor: pointer;

  &:hover{
    background: ${props => props.theme.colors.primary};
    color: #fff;
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

function Orders() {
  return (
    <OrdersContainer>
      <OrdersWrapper>
        <OrdersHeader>Orders</OrdersHeader>
        <SearchWrapper class="search">
              <SearchBar type="text" placeholder="Search Orders"/>
              <SearchButton><span class="material-symbols-outlined">search</span></SearchButton>
          </SearchWrapper>
          <OrdersTable>
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Products</th>
                        <th>Payment</th>
                        <th>Payment Status</th>
                        <th>Address</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {orders?.map((order) => {
                        return(
                            <tr>
                                <td>{order.orderId}</td>
                                <td><ProductsCell>{order.products}<ProductCheckIcon>+</ProductCheckIcon></ProductsCell></td>
                                <td>{order.payment}</td>
                                <td>{order.paymentStatus}</td>
                                <td>{order.address}</td>
                                <td className={`${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'success'}`}>{order.shipping}</td>
                                <td><ProductsCell><StatusButton>Mark As Confirmed</StatusButton></ProductsCell></td>
                            </tr>
                        )
                    })}
                </tbody>
          </OrdersTable>
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
      </OrdersWrapper>
    </OrdersContainer>
  )
}

export default Orders