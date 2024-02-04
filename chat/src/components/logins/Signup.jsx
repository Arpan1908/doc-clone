import React,{useState} from "react";
import {
  Button,
  ButtonGroup,
  FormControl,
  Heading,
  VStack,
  Text
} from "@chakra-ui/react";

import { Form, Formik } from "formik";
import { useNavigate } from "react-router";
import * as Yup from "yup";
import TextField from "./TextField";
import {AContext} from "../Context";
import { useContext } from "react";

const Signup = () => {
  const {setUser} = useContext(AContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string()
          .required("Username required!")
          .min(6, "Username too short!")
          .max(28, "Username too long!"),
        password: Yup.string()
          .required("Password required!")
          .min(6, "Password too short!")
          .max(28, "Password too long!"),
      })}
      onSubmit={(values, actions) => {
        const ele = { ...values };
        actions.resetForm();
        fetch("http://localhost:8000/auth/signup", {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(ele),
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Signup failed");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setUser({...data});
            navigate("/home");

          })
          .catch((error) => {
            console.error("Error during signup:", error);
            // Handle the error or display a message to the user
          });
      }}
    >
      <VStack
        as={Form}
        w={{ base: "90%", md: "500px" }}
        m="auto"
        justify="center"
        h="100vh"
        spacing="1rem"
      >
        <Heading>Sign Up</Heading>
        <Text color="red.500" as="p">
          {error}
        </Text>
        <TextField
          name="Email"
          placeholder="Enter email"
          autoComplete="on"
          label="Email"
        />

        <TextField
          name="username"
          placeholder="Enter username"
          autoComplete="off"
          label="Username"
        />

        <TextField
          name="password"
          placeholder="Enter password"
          autoComplete="off"
          label="Password"
          type="password"
        />

        <ButtonGroup pt="1rem">
          <Button colorScheme="blue" variant="outline" type="submit">
            Sign Up
          </Button>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </ButtonGroup>
      </VStack>
    </Formik>
  );
};

export default Signup;
