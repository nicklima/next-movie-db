import styled from "styled-components"

export const ButtonWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-top: 80px;
  width: 100%;
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 25px;
  padding: 10px 25px;
  width: 120px;
`
