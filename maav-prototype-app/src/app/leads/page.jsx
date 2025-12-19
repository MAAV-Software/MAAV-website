import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";
import {MainFooter} from "../../components/ui/mainFooter";

export default function Leads(){
    return(
        <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <h1 className="page-header absolute top-25 text-4xl font-bold text-white">
                Leads
            </h1>
            <MainFooter />
        </div>
    );
}