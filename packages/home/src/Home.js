import React from 'react';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, Button } from "reactstrap";

const Home = () => {
    const openInNewTab = () => {
        window.open(
            "https://medium.com/@mariannematos/descomplicando-micro-frontends-com-module-federation-134163272089",
            "_blank",
            "noopener,noreferrer" // Por segurança, evita que a nova aba tenha acesso à origem
        );
    };

    return (
        <div>
            <Container className="py-5">
                <div className="text-center mb-5">
                    <h1>Bem-vindo ao Mundo do Module Federation</h1>
                    <p className="text-muted">
                        Crie aplicações modernas e modulares com facilidade!
                    </p>
                </div>

                <Row className="align-items-center">
                    <Col md="6">
                        <Card className="border-0">
                            <CardBody>
                                <CardTitle tag="h2">O que é Module Federation?</CardTitle>
                                <CardText>
                                    Module Federation é um recurso do Webpack 5 que permite compartilhar
                                    e carregar módulos remotamente entre diferentes aplicações. Isso facilita a
                                    construção de arquiteturas microfrontend, onde partes de um aplicativo
                                    podem ser desenvolvidas e implantadas de forma independente.
                                </CardText>
                                <CardText>
                                    Com o Module Federation, você pode criar aplicações mais modulares,
                                    reutilizáveis e escaláveis, reduzindo o tempo de desenvolvimento e melhorando a experiência
                                    do usuário.
                                </CardText>
                                <button className="btn btn-primary" onClick={openInNewTab}>Saiba mais</button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md="6" className="text-center">
                        <img
                            src="https://landy-web.netlify.app/img/svg/developer.svg"
                            alt="Module Federation Illustration"
                            className="img-fluid rounded"
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Home;