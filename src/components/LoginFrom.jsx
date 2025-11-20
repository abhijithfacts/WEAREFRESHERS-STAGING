"use client";
import { useState, useActionState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "../styles/LoginForm.module.css";
import { signup } from "../app/actions/auth";


export function LoginForm({ className, ...props }) {
  const [state, action, pending] = useActionState(signup, undefined);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {};

  return (
    <div className={styles.container} {...props}>
      {/* Background */}
      <div className={styles.background} />
      {/* Overlay (optional for slight tint) */}
      <div className={styles.overlay} />
      {/* Content */}
      <div className={styles.content}>
        {/* Logo */}
        <Image
          src="/images/desktop_login_logo.png"
          alt="logo"
          width={500}
          height={500}
          className={styles.logo}
        />
        {/* Card */}
        <div className={styles.card}>
          {/* CardHeader */}
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Sign In</h2>
          </div>
          {/* CardContent */}
          <div className={styles.cardContent}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email address"
                  required
                  className={styles.input}
                />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.input}
                />
              </div>
              <div className={styles.linksRow}>
                <div className={styles.checkboxGroup}>
                  <input
                    id="remember"
                    type="checkbox"
                    className={styles.checkbox}
                  />
                  <label htmlFor="remember" className={styles.checkboxLabel}>
                    Keep me signed in
                  </label>
                </div>
                <Link href="/forgot-password" className={styles.forgotLink}>
                  Forgot Password
                </Link>
              </div>
              <div className={styles.buttonWrapper}>
                <button
                  type="submit"
                  className={styles.button}
                  onClick={handleLogin}
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
          {/* CardFooter */}
          <div className={styles.cardFooter}>
            <div className={styles.footerText}>
              <p className={styles.noAccount}>No account?</p>
              <Link href="/register" className={styles.registerLink}>
                Register now →
              </Link>
            </div>
            <MdArrowForwardIos className={styles.arrowIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
