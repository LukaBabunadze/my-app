"use client";

import Link from "next/link";
import styles from "./loginForm.module.css";
import { useEffect, useRef, useState } from "react";

const LoginForm = () => {
  const nameRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    fetch("https://fakeauthentication-api.onrender.com/api/staticUsers/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((user) => console.log(user));
  };

  const handlePasswordInput = (event) => {
    return setPassword(event.target.value);
  };

  useEffect(() => {
    if (nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  return (
    <form action="" className={styles.form}>
      <input
        ref={nameRef}
        type="text"
        placeholder="username"
        name="username"
        onChange={(event) => {
          return setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        onChange={handlePasswordInput}
      />
      <button onClick={handleLogin}>Login</button>
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
