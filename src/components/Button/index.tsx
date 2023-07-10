import PatternBg from 'assets/bg_pattern.png?preset=pattern&resize=true'
import type { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import styled from 'styled-components/macro'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledButton = styled.button<any>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  cursor: pointer;
  background-color: #a9a3c9;
  border: none;
  padding: 0 12px;
  text-shadow: 0 0 #222;
  min-height: 23px;
  min-width: 75px;

  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset 1px 1px grey, inset -2px -2px grey,
    inset 1px 1px #dfdfdf;
  &:active {
    box-shadow: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -1px -1px #dfdfdf, inset 2px 2px #808080;
  }

  &.free-width {
    min-width: auto;
    padding-left: unset;
    padding-right: unset;
  }

  &.free-height {
    min-height: auto;
  }

  &.heavy {
    box-shadow: inset -2px -2px #0a0a0a, inset 1px 1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey,
      inset 2px 2px #dfdfdf;
    &:active {
      box-shadow: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -2px -2px #dfdfdf, inset 2px 2px #808080;
    }
  }

  &.focus-taskbar {
    background-image: url(${PatternBg[0]?.src});
    background-repeat: repeat;
    box-shadow: inset -1px -1px #ffffff, inset 1px 1px #0a0a0a, inset -1px -1px #dfdfdf, inset 2px 2px #808080;
  }

  &:disabled {
    cursor: not-allowed;
    color: #5a5a5a;
    text-shadow: 1px 1px #fff;
    &:active {
      box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset 1px 1px grey, inset -2px -2px grey,
        inset 1px 1px #dfdfdf;
    }
  }
`

export const ButtonIcon = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`

export const HighlightButton = (
  props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
) => {
  const { onClick, children } = props
  return (
    <StyledButton {...props} onClick={onClick}>
      {children}
    </StyledButton>
  )
}
