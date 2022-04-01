import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <header>
            <nav>
                <ul class="listaNav">
                    {/* <li><a href="inicio.html">Inicio</a></li> */}
                    <li><a href="#">Hamburguesas</a></li>
                    <li><a href="#">Bebidas</a></li>
                    <h1>BRD BURGER</h1>
                    {/* <a href="#"><img className="logoNav" src="img/brd2.png" alt=""/></a> */}
                    <li><a href="#">Contacto</a></li>
                    <li><a href="#">Novedades</a></li>
                    <CartWidget />
                </ul>
            </nav>
        </header>
    );
}

export default Navbar
