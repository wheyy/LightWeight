import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import SiteNav from "../templates/SiteNav";

export default function LandingPage() {

  return (
    <>
    <body style={{
        backgroundImage:`url('https://wallpapers.com/images/hd/workout-background-5440-x-3310-uz1z48onkrf4kis6.jpg')`,
        backgroundSize: `cover`
    }}>
        <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-light">
        <Row>
            <Col className="text-center">
            <h1 className="lightweight">LIGHTWEIGHT</h1>
            <Button href="/login" className="mx-2 btn btn-primary">Login</Button>
            <Button href="/signup" className="mx-2 btn btn-primary">Sign Up</Button>
            </Col>
        </Row>
        </Container>
    </body>
    </>
  );
}



