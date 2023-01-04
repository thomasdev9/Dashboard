import React from 'react'
import styled, { css } from "styled-components";

const Container = styled.div`
    width: 90%;
    height: 100vh;
    overflow-x: scroll;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

const ProductWrapper = styled.div`
    padding: 50px  25px;
`

const ProductController = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    background: ${props => props.theme.colors.white};
    width: 100%;
    border-radius: ${props => props.theme.cards.borderRadius};
    padding: ${props => props.theme.cards.padding};
    text-align: center;
    box-shadow: ${props => props.theme.boxShadows.boxShadow_1};
    transition: all 300ms ease;
    margin-top: 25px;
`

const ProductForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 70%;
    padding: 10px 0px;

    ${props => props.variant === "full" && css`
        width: 100%;
    `}
`

const ProductLabel = styled.label`
    font-size: 14px;
    color: ${props => props.theme.colors.infoDark};
    padding: 5px 0px;
`

const ProductInput = styled.input`
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.infoLight};
    border-radius: 25px;
    height: 30px;
    width: 100%;
    padding: 5px 15px;
    transition: all 0.3s ease-in;

    &:focus{
        border: 1px solid ${props => props.theme.colors.primary};
    }

    ${props => props.variant === "sm" && css `
        width: 120px;
    `}

    ${props => props.width && css `
        width: ${props.width};
    `}
`

const ProductTextArea = styled.textarea`
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.infoLight};
    border-radius: 25px;
    width: 100%;
    padding: 20px 15px;
    transition: all 0.3s ease-in;
    font-size: 14px;

    &:focus{
        border: 1px solid ${props => props.theme.colors.primary};
    }
`

const VariantsTable = styled.table`
    width: 100%;
    border-radius: ${props => props.theme.cards.borderRadius};
    padding: ${props => props.theme.cards.padding};
    text-align: left;
    transition: all 300ms ease;
    margin-top: 25px;
    font-size: 14px;

    thead th{
        padding: 0px 20px;
    }

    tbody td{
        height: 2.8rem;
        border-bottom: 1px solid ${props => props.theme.colors.light};
        color: ${props => props.theme.colors.darkVariant};
        padding: 10px 20px;
    }

    tbody tr:last-child td{
        border: none;
    }
`

const ProductButton = styled.button`
    width: 140px;
    height: 40px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease-out;
    bottom: 10px;


    &:hover{
        opacity: 0.7;
    }
`

const CheckBoxesList = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    width: 40%;
`

const CheckLabel = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-right: 15px;
    font-size: 14px;
    color: #7d8da1;
    margin-bottom: 12px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover{
        input ~ span{
            background-color: #ccc;
        }
    }

    input:checked ~ span{
        background-color: ${props => props.theme.colors.primary};
    }

    input:checked ~ span:after{
        display: block;
    }
`

const CheckInput = styled.input`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
`

const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    transition: all 0.2s ease;

    &:after{
        content: "";
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
`

function SingleProduct() {
  return (
    <Container>
        <ProductWrapper>
            <ProductController>
                <ProductForm action="#">
                    <InputContainer>
                        <ProductLabel>Name</ProductLabel>
                        <ProductInput></ProductInput>
                    </InputContainer>
                    <InputContainer>
                        <ProductLabel>Description</ProductLabel>
                        <ProductTextArea></ProductTextArea>
                    </InputContainer>
                    <InputContainer>
                        <ProductLabel>Weight</ProductLabel>
                        <ProductInput type="number" width="200px"></ProductInput>
                    </InputContainer>
                    <InputContainer>
                        <ProductLabel>Size</ProductLabel>
                        <CheckBoxesList>
                            <CheckLabel class="container">XS
                            <CheckInput type="checkbox"/>
                            <CheckMark />
                            </CheckLabel>
                            <CheckLabel class="container">S
                            <CheckInput type="checkbox"/>
                            <CheckMark />
                            </CheckLabel>
                            <CheckLabel class="container">M
                            <CheckInput type="checkbox"/>
                            <CheckMark />
                            </CheckLabel>
                            <CheckLabel class="container">L
                            <CheckInput type="checkbox"/>
                            <CheckMark />
                            </CheckLabel>
                            <CheckLabel class="container">XL
                            <CheckInput type="checkbox"/>
                            <CheckMark />
                            </CheckLabel>
                            <CheckLabel class="container">XXL
                            <CheckInput type="checkbox"/>
                            <CheckMark />
                            </CheckLabel>
                        </CheckBoxesList>
                    </InputContainer>
                    
                    <InputContainer>
                        <ProductLabel>Variants</ProductLabel>
                        <VariantsTable>
                            <thead>
                                <th></th>
                                <th>Variant</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>SKU</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="file"/></td>
                                    <td>S/Black</td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td>1534673242467</td>
                                </tr>
                                <tr>
                                    <td><input type="file"/></td>
                                    <td>S/Black</td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td>1534673242467</td>
                                </tr>
                                <tr>
                                    <td><input type="file"/></td>
                                    <td>S/Black</td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td>1534673242467</td>
                                </tr>
                                <tr>
                                    <td><input type="file"/></td>
                                    <td>S/Black</td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td>1534673242467</td>
                                </tr>
                                <tr>
                                    <td><input type="file"/></td>
                                    <td>S/Black</td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td><ProductInput variant="sm"/></td>
                                    <td>1534673242467</td>
                                </tr>
                            </tbody>
                        </VariantsTable>
                    </InputContainer>
                    <ProductButton>Save</ProductButton>
                </ProductForm>
            </ProductController>
        </ProductWrapper>
    </Container>
  )
}

export default SingleProduct