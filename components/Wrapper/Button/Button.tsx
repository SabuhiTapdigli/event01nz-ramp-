"use client";
import React from "react";
import "./Button.css";
import { track } from "@vercel/analytics";

const Button = ({ url, gclid, title }: any) => {
  return (
    <div className="hero-btn cursor-pointer text-center mx-auto ">
      <a
        className="text-center "
        href={`${url}${gclid ? gclid : ""}`}
        onClick={(event) => {
          track("Visit", { title });
        }}
        target="_blank"
      >
        <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-2 rounded-lg font-bold shadow hover:opacity-90 transition">
          CLAIM BONUS
        </button>
      </a>
    </div>
  );
};

export default Button;
