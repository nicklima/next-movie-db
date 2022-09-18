import styled from "styled-components"

export const GridSwitch = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button<ISwitchProps>`
  background: transparent;
  cursor: pointer;
  opacity: ${({ active }) => (active ? "1" : "0.5")};

  svg {
    fill: ${({ theme }) => theme.colors.text};
  }
`

export const Switch = styled.label`
  display: inline-block;
  height: 15px;
  margin: 0 5px;
  position: relative;
  width: 30px;
`

export const Slider = styled.label<ISwitchProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.text};
  border-radius: 34px;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;

  &:before {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 50%;
    bottom: 3px;
    content: "";
    height: 10px;
    left: 4px;
    position: absolute;
    transform: ${({ active }) => (active ? "translateX(15px)" : "initial")};
    transition: 0.4s;
    width: 10px;
  }
`
