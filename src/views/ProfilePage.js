import React, { useEffect, useState } from "react";
import { Button, Container, Form, Image, Row, Col } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom" ;
import { auth, db, storage } from "../firebase";
import SiteNav from "../templates/SiteNav";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { updateEmail, updatePassword, updateProfile } from "firebase/auth";


export default function ProfilePage() {
    const [user,loading] = useAuthState(auth);
    const [displayName, setDisplayName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    // const [image, setImage] = useState("");
    // const [imageName, setImageName] = useState("");
    // const [previewImage, setPreviewImage] = useState(
    // "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
    // );

    async function updateUser() {
    // const imageReference = ref(storage, `images/${image.name}`);
    // const response = await uploadBytes(imageReference, image);
    // const imageUrl = await getDownloadURL(response.ref);
        console.log(user);
        console.log(displayName, email, password)
        await updateProfile(user, {
        displayName, photoURL: "https://example.com/jane-q-user/profile.jpg"
        }).then(() => {
        // Profile updated!
        // ...
        }).catch((error) => {
        // An error occurred
        // ...
        });
        await updateEmail(user, email).then(() => {
            // Email updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
        await updatePassword(user, password).then(() => {
        // Update successful.
        }).catch((error) => {
        // An error ocurred
        // ...
        });
        console.log(user);
    }

    useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    if (user){
        if (user.displayName){
            setDisplayName(user.displayName)
        }
        if (user.email){
            setEmail(user.email)
        }
    }
    }, [user, loading]);

    // if (user) {
    //     if (user.displayName) setDisplayName(user.displayName);
        
    // }

    return (
    <>
        <SiteNav/>
        <Container>
        <Col>
        <h1 style={{ marginBlock: "1rem" }}>Profile Page</h1>
        <Form>
        {/* TODO: If have time */}
            {/* <Form.Group className="mb-3" controlId="image">
            <Form.Label>Profile Image</Form.Label>
            <Form.Control
                type="file"
                onChange={(e) => {
                const imageFile = e.target.files[0];
                const previewImage = URL.createObjectURL(imageFile);
                setImage(imageFile);
                setPreviewImage(previewImage);
                setImageName(imageFile.name)
                }}
            />
            <Form.Text className="text-muted">
                Make sure the file has a image type at the end: jpg, jpeg, png.
            </Form.Text>
            </Form.Group>
            <Image
            src={previewImage}
            style={{
                objectFit: "cover",
                width: "10rem",
                height: "10rem",
            }}
            /> <br/><br/> */} 
            
            <Row>
            <Form.Group className="mb-3 col-sm-12" controlId="displayName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter your name"
                value={displayName}
                onChange={(text) => setDisplayName(text.target.value)}
                />
            </Form.Group>
            </Row>
            <Row>
            <Form.Group className="mb-3 col-sm-6" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                type="text"
                placeholder="Enter your Email"
                value={email}
                onChange={(text) => setEmail(text.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3 col-sm-6" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(text) => setPassword(text.target.value)}
                />
            </Form.Group>
            
            </Row>
            <Button variant="primary" onClick={async (e) => updateUser()}>
            Submit
            </Button>
        </Form>
        </Col>
            

            
        </Container>
    </>
    );
}
