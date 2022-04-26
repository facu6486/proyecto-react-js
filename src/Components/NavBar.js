import { AppBar } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { Wrapper, Logo, MenuItem, Left, Center, Right } from './styledComponents';

const NavBar = () => {
    return (
        <AppBar position="relative" color= "">
            <Wrapper>
                <Left>
                    <Link to='/' style={{textDecoration: "none", color: "coral"}}><Logo>BRD</Logo></Link>
                </Left>
                <Center>
                    <Link to='/idCategory/Hamburguesas' style={{textDecoration: "none", color: "coral"}}><MenuItem>HAMBURGUESAS</MenuItem></Link>
                    <Link to='/categoryId/Acompañamientos' style={{textDecoration: "none", color: "coral"}}><MenuItem>ACOMPAÑAMIENTOS</MenuItem></Link>
                </Center>
                <Right>
                    <MenuItem><Link to='/cart' style={{textDecoration: "none", color: "coral"}}><CartWidget /></Link></MenuItem>
                </Right>
            </Wrapper>
        </AppBar>
    );
}

export default NavBar;