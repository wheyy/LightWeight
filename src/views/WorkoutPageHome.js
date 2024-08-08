import { useEffect, useState } from "react";
import { Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import { Form, Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import SiteNav from "../templates/SiteNav";
import Chat from "../chat";

export default function WorkoutPageHome() {

  const [message,setMessage] = useState("Please generate me a beginner workout set that targets my tricep chest and abs")
  const [reply,setReply] = useState("")
  const [difficulty,setDifficulty] = useState("")
  return (
    <>
      <SiteNav/>
      <Container>
        <p>This isnt working</p>
      {/* <Form>
      {['checkbox', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="1"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            disabled
            label="3 (disabled)"
            type={type}
            id={`inline-${type}-3`}
          />
        </div>
      ))}
      </Form> */}
      </Container>
    </>
  );
}