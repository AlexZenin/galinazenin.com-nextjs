import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks
} from 'body-scroll-lock';
import Burger from './Burger'

const Header = styled.header`
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    @media (min-width: 769px) {
        display: none;
    }
`
const BurgerPosition = styled.div`
    padding: 0;
    margin: 0 0 0 auto;
`
const Main = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1500px;
    margin: 20px auto;
    padding: 0 20px;
    position: relative;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.headerGrey};
    font-size: 14px;
`;
const Dropdown = styled.div`
    height: ${props => props.open ? "100vh" : 0 };
    width: 100vw;
    position: fixed;
    overflow: hidden;
    top: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    background-color: ${props => props.theme.darkOrange};
`
const List = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 60px 30px 20px;
    box-sizing: border-box;
`
const He1 = styled.h1`
    color: white;
`

const Underlay = ({ open }) => (
    <Dropdown id="dropdown" open={open} >
        <List>
            <StyledLink to="/about"><He1> About </He1></StyledLink>
            <StyledLink to="/presentations"><He1> Presentations </He1></StyledLink>
            <StyledLink to="/business"><He1> Business </He1></StyledLink>
            <StyledLink to="/media"><He1> Media </He1></StyledLink>
            <StyledLink to="/contact"><He1> Contact </He1></StyledLink>
        </List>
    </Dropdown>
)

class MobileHeader extends Component {
    targetElement = null
    state = { open: false }

    componentDidMount() {
        this.targetElement = document.querySelector('#dropdown');
    }

    showTargetElement = () => {
        this.setState({ open: true })
        disableBodyScroll(this.targetElement)
    };

    hideTargetElement = () => {
        this.setState({ open: false })
        enableBodyScroll(this.targetElement)
    }

    toggleMenu = () => { 
        this.state.open ? this.hideTargetElement() : this.showTargetElement()
    }

    componentWillUnmount() { clearAllBodyScrollLocks() }

    render() {
        return (
            <Header>
                <Underlay open={this.state.open} />
                <Main>
                    <BurgerPosition>
                        <Burger 
                            toggle={this.toggleMenu} 
                            expanded={this.state.open} 
                            color="black" 
                            expandedColor="white" 
                        />
                    </BurgerPosition>
                </Main>
            </Header>
        )
    }
}

export default MobileHeader