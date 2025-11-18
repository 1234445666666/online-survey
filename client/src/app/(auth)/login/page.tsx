"use client";
import "./style.css";
import React, { useRef } from "react";
import { useAuthStore } from "@/lib/store";
import LoginForm from "./components/LoginForm.tsx";
import { toast } from "react-toastify";

export default function Page() {
  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const login = useAuthStore((state) => state.login);

  function handleRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = inputNameRef.current?.value;
    const password = inputPasswordRef.current?.value;
    const success = login(name!, password!);
  }

  function handleOpenPassword() {
    const passwordInput = inputPasswordRef.current;
    if (passwordInput) {
      passwordInput.type =
        passwordInput.type === "password" ? "text" : "password";
    }
  }

  return (
    <LoginForm
      handleRegistration={handleRegistration}
      handleOpenPassword={handleOpenPassword}
      inputNameRef={inputNameRef}
      inputPasswordRef={inputPasswordRef}
    />
  );
}
