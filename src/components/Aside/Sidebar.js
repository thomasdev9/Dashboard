import React from 'react'
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 86vh;
    position: relative;
    top: 3rem;
`

const MenuItem = styled.a`
    display: flex;
    color: ${props => props.theme.colors.infoDark};
    margin-left: 2rem;
    gap: 1rem;
    align-items: center;
    position: relative;
    height: 3.7rem;
    transition: all 300ms ease;

    span{
        font-size: 1.6rem;
        transition: all 300ms ease;
    }

    &:last-child{
        position: absolute;
        bottom: 2rem;
        width: 100%;
    }

    &:hover{
        margin-left: 1rem;
        color: ${props => props.theme.colors.primary};
    }
`

const MenuItemName = styled.h3`
    font-weight: 500;
`

function Sidebar() {
  return (
    <Wrapper>
        <MenuItem href="#">
            <span className="material-symbols-sharp">grid_view</span>
            <MenuItemName>Dashboard</MenuItemName>
        </MenuItem>
        <MenuItem href="#">
            <span className="material-symbols-sharp">person</span>
            <MenuItemName>Customers</MenuItemName>
        </MenuItem>
        <MenuItem href="#">
            <span className="material-symbols-sharp">receipt_long</span>
            <MenuItemName>Orders</MenuItemName>
        </MenuItem>
        <MenuItem href="#">
            <span className="material-symbols-sharp">insights</span>
            <MenuItemName>Analytics</MenuItemName>
        </MenuItem>
        <MenuItem href="#">
            <span className="material-symbols-sharp">grid_view</span>
            <MenuItemName>Messages</MenuItemName>
        </MenuItem>
        <MenuItem href="#">
            <span className="material-symbols-sharp">inventory</span>
            <MenuItemName>Products</MenuItemName>
        </MenuItem>
        <MenuItem href="#">
            <span className="material-symbols-sharp">report_gmailerrorred</span>
            <MenuItemName>Reports</MenuItemName>
        </MenuItem>
        <MenuItem href="#">
            <span className="material-symbols-sharp">settings</span>
            <MenuItemName>Settings</MenuItemName>
        </MenuItem>
        <MenuItem href="#">
            <span className="material-symbols-sharp">add</span>
            <MenuItemName>Add Product</MenuItemName>
        </MenuItem>
        <MenuItem href="#">
            <span className="material-symbols-sharp">logout</span>
            <MenuItemName>Logout</MenuItemName>
        </MenuItem>
    </Wrapper>
  )
}

export default Sidebar