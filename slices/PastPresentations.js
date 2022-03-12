import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 70px;
`
const YearContainer = styled.div`
  display: flex;
  position: relative;
  padding: 0 20px;
  @media (max-width: 1600px) {
    flex-wrap: wrap;
  }
`
const Year = styled.h1`
  color: ${props => props.theme.lightOrange};
  font-size: 2rem;
  margin-top: 40px;
  font-weight: 800;
  @media (min-width: 1600px){
    position: absolute;
    left: -150px;
  }
`
const Presentations = styled.div`
  padding: 20px 0;
  display: grid;
  width: 100%;
  grid-template-columns: 47% 47%;
  grid-column-gap: 6%;
  border-top: 1px solid #D3D3D3;
  @media (max-width: 800px) {
      display: block;
  }
`
const Presentation = styled.div`
  width: max-content;
  max-width: 100%;
  padding: 0;
  box-sizing: border-box;
`
const Subheading = styled.h5`
  color: ${props => props.theme.articleSubheadingGrey};
  text-transform: uppercase;
  max-width: 100%;
  font-weight: 500;
  margin: 20px 0 0;
`
const Value = styled.p`
  margin: 10px 0;
  max-width: 100%;
`

const YearSection = (year, items) => (
    <YearContainer>
        <Year>
            {year}
        </Year>
        <Presentations>
            {items.map(item => (
                <Presentation>
                    <Subheading>{item.subheading}</Subheading>
                    <Value>{item.value}</Value>
                </Presentation>
            ))}
        </Presentations>
    </YearContainer>
)

const PastPresentations = ({ data }) => {
    // Reorganise data to group presentations by year
    let pastPresentations = data.items.reduce(( presentations, item) => {
        presentations[item.year] = presentations[item.year] || []
        presentations[item.year].push({
            subheading: item.subheading,
            value: item.value
        })
        return presentations
    }, {})

    return (
        <Section id="PastPresentations">
            {Object.keys(pastPresentations).sort().reverse().map(year => {
                return YearSection(year, pastPresentations[year])
            })}
        </Section>
    )
}

export default PastPresentations