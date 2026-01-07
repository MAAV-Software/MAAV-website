"use client"
import React from 'react'
import {MainHeader} from "../../components/ui/mainHeader";
import {MainFooter} from "../../components/ui/mainFooter";

export default function Blog(){

    const handleHover = (e) => {
        console.log('Mouse hovered!');
        e.target.style.textDecoration = "underline";
    }

    const handleLeave = (e) => {
        console.log('Mouse left!');
        e.target.style.textDecoration = "none";
    }

    return(

        <div className="page" style={{ backgroundColor: "black" }}>
            <MainHeader />
            <div className="header" style={{backgroundImage: "url(/images/maav-mair.png)", aspectRatio: 1673 / 709}}>
                <h1 className="image-title">
                    Blog
                </h1>
            </div>

            <div className="highlight-post">
                <h1 className="page-header">
                    Newest Post
                </h1>

                <div className="page-body">
                    Computer Vision Detection Progress
                </div>

                <img className="thumbnail" src="/images/blog-images/cv-post-thumnail.jpg"></img>
                
                <button
                    type="button"
                    onMouseEnter={handleHover}
                    onMouseLeave={handleLeave}
                    onClick={() => {window.location.href = "/posts/cv-progress/"}}
                    className="w-45 h-5"
                >
                    <p className='text-3xl text-white text-center'>Read More</p>
                </button>
            
            </div>
            <MainFooter />

        </div>
    );
}