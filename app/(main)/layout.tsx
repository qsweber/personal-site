"use client";

import { ReactNode } from "react";
import { Container } from "../components/Container";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import "../globals.css";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <Container>
      <NavBar />
      {children}
      <Footer />
    </Container>
  );
}
