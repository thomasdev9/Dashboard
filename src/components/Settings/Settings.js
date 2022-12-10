import React from 'react'
import styled, { css } from "styled-components";

const Container = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

const SettingsHeader = styled.h1`
    font-weight: 600;
`

const SettingsWrapper = styled.div`
    padding: 50px  25px;
`

const SettingsController = styled.div`
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
`

const SettingsForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    padding: 15px 0px;
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 30%;
`

const SettingsLabel = styled.label`
    font-size: 14px;
    color: ${props => props.theme.colors.infoDark};
    padding: 5px 0px;
`

const SettingsInput = styled.input`
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.infoLight};
    border-radius: 25px;
    height: 30px;
    width: 100%;
    padding: 5px 15px;
`

function Settings() {
  return (
    <Container>
        <SettingsWrapper>
            <SettingsHeader>Settings</SettingsHeader>
            <SettingsController>
                <SettingsForm>
                    <InputWrapper>
                        <InputContainer>
                            <SettingsLabel>Title</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                        <InputContainer>
                            <SettingsLabel>Company Name</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                        <InputContainer>
                            <SettingsLabel>Title</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                    </InputWrapper>
                    <InputWrapper>
                        <InputContainer>
                            <SettingsLabel>Title</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                        <InputContainer>
                            <SettingsLabel>Company Name</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                        <InputContainer>
                            <SettingsLabel>Title</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                    </InputWrapper>
                    <InputWrapper>
                        <InputContainer>
                            <SettingsLabel>Title</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                        <InputContainer>
                            <SettingsLabel>Company Name</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                        <InputContainer>
                            <SettingsLabel>Title</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                    </InputWrapper>
                    <InputWrapper>
                        <InputContainer>
                            <SettingsLabel>Title</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                        <InputContainer>
                            <SettingsLabel>Company Name</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                        <InputContainer>
                            <SettingsLabel>Title</SettingsLabel>
                            <SettingsInput />
                        </InputContainer>
                    </InputWrapper>
                </SettingsForm>
            </SettingsController>
        </SettingsWrapper>
    </Container>
  )
}

export default Settings