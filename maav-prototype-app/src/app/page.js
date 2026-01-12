"use client"
import "./globals.css";
import Image from "next/image";
import { MainCanvas } from "@/components/three/mainCanvas";
import {MainHeader} from "../components/ui/mainHeader";
import {MainFooter} from "../components/ui/mainFooter";

export default function App(){
  return (
    <div className="flex relative flex-col min-h-scree h-[400vh] items-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <MainCanvas />
    </div>
  );
}

