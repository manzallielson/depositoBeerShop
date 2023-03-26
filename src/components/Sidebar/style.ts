import styled, { css } from 'styled-components'

interface ContainerProps {
  isMenuOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
  ${({ theme, isMenuOpen }) => css`
    background-color: ${theme.colors.red};
    width: ${isMenuOpen === true ? '16.3rem' : '7.75rem'};
    transition: width 0.3s;
    padding: 2rem 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100vh;

    button {
      background: none;
      width: 100%;
      border: none;
    }
    nav {
      flex: 1;
      width: 100%;
      height: 100%;
      ul {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2.5rem;
      }
      li {
        a {
          width: fit-content;
          position: relative;
          padding: 0 1.875rem;
          display: flex;
          align-items: center;
          gap: 2rem;
          text-decoration: none;
          svg {
            fill: ${theme.colors.white};
            width: 4rem;
            height: 4rem;
            transition: fill 0.3s;
          }
          span {
            font-size: 1rem;
            font-weight: 500;
            transition: color 0.3s;
          }
          &.active {
            &::after {
              content: '';
              position: absolute;
              left: 0;
              top: 50%;
              bottom: 0;
              transform: translateY(-50%);

              background-color: ${theme.colors.yellow};
              width: 5px;
              height: calc(100% + 10px);
              border-radius: 0 5px 5px 0;
            }
            svg {
              fill: ${theme.colors.yellow};
            }
            span {
              color: ${theme.colors.yellow};
            }
          }
        }
      }
    }
    @media (max-width: 720px) {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 3;
      width: 100%;
      height: 5rem;
      overflow-y: auto;
      padding: 0;
      button {
        display: none;
      }

      nav {
        height: 100%;
        ul {
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          padding: 0 25px;
        }
        li {
          a {
            flex-direction: column;
            padding: 0rem;
            svg {
              width: 3.25rem;
              height: 3.25rem;
            }
            span {
              display: none;
            }
            &.active {
              &::after {
                display: none;
              }
            }
          }
        }
      }
    }
  `}
`
