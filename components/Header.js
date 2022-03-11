import React from "react"
import Link from "next/link"
import styled from "styled-components"

const Header = styled.header`
    width: 100%;
    @media (max-width: 768px) {
        visibility: hidden;
        overflow: hidden;
    }
`
const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
    margin: 30px auto;
    padding: 0 40px;
`
const Li = styled.li`
    list-style-type: none;
    margin-right: 30px;
`
const Right = styled.div`
    display: flex;
`
const StyledLink = styled.a`
    position: relative;
    text-decoration: none;
    color: ${props => props.theme.headerGrey};
    font-size: 14px;
    :hover div {
        bottom: -25px;
        background-color: ${({ theme }) => theme.lightOrange};
    }
`
const Dot = styled.div`
    transition: all 0.2s ease-in-out;
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    left: calc(50% - 5px);
    bottom: -15px;
    background-color: transparent;
`

function ProductHeader() {
    return (
        <Header>
            <Ul>
                <Li><Link href="/" passHref><StyledLink> Galina Zenin </StyledLink></Link></Li>
                <Right>
                    <Li><Link href="/about" passHref><StyledLink> About <Dot /></StyledLink></Link></Li>
                    <Li><Link href="/presentations" passHref><StyledLink> Presentations <Dot /></StyledLink></Link></Li>
                    <Li><Link href="/business" passHref><StyledLink> Business <Dot /></StyledLink></Link></Li>
                    <Li><Link href="/media" passHref><StyledLink> Media <Dot /></StyledLink></Link></Li>
                    <Li><Link href="/contact" passHref><StyledLink> Contact <Dot /></StyledLink></Link></Li>
                </Right>
            </Ul>
        </Header>
    )
}

export default ProductHeader