import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 58.75rem;
    padding: 2rem;
    margin: 0 auto;
  `}
`
