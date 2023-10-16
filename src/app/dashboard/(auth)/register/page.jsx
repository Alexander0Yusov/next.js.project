"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState(null);
  const router = useRouter;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an account</h1>
      <h2 className={styles.suntitle}>Please sign up to see the dashboard</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Name"
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Email"
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Password"
          required
        />
        <button className={styles.button} type="submit">
          Register
        </button>
        {error && "Something went wrong"}
        <span className={styles.or}>- OR -</span>
        <Link className={styles.link} href="/dashboard/login">
          Login with an existing Account
        </Link>
      </form>
    </div>
  );
};

export default Register;
