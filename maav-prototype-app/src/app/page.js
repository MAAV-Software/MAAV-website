"use client"
import "./globals.css";
import Image from "next/image";
import { MainCanvas } from "@/components/three/mainCanvas";
import {MainHeader} from "../components/ui/mainHeader";
import {MainFooter} from "../components/ui/mainFooter";

export default function App(){
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
        <MainHeader />
        <div>
          <img className="mair w-screen" src="/images/maav-mair.png" alt="MAIR" />
          <img className="logo absolute top-50 left-1/2 transform -translate-x-1/2" src="/images/maav-logo-border.png" alt="MAAV" />
        </div>
        <MainCanvas />
        <MainFooter />
    </div>
  );
}

