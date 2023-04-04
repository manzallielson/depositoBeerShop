import { darken } from 'polished'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  ${({ theme }) => css`
    position: absolute;
    right: 3.5rem;
    bottom: 5.5rem;

    background-color: ${theme.colors.red};
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    z-index: 999;
    transition: background 0.3s;
    &:hover {
      background: ${darken(0.1, '#AA2424')};
    }

    span:first-child {
      margin-right: 0.25rem;
      font-weight: 500;
      font-size: 1rem;
    }

    svg {
      fill: ${theme.colors.white};
      width: 2rem;
      height: 2rem;
    }
  `}
`
