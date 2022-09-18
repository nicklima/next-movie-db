import styled from "styled-components"

export const Text = styled.div`
  color: ${({ theme }) => theme.colors.text};
`

export const Info = styled.div`
  align-items: center;
  display: flex;
  grid-gap: 10px;
`

export const Grid = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: 20px auto;
  justify-content: flex-start;
  padding: 5px 0;

  & svg {
    fill: ${({ theme }) => theme.colors.text};
  }
`
