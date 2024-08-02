"use client";

import Link from "next/link";
import styles from "./register.module.css";
import { useState, useRef, useEffect } from "react";

const Register = () => {
  const inputRef = useRef(null);

  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    age: 0,
    email: "",
    password: "",
    rePassword: "",
  });

  const [error, setError] = useState("");

  const validateUser = () => {
    if (userData.firstname.length == 0) {
      return setError("You must enter an username");
    } else if (userData.lastname.length == 0) {
      return setError("You must enter a lastname");
    } else if (userData.age == 0) {
      return setError("You must enter an age between 14 - 100");
    } else if (parseInt(userData.age) < 14 || parseInt(userData.age) > 100) {
      return setError("User must be older than 14 and younger than 100");
    } else if (!userData.email.includes("@")) {
      return setError("You must enter a valid email");
    } else if (userData.password.length == 0) {
      return setError("You must enter a password");
    } else if (userData.rePassword.length == 0) {
      return setError("You must enter a rePassword");
    } else if (userData.password !== userData.rePassword) {
      return setError("Password and rePassword should be the same");
    } else {
      setError("");
    }
  };

  const handleRegister = (event) => {
    event.preventDefault();
    validateUser();
    fetch("https://dummyjson.com/users/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.contentWrapper}>
        {error.length > 0 && <p className={styles.errorText}>{error}</p>}
        <form action="" className={styles.form}>
          <input
            ref={inputRef}
            type="text"
            placeholder="firstname"
            onChange={(event) => {
              return setUserData((prev) => {
                return { ...prev, firstname: event.target.value };
              });
            }}
          />
          <input
            type="text"
            placeholder="lastname"
            onChange={(event) => {
              return setUserData((prev) => {
                return { ...prev, lastname: event.target.value };
              });
            }}
          />
          <input
            type="number"
            placeholder="age"
            onChange={(event) => {
              return setUserData((prev) => {
                return { ...prev, age: event.target.value };
              });
            }}
          />
          <input
            type="email"
            placeholder="email"
            onChange={(event) => {
              return setUserData((prev) => {
                return { ...prev, email: event.target.value };
              });
            }}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => {
              return setUserData((prev) => {
                return { ...prev, password: event.target.value };
              });
            }}
          />
          <input
            type="password"
            placeholder="password again"
            onChange={(event) => {
              return setUserData((prev) => {
                return { ...prev, rePassword: event.target.value };
              });
            }}
          />
          <button onClick={handleRegister}>Register</button>
          <Link href={"/login"}>
            Have an account? <b>Login</b>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
