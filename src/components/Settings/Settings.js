import React from 'react'
import styled, { css } from "styled-components";

const Container = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
`

const SettingsHeader = styled.h2`
    font-weight: 600;
    width: 100%;
    text-align: left;
    padding-bottom: 25px;
`

const SettingsWrapper = styled.div`
    padding: 50px  25px;
`

const SettingsController = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
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

const SettingsSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start; 
    margin: 0px 15px;

    ${props => props.variant === "vertical" && css`
        justify-content: space-between;
    `}
`

const SettingsForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 30px;
    border: 1px solid ${props => props.theme.colors.light};\
    border-radius: 15px;
    width: 100%;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 0px;

    &:last-child{
        justify-content: flex-start;
    }
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 47%;

    ${props => props.variant === "full" && css`
        width: 100%;
    `}
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
    transition: all 0.3s ease-in;

    &:focus{
        border: 1px solid ${props => props.theme.colors.primary};
    }
`

const SettingsTextArea = styled.textarea`
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

const SettingsButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const SettingsButton = styled.button`
    width: 140px;
    height: 40px;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
    font-weight: 600;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease-out;

    &:hover{
        opacity: 0.7;
    }
`

function Settings() {
  return (
    <Container>
        <SettingsWrapper>
            <SettingsController>
                <SettingsSection>
                    <SettingsHeader>Edit Profile</SettingsHeader>
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
                        </InputWrapper>
                        <InputWrapper>
                            <InputContainer>
                                <SettingsLabel>Brand name</SettingsLabel>
                                <SettingsInput />
                            </InputContainer>
                            <InputContainer>
                                <SettingsLabel>Website</SettingsLabel>
                                <SettingsInput />
                            </InputContainer>
                        </InputWrapper>
                        <InputWrapper>
                            <InputContainer>
                                <SettingsLabel>Phone</SettingsLabel>
                                <SettingsInput />
                            </InputContainer>
                            <InputContainer>
                                <SettingsLabel>Email</SettingsLabel>
                                <SettingsInput />
                            </InputContainer>
                        </InputWrapper>
                        <InputWrapper>
                            <InputContainer>
                                <SettingsLabel>City</SettingsLabel>
                                <SettingsInput />
                            </InputContainer>
                            <InputContainer>
                                <SettingsLabel>Adress</SettingsLabel>
                                <SettingsInput />
                            </InputContainer>
                        </InputWrapper>
                        <InputWrapper>
                            <InputContainer>
                                <SettingsLabel>Zip Code</SettingsLabel>
                                <SettingsInput />
                            </InputContainer>
                            <InputContainer>
                                <SettingsLabel>Clothing Category</SettingsLabel>
                                <SettingsInput />
                            </InputContainer>
                        </InputWrapper>
                        <InputWrapper>
                            <InputContainer>
                                <SettingsLabel>Logo</SettingsLabel>
                                <input type="file"/>
                            </InputContainer>
                        </InputWrapper>
                    </SettingsForm>
                </SettingsSection>
                <SettingsSection variant="vertical">
                    <SettingsSection>
                        <SettingsHeader>Change Password</SettingsHeader>
                        <SettingsForm>
                        <InputWrapper>
                                <InputContainer>
                                    <SettingsLabel>Current Password</SettingsLabel>
                                    <SettingsInput />
                                </InputContainer>
                                <InputContainer>
                                    <SettingsLabel>New Password</SettingsLabel>
                                    <SettingsInput />
                                </InputContainer>
                            </InputWrapper>
                            <InputWrapper>
                                <InputContainer>
                                    <SettingsLabel>Confirm Password</SettingsLabel>
                                    <SettingsInput />
                                </InputContainer>
                            </InputWrapper>
                        </SettingsForm>
                    </SettingsSection>
                    <SettingsSection>
                        <SettingsHeader>Information</SettingsHeader>
                        <SettingsForm>
                            <InputWrapper>
                                <InputContainer variant="full">
                                    <SettingsLabel>Description</SettingsLabel>
                                    <SettingsTextArea cols="400" rows="7"/>
                                </InputContainer>
                            </InputWrapper>
                        </SettingsForm>
                    </SettingsSection>
                </SettingsSection>
                <SettingsButton>Save</SettingsButton>
            </SettingsController>
        </SettingsWrapper>
    </Container>
  )
}

export default Settings