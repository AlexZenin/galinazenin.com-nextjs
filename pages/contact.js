import { createClient } from '../prismicio'
import React from "react"
import styled from 'styled-components'
import { PrismicRichText } from '@prismicio/react'
import Layout from "../components/Layout/Layout"
import Input from '../components/Input'
import axios from 'axios'
import { Formik, Form } from 'formik';
// TODO: Check if this works
import { Spinner8 } from '@styled-icons/icomoon/Spinner8'
import Textarea from '../components/Textarea'
import { Facebook } from '@styled-icons/boxicons-logos/Facebook'
import { Youtube } from '@styled-icons/boxicons-logos/Youtube';
import { Linkedin } from '@styled-icons/boxicons-logos/Linkedin';

const AWSURL = "https://tp51b2v39i.execute-api.ap-southeast-2.amazonaws.com/contact"
const FORM_SUCCESS_MESSAGE = "Done"

const Heading = styled.h1`
    color: ${props => props.theme.darkOrange};
    font-size: 2.5rem;
    margin: 70px 0 0;
`
const Section = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 40px;
    padding: 0 20px;
    box-sizing: border-box;
`
const StyledButton = styled.button`
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    width: 100%;
    color: ${props => props.inverted ? props.theme.darkOrange : "white"
    };
    background-color: ${props => props.success
        ? "#3EC153"
        : props.inverted
            ? "transparent"
            : props.theme.darkOrange
    };
    border: solid 2px ${props => props.success ? "#3EC153" : props.theme.darkOrange};
    padding: 12px 28px;
    margin: 30px 0;
    border-radius: 4px;
    transition: all 0.25s linear;
    :hover {
        cursor: ${props => props.disabled ? "default" : "pointer"};
    }
`
const Spinner = styled(Spinner8)`
    height: 19px;
    width: 19px;
    animation: spin 1s linear infinite;
    @keyframes spin {
        100% {
            transform:rotate(360deg);
        }
    }
`
const ButtonInner = styled.div`
    display: grid;
    height: 20px;
    align-items: center;
`
const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(2, 45%);
  grid-template-rows: auto;
  align-items: center;
  grid-column-gap: 10%;
  @media (max-width: 1024px) {
      display: block;
  }
`
const Aside = styled.div`
  width: 100%;
`
const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 80vh;
  padding: 50px 0;
  margin: 0 auto;
`
const Div = styled.div`
  font-size: 20px;
  font-weight: 300;
  padding: 40px 0 0;
`
const SocialsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  & > * {
    margin: 0 20px;
  }
`
const Social = styled.a`
    color: ${props => props.theme.darkOrange};
    display: grid;
    place-items: center;
    height: 40px;
    width: 40px;
    overflow: hidden;
    border-radius: 50%;
    :hover {
        box-shadow: 0px 0px 0px 5px ${props => props.theme.darkOrange};
        color: white;
        background-color: ${props => props.theme.darkOrange};
    }
`
const BorderBox = styled.div`
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
`
const StyledFacebook = styled(Facebook)`
`
const StyledYoutube = styled(Youtube)`
`
const StyledLinkedin = styled(Linkedin)`
`

const CTAButton = props => (
    <StyledButton
        type="submit"
        success={props.status === "Success"}
        disabled={props.disabled}
    >
        {
            props.loading
                ? <Spinner />
                : (<ButtonInner> {props.status === "Success"
                    ? FORM_SUCCESS_MESSAGE
                    : props.text}
                </ButtonInner>)
        }
    </StyledButton>
)

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Email required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    return errors;
};

const Socials = () => (
    <SocialsContainer>
        <BorderBox>
            <Social
                href="https://facebook.com/galina.zenin"
                target="_blank">
                <StyledFacebook size="25px" />
            </Social>
        </BorderBox>
        <BorderBox>
            <Social
                href="https://www.linkedin.com/in/galinazenin/"
                target="_blank">
                <StyledLinkedin size="25px" />
            </Social>
        </BorderBox>
        <BorderBox>
            <Social
                href="https://www.youtube.com/user/Bonkersthemonkey"
                target="_blank">
                <StyledYoutube size="25px" />
            </Social>
        </BorderBox>
    </SocialsContainer>
)

const EmailForm = () => (
    <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validate={validate}
        validateOnChange={false}
        onSubmit={(values, { setSubmitting, setStatus }) => {
            const body = JSON.stringify({ name: values.name, email: values.email, message: values.message });
            const config = {
                headers: {
                    "Content-type": "application/json"
                },
                timeout: 10000
            }
            axios.post(AWSURL, body, config)
                .then(res => {
                    setStatus("Success")
                    setSubmitting(false)
                })
                .catch(err => console.log(err))
        }}
    >
        {props => (
            <Form novalidate>
                <Input
                    name="name"
                    type="text"
                    placeholder="Name"
                    autoComplete="off"
                    disabled={props.isSubmitting}
                    onChange={e => {
                        props.setStatus(false)
                        props.setFieldError('email', null)
                        props.handleChange(e)
                    }}
                    label="Name"
                />
                <Input
                    name="email"
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    disabled={props.isSubmitting}
                    onChange={e => {
                        props.setStatus(false)
                        props.setFieldError('name', null)
                        props.handleChange(e)
                    }}
                    label="Email"
                />
                <Textarea
                    name="message"
                    type="message"
                    placeholder="Message"
                    disabled={props.isSubmitting}
                    onChange={e => {
                        props.setStatus(false)
                        props.setFieldError('message', null)
                        props.handleChange(e)
                    }}
                    label="Message"
                />
                <CTAButton
                    text="Get in touch"
                    loading={props.isSubmitting}
                    status={props.status}
                    disabled={
                        props.isSubmitting
                        || props.status === "Success"
                    }
                />
            </Form>
        )}
    </Formik>
)
function Contact({ page }) {
    let { image, heading, body } = page.data
    return (
        <>
            <Layout>
                <Section>
                    <Heading>{heading}</Heading>
                    <Div>
                        <PrismicRichText field={body} />
                    </Div>
                    <Grid>
                        <Aside>
                            <Img src={image.url} alt={image.alt} />
                        </Aside>
                        <div>
                            <EmailForm />
                            <Socials />
                        </div>
                    </Grid>
                </Section>
            </Layout>
        </>
)
}

export default Contact


export async function getStaticProps({ previewData }) {
    const client = createClient({ previewData })

    const page = await client.getSingle('contact')

    return {
        props: { page },
    }
}