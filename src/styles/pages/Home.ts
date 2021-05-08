import styled from 'styled-components'

export interface Props {
  fixed?: boolean
  max?: string
}

export const Size = styled.div`
  margin: 0 auto;
  max-width: ${(props: Props) => props.max};
  width: 100%;
`

export const Container = styled.div`
  display: block;
  margin: 0 2%;
  h1 {
    font-size: 22px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
export interface SliderBoxProps {
  image?: string
}
export const SliderBox = styled.div`
  text-align: center;
  background-image: url(${(props: SliderBoxProps) => props.image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  width: 100%;
  height: 400px;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Button = styled.div`
  width: 200px;
  height: 40px;
  border: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  &:hover {
    background: ${props => props.theme.colors.primaryHover};
  }
`

export const BoxStore = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    margin: 20px;
  }
  img {
    width: 250px;
    height: 250px;
  }
  button {
    width: 100%;
  }
`
