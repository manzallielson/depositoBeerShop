import styled, { css } from 'styled-components'
import { darken } from 'polished'
export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 1.75rem;

    .snack {
      background: ${theme.colors.black};
      position: relative;
      padding: 1.75rem 1.5rem;
      border-radius: 4px;

      span{
        position:absolute;
        top: -0.5rem;
        left: -0.5rem;

        background: ${theme.colors.red};
        width: 2rem;
        height: 2rem;
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;

        font-weight: 500;
        font-size: 1.125rem;
      }
      h2 {
        margin-bottom: 0.75rem;
        font-weight: 700;
        font-size: 1.5;
        text-align: center;
      }
      img {
        object-fit: cover;
        width: 100%;
        height: 11.25rem;
        border-radius: 4px;
        margin-bottom: 0.375rem;
      }
      p {
        font-size: 0.875rem;
      }
      div{
        margin-top: auto: 0.875rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        strong{
            font-size: 2rem;
            font-weight:500;
        }
        button{
            background-color: ${theme.colors.red};
            width: 3rem;
            height: 3rem;
            border: none;
            border-radius:50%;
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                stroke: ${theme.colors.white};
                width: 2rem;
                height: 2rem;
            }

            &:hover{
                background: ${darken(0.1, '#AA2424')};
            }
        }
      }
    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  `}
`
