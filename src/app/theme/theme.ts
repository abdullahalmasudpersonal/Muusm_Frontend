"use client";
import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "light" | "dark") =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#1e40af",
      },
      background: {
        default: mode === "dark" ? "#061c3f" : "#f8fafc",
        paper: mode === "dark" ? "#0b2a5b" : "#ffffff",
      },
    },
  });
