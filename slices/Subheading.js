import React from 'react'
import { Subheading, SubheadingOrange } from '../components/Headings'
import { SliceLayoutBackground } from '../components/Layout/SliceLayout'

const SubheadingComponent = ({ data }) => {
    let alignment = data.primary.alignment || null;
    return (
        <SliceLayoutBackground color={data.primary.background1}>
            { data.primary.color === "Orange" 
            ? ( 
                <SubheadingOrange align={alignment}> 
                    { data.primary.heading1} 
                    </SubheadingOrange>
            ) : ( 
                <Subheading align={alignment}> 
                    { data.primary.heading1} 
                </Subheading> 
            )
            }
        </SliceLayoutBackground>
)
}

export default SubheadingComponent 