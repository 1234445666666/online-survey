"use client";
import { execFile } from "child_process";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function page() {
  return (
    <div>
      <h1>Онлайн опрос</h1>

      <div>
        <h2>
          <Link href={"/survey"}>переход на тест</Link>
        </h2>
      </div>
    </div>
  );
}
