import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar color="primary" position="static">
            <Wrapper>
                <Left>
                    <Logo>BRD</Logo>
                </Left>
                <Center>
                    <Link to='/categoryId/Hamburguesas' style={{textDecoration: "none", color: "white"}}><MenuItem>HAMBURGUESAS</MenuItem></Link>
                    <Link to='/categoryId/Acompañamientos' style={{textDecoration: "none", color: "white"}}><MenuItem>ACOMPAÑAMIENTOS</MenuItem></Link>
                </Center>
                <Right>
                    <MenuItem><CartWidget /></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;