import styled from 'styled-components'

export const Container = styled.div`
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }

  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
export const SliderBox = styled.div`
  text-align: center;
  background: ${props => props.theme.colors.background};
  padding: 200px 0;
  font-size: 30px;
`
