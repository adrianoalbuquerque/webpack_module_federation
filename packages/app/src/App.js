import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
    Navbar,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Container,
    Row,
    Col
} from 'reactstrap';
import './app.css';

import VueWrapper from './VueWrapper';

const App = () => {
    const HomePage = React.lazy(() => import("HomeApp/HomeApp"));
    const ContactPage = React.lazy(() => import("ContactApp/ContactApp"));
    const VuePage = React.lazy(() => import("VueApp/VueApp"));

    // Estado para controlar o menu colapsado
    const [isOpen, setIsOpen] = useState(false);

    // Função para alternar o estado de isOpen
    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const currentYear = new Date().getFullYear();

    return (
        <Router>
            <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
                {/* Navbar Responsiva */}
                <Navbar color="light" light expand="md">
                    {/* Logo */}
                    <Link to="/" className="navbar-brand">
                        Module Federation
                    </Link>

                    {/* Botão de Menu para Mobile */}
                    <NavbarToggler onClick={toggle} />

                    {/* Itens do Menu */}
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ms-auto" navbar>
                            <NavItem>
                                <Link to="/" className="nav-link">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/vue" className="nav-link">Vue.js</Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/contact" className="nav-link">Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>

                {/* Conteúdo Principal */}
                <main className="flex-grow-1">
                    <Routes>
                        <Route path="/" element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <HomePage />
                            </Suspense>
                        } />
                        <Route path="/" element={
                            <Suspense fallback={<div>Loading...</div>}>
                                {/* <VuePage /> */}
                                <VueWrapper />
                            </Suspense>
                        } />
                        <Route path="/contact" element={
                            <Suspense fallback={<div>Loading...</div>}>
                                <ContactPage />
                            </Suspense>
                        } />
                    </Routes>
                </main>

                {/* Footer */}
                <footer className="bg-light py-3">
                    <Container>
                        <Row>
                            <Col md="12" sm="12" className="text-center text-md-center">
                                <h6>Adrinao Albuquerque</h6>
                                <p>&copy; {currentYear} Todos os direitos reservados.</p>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </div>
        </Router>
    );
}

export default App;
