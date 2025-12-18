"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";
import styles from "../styles/LoginForm.module.css";
import { signIn, getProviders } from "next-auth/react";
import Button from "./Buttons/Button";

export function LoginForm({ className, ...props }) {
  const [UID, setUID] = useState("");
  const [password, setPassword] = useState("");
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSessionDuration = (e) => {
    setKeepMeSignedIn(e.target.checked);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const result = await signIn("credentials", {
        username: UID.trim(),
        password,
        remember: keepMeSignedIn,
        callbackUrl: "/",
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container} {...props}>
      <div className={styles.background} />
      <div className={styles.overlay} />
      <div className={styles.content}>
        <Image
          src="/images/desktop_login_logo.png"
          alt="logo"
          width={500}
          height={500}
          className={styles.logo}
        />
        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <h2 className={styles.cardTitle}>Sign In</h2>
          </div>
          <div className={styles.cardContent}>
            <form className={styles.form}>
              <div className={styles.formGroup}>
                <input
                  id="UID"
                  type="text"
                  onChange={(e) => setUID(e.target.value)}
                  placeholder="User ID"
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
                  autoComplete="current-password"
                />
              </div>
              <div className={styles.linksRow}>
                <div className={styles.checkboxGroup}>
                  <input
                    id="remember"
                    type="checkbox"
                    className={styles.checkbox}
                    onChange={handleSessionDuration}
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
                <Button
                  type="submit"
                  className={styles.button}
                  onClick={handleLogin}
                  loading={loading}
                  text={"Log In"}
                  bg={"#c9deb1"}
                />
              </div>
            </form>
          </div>
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
