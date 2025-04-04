import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Alert,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/SignInForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import signin from "../../assets/signin.png";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { setTokenTimestamp } from "../../utils/utils";
import { UseRedirectUser } from "../../hooks/UseRedirectUser";

const SignInForm = () => {
  const setCurrentUser = useSetCurrentUser();
  UseRedirectUser("signedIn");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      setTokenTimestamp(data);
      // console.log('Token received:', data.key);
      console.log("Login response data:", data); // Log full response
      history.goBack();
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      setErrors(error.response?.data);
    }
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  
  //   try {
  //     const response = await axios.post('https://social-media-api-25-e478cbb9dc3f.herokuapp.com/dj-rest-auth/login/', {
  //       username: username,
  //       password: password,
  //     });
      
      // const token = response.data.key;
      // console.log('Token received:', token);
  
  //     // Store the token in localStorage
  //     localStorage.setItem('authToken', token);
  
  //     // Set the Authorization header globally for subsequent requests
  //     axios.defaults.headers.Authorization = `Bearer ${token}`;

  //     const user = response.data.user;
  //     setCurrentUser(user);
  //     console.log(user)
  
  //     // Redirect user to the home page (or any other route you want)
  //     history.goBack();  // Use the desired route after login
  
  //   } catch (error) {
  //     console.error('Login Error:', error.response.data);
  //   }
  // };
  

  return (
    <Row className={styles.Row}>
      <Col className="my-auto" md={6}>
        <Container className={styles.Form}>
          <h1 className={styles.Heading}>sign in to your account</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className={styles.FormFields} controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={styles.FormTextBox}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert
                className={appStyles.AlertMessages}
                key={idx}
                variant="danger"
              >
                {message}
              </Alert>
            ))}
            <Form.Group
              className={styles.FormFields}
              controlId="formBasicPassword"
            >
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={styles.FormTextBox}
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password?.map((message, idx) => (
              <Alert
                className={appStyles.AlertMessages}
                key={idx}
                variant="danger"
              >
                {message}
              </Alert>
            ))}
            <Button className={btnStyles.Button} type="submit">
              Sign In
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert
                className={`${appStyles.AlertMessages} mt-3`}
                key={idx}
                variant="danger"
              >
                {message}
              </Alert>
            ))}
          </Form>
          <div className={`${styles.SignInText} text-muted`}>
            Not signed up yet?
            <span>
              <Link className={styles.Link} to="/create/account">
                {" "}
                Create an account here
              </Link>
            </span>
          </div>
        </Container>
      </Col>
      <Col
        className={`${styles.SignInImageCol} my-auto d-none d-md-block`}
        md={6}
      >
        <Image className={styles.FormImage} src={signin} alt="signin-image" />
      </Col>
    </Row>
  );
};

export default SignInForm;
