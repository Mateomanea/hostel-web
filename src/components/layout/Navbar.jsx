export default function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar__content">
                <span className="navbar__logo">Hostel</span>

                <nav className="navbar__nav">
                    <a href="#rooms">Habitaciones</a>
                    <a href="#services">Servicios</a>
                    <a href="#contact">Contacto</a>
                </nav>
            </div>
        </header>
    )
}