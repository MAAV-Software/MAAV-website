"use client"
import "./globals.css";
import Image from "next/image";
import { MainCanvas } from "@/components/three/mainCanvas";
import {MainHeader} from "../components/ui/mainHeader";
import {MainFooter} from "../components/ui/mainFooter";

export default function App(){
  return (
    <div className="flex relative flex-col min-h-screen items-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
        <MainHeader />
        <div className="header" style={{backgroundImage: "url(/images/maav-mair.png)", aspectRatio: 1673 / 709}}>
          <img className="logo" src="/images/maav-logo-border.png" alt="MAAV" />
        </div>
        <MainCanvas />
        <MainFooter />
    </div>
  );
}

