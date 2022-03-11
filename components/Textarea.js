import React, { useState } from 'react'
import styled from 'styled-components'
import { Field } from 'formik'

const StyledInput = styled.textarea`
    width: 100%;
    font-family: 'Oxygen', sans-serif;
    margin: 10px 0;
    padding: 12px 0;
    font-size: 20px;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #88888833;
    color: ${props => props.theme.headerGrey};
    box-sizing: border-box;
    resize: none;
    :focus {
        outline: none;
        border-bottom: 1px solid ${props => props.theme.darkOrange};
    }
    ::placeholder {
        font-family: 'Oxygen', sans-serif;
        font-size: 18px;
        font-weight: 400;
        color: #888888aa;
    }
    :focus::placeholder {
        color: transparent;
    }
`
const Label = styled.label`
    position: relative;
    font-size: 14px;
    width: 100%;
    display: block;
    text-align: left;
    color: ${props => props.theme.darkOrange};
    background-color: white;
    top: ${props => props.visible ? "18px" : "24px"};
    visibility: ${props => props.visible ? "visible" : "hidden"};
    opacity: ${props => props.visible ? 1 : 0};
    transition: all 0.25s ease-in-out;
`

const Textarea = props => {
    const [focus, setFocus] = useState(false) 

    return (
        <Field {...props}>
            {({ meta }) => (
                <>
                    <Label
                        htmlFor={props.name}
                        error={meta.error}
                        visible={ meta.value.length > 0 || focus || meta.error}
                    >
                        {meta.error || props.label}
                    </Label>
                    <StyledInput onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} rows={3} {...props} />
                </>
            )}
        </Field>
    )
}

export default Textarea