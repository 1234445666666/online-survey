"use client";
import "./style.css";
import React, { useRef } from "react";
import { useAuthStore } from "@/lib/store";
import FormRegister from "./formRegister";
import { checkingPasswords } from "./authFunction";
import { toast } from "react-toastify";

export default function Page() {
  const inputNameRef = useRef<HTMLInputElement | null>(null);
  const inputPasswordRef = useRef<HTMLInputElement | null>(null);
  const inputConfirmPasswordRef = useRef<HTMLInputElement | null>(null);

  const register = useAuthStore((state) => state.register);

  function handleRegistration(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = inputNameRef.current?.value || "";
    const password = inputPasswordRef.current?.value || "";
    const passwordConfirm = inputConfirmPasswordRef.current?.value || "";

    if (checkingPasswords(password, passwordConfirm)) {
      register(name, password);
    }
  }
  function handleLogin() {
    window.location.href = "/login";
  }

  return (
    <FormRegister
      handleRegistration={handleRegistration}
      handleLogin={handleLogin}
      inputNameRef={inputNameRef}
      inputPasswordRef={inputPasswordRef}
      inputConfirmPasswordRef={inputConfirmPasswordRef}
    />
  );
}
