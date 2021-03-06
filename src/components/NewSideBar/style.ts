import styled from 'styled-components'

export interface Props {
  fixed?: boolean
  max?: string
}

export const Size = styled.div`
  margin: 0 auto;
  max-width: ${(props: Props) => props.max};
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Overlay = styled.div`
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.background};
  opacity: 0.5;
  transition: 350ms;
`
export const Container = styled.div`
  position: ${(props: Props) => props.fixed && 'fixed'};
  top: ${(props: Props) => props.fixed && '0'};
  left: ${(props: Props) => props.fixed && '0'};
  width: ${(props: Props) => props.fixed && '100%'};
  z-index: ${(props: Props) => props.fixed && '999'};
  .mobile {
    display: block;
  }

  .desktop {
    display: none;
  }

  .navbar {
    background-color: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;

    .boxImg {
      text-align: center;
      color: white;
      h2 {
        margin-left: 2rem;
        cursor: pointer;
        transition: 0.5s;
        color: white;
      }
    }
  }

  .menuBars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
    color: white;
    border: 0;
    padding: 1rem;
    cursor: pointer;
    transition: 350ms;
  }

  .navMenuActive {
    background-color: ${props => props.theme.colors.primary};
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 999;
    top: 0;
    right: 0;
    transition: 350ms;
  }
  .navMenuDisable {
    background-color: ${props => props.theme.colors.primary};
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    z-index: 999;
    top: 0;
    right: -100%;
    transition: 350ms;
  }

  .navText {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 0 8px 16px;
    list-style: none;
    height: 60px;
  }

  .navText button {
    border: 0;
    text-decoration: none;
    cursor: pointer;
    color: #f5f5f5;
    background-color: ${props => props.theme.colors.primary};
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .navText button:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.primaryHover};
  }

  .navText a {
    border: 0;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: #f5f5f5;
    background-color: ${props => props.theme.colors.primary};
    font-size: 18px;
    justify-content: center;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .navText a:hover {
    cursor: pointer;
    background-color: ${props => props.theme.colors.primaryHover};
  }
  .navMenuItems {
    width: 100%;
  }

  .navBarToogle {
    background-color: ${props => props.theme.colors.primary};
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2rem;
  }

  .navText button span {
    margin-left: 16px;
    cursor: pointer;
  }

  .container {
    background: #e5e5e5;
    border-right: 2px solid ${props => props.theme.colors.primary};
    height: 100vh;
    width: 100%;
    max-width: 300px;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    align-content: center;

    .boxImg {
      text-align: center;

      h2 {
        padding: 1rem;
        cursor: pointer;
        margin-top: 1rem;
        transition: 0.5s;

        span {
          opacity: 0;
          position: relative;
          transition: 0.7s;
          &:nth-last-of-type(1) {
            left: -200px;
          }
          &:nth-last-of-type(2) {
            left: 200px;
          }
        }

        &:hover {
          span {
            left: 0px;
            opacity: 1;
            color: ${props => props.theme.colors.primaryHover};
          }
          transform: scale(1.5);
        }
      }
      img {
        width: 100%;
        max-width: 200px;
        border-radius: 50%;
      }
    }

    .boxText {
      text-align: center;
    }

    .socialMedia {
      padding: 1rem;
      a {
        text-decoration: none;
        font-size: 2.5rem;
        margin: 1rem;
        transition: color 0.2s;

        &:hover {
          color: ${props => props.theme.colors.primaryHover};
        }
      }
    }

    button {
      width: 70px;
      padding: 0.5rem;
      margin-right: 2px;
      background-color: ${props => props.theme.colors.primary};
      border: 0;
      transition: 0.2s;

      color: white;
      font-weight: bold;

      &:hover {
        background-color: ${props => props.theme.colors.primaryHover};
      }
    }
  }

  .navigationButtons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
  }
  @media (max-width: 798px) {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  @media (max-width: 350px) {
    .navbar {
      .boxImg {
        h2 {
          margin-left: 0.2rem;
        }
      }
    }
  }
`
