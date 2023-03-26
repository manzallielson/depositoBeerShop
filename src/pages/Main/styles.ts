import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;

  > section {
    flex: 1;
    width: 100%;
    height: 100vh;
    overflow-y: auto;
    padding: 1rem 1.875rem;
    img {
      width: 10rem;
      margin-bottom: 1rem;
    }
    @media (max-width: 792px) {
      display: flex;
      flex-direction: column;
      padding-bottom: 8rem;
      img {
        align-self: center;
      }
    }
  }
`

export const Logo = styled.img`
  color: blue;
  * {
    background-color: blue;
  }
  @keyframes teste {
    0% {
      transform: scale(0) rotate(0deg);
      fill: yellow;
    }
    100% {
      transform: scale(1) rotate(360deg);
    }
  }
  animation: teste 5s cubic-bezier(0.075, 0.82, 0.165, 1);
`
