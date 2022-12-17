import React from 'react'
import styled, { css } from "styled-components";
import Tshirt from "../../images/tshirt.jpg";
import Jean from "../../images/jean.jpg";
import Pant from "../../images/pant.jpg";
import Pant_2 from "../../images/pant-2.jpg";
import Pant_3 from "../../images/pant-3.jpg";

const Container = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

const ProductsWrapper = styled.div`
    padding: 50px  25px;
`

const ProductsHeader = styled.h1`
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

const ProductsList = styled.table`
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

    tbody td img{
        width: 80px;
        height: 80px;
        margin-top: 15px;
    }

    tbody tr:last-child td{
        border: none;
    }
`

const ImagesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const ProductsCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const StatusButton = styled.button`
  width: 120px;
  height: 30px;
  background: transparent;
  border: 1px solid ${props => props.theme.colors.primary};
  border-radius: 25px;
  color: ${props => props.theme.colors.primary};
  font-size: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in;
  cursor: pointer;

  &:hover{
    background: ${props => props.theme.colors.primary};
    color: #fff;
  }
`

const products = [
    {
        name: "Slim T-Shirt",
        stock: 298,
        price: 19.99,
        weight: 0.2,
        sku: "3287934734944",
        colors: "White, Black",
        variants: "-",
        images: "-",
    },
    {
        name: "Slim T-Shirt",
        stock: 298,
        price: 19.99,
        weight: 0.2,
        sku: "3287934734944",
        colors: "White, Black",
        variants: "-",
        images: "-",
    },
    {
        name: "Slim T-Shirt",
        stock: 298,
        price: 19.99,
        weight: 0.2,
        sku: "3287934734944",
        colors: "White, Black",
        variants: "-",
        images: "-",
    },
    {
        name: "Slim T-Shirt",
        stock: 298,
        price: 19.99,
        weight: 0.2,
        sku: "3287934734944",
        colors: "White, Black",
        variants: "-",
        images: "-",
    },
    {
        name: "Slim T-Shirt",
        stock: 298,
        price: 19.99,
        weight: 0.2,
        sku: "3287934734944",
        colors: "White, Black",
        variants: "-",
        images: "-",
    }
]

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

const checkImage = (index) => {
    if(index === 1){
        return Tshirt;
    }else if(index === 2){
        return Jean;
    }else if(index === 3){
        return Pant;
    }else if(index === 4){
        return Pant_2
    }else{
        return Pant_3;
    }
}

function Products() {
  return (
    <Container>
        <ProductsWrapper>
            <ProductsHeader>Products</ProductsHeader>
            <SearchWrapper class="search">
                <SearchBar type="text" placeholder="Search Product"/>
                <SearchButton><span class="material-symbols-outlined">search</span></SearchButton>
            </SearchWrapper>
            <ProductsList>
                <thead>
                    <tr>
                        <th>Images</th>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                        <th>Weight</th>
                        <th>SKU</th>
                        <th>Colors</th>
                        <th>Variants</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.map((product, index) => {
                            return(
                                <tr>
                                    <td><ImagesWrapper><img src={checkImage(index)} align="absmiddle"/></ImagesWrapper></td>
                                    <td>{product.name}</td>
                                    <td>{product.stock}</td>
                                    <td>{product.price}</td>
                                    <td>{product.weight}</td>
                                    <td>{product.sku}</td>
                                    <td>{product.colors}</td>
                                    <td>{product.variants}</td>
                                    <td><ProductsCell><StatusButton>Edit</StatusButton></ProductsCell></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </ProductsList>
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
        </ProductsWrapper>
    </Container>
  )
}

export default Products