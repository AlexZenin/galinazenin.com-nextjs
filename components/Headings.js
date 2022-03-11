import styled from 'styled-components'

export const Heading = styled.div`
  max-width: 850px;
  h1 {
    font-size: 3rem;
    color: #EEB67F;
    font-weight: 800;
  }
  h1 > span.darker {
    color: #EC7F00;
  }
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
  @media (max-width: 1024px) {
    text-align: center;
  }
`

export const Subheading = styled.h5`
    text-transform: uppercase;
    max-width: 700px;
    margin: 0 auto;
    padding: 60px 0 30px;
    text-align: ${props => (props.align || "center")};
    color: ${props => props.theme.logoGrey};
`

export const SubheadingOrange = styled(Subheading)`
    color: ${props => props.theme.darkOrange};
`