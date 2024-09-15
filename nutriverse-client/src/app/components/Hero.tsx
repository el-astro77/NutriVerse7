"use client";

import { useState } from 'react';
import RetrieveLink from './RetriveLink';
import SubmitPrompt from './SubmitPrompt';
import AiOutput from './AiOutput';

export default function Hero() {
    let txt = "Welcome!";
    const speed = 50;
    const [link, setLink] = useState('');
    const [prompt, setPrompt] = useState('');
    const [hasSubmit, setHasSubmit] = useState(false);

    const handleLinkInputChange = (e) => {
        setLink(e.target.value);
    };

    const handlePromptInputChange = (e) => {
        setPrompt(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setHasSubmit(true);
        setPrompt('');
        if (!document.getElementById("animate-typing").innerHTML == "") {
            txt = "Error! Unknow exception thrown."
        }
        document.getElementById("animate-typing").innerHTML = ""
        typeWriter();
    };

    let i = 0;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("animate-typing").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    return(
        <div className="hero min-h-screen max-w-screen-lg">
            <div className="hero-content flex-col lg:flex-row gap-12 lg:w-full ">
                <div>
                    <h1 className="text-7xl max-sm:text-6xl font-extrabold color-breathing">
                        NUTRIVERSE
                    </h1>
                    <p className="font-light pb-6 font-[family-name:var(--font-geist-mono)]">
                        Know what you want.
                    </p>
                    {hasSubmit ? 
                    <SubmitPrompt 
                        prompt={prompt}
                        hasText={prompt.length > 0}
                        handlePromptInputChange={handlePromptInputChange}
                        handleSubmit={handleSubmit}
                    /> : 
                    <RetrieveLink 
                        link={link} 
                        hasText={link.length > 0} 
                        handleLinkInputChange={handleLinkInputChange}
                        handleSubmit={handleSubmit}
                    /> }
                </div>
                <AiOutput />
            </div>
        </div>
    );
}