'use client'
import Link from 'next/link'

import {IconLink} from 'src/components/IconLink'
import {Logo} from 'src/components/Logo'
import {useState, useEffect} from 'react'

function GitHubIcon(props) {
    return (
        <svg viewBox="0 0 16 16" aria-hidden="true" fill="currentColor" {...props}>
            <path
                d="M8 .198a8 8 0 0 0-8 8 7.999 7.999 0 0 0 5.47 7.59c.4.076.547-.172.547-.384 0-.19-.007-.694-.01-1.36-2.226.482-2.695-1.074-2.695-1.074-.364-.923-.89-1.17-.89-1.17-.725-.496.056-.486.056-.486.803.056 1.225.824 1.225.824.714 1.224 1.873.87 2.33.666.072-.518.278-.87.507-1.07-1.777-.2-3.644-.888-3.644-3.954 0-.873.31-1.586.823-2.146-.09-.202-.36-1.016.07-2.118 0 0 .67-.214 2.2.82a7.67 7.67 0 0 1 2-.27 7.67 7.67 0 0 1 2 .27c1.52-1.034 2.19-.82 2.19-.82.43 1.102.16 1.916.08 2.118.51.56.82 1.273.82 2.146 0 3.074-1.87 3.75-3.65 3.947.28.24.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.14.46.55.38A7.972 7.972 0 0 0 16 8.199a8 8 0 0 0-8-8Z"/>
        </svg>
    )
}

function LinkedinIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
            <path
                d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
        </svg>
    )
}

function MyResumeIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
            <path
                d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM16 18H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
        </svg>
    )
}

function TextFadeInOnOpen({text}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Small delay to ensure initial render is complete
        const timer = setTimeout(() => {
            setMounted(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <h1
            className={`
                transition-opacity duration-1000 ease-in
                ${mounted ? 'opacity-100' : 'opacity-0'}
                overflow-hidden whitespace-nowrap 
                text-5xl text-white font-bold
            `}
        >
            {text}
        </h1>
    );
}

function ComponentFadeInOnOpen({children, timeout = 100}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMounted(true);
        }, timeout);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            className={`
                transition-opacity duration-1000 ease-in
                ${mounted ? 'opacity-100' : 'opacity-0'}
            `}
        >
            {children}
        </div>
    );
}

export function Intro() {
    return (
        <>
            <div>
                <Link href="/">
                    <Logo className="inline-block h-8 w-auto"/>
                </Link>
            </div>
            <TextFadeInOnOpen text="Kacper Aniecko"/>
            <ComponentFadeInOnOpen timeout={500}>
                <p className="mt-4 text-sm/6 text-gray-300">
                    Full Stack Engineer crafting elegant web solutions with React, Next.js, Symfony and more.
                    Passionate about creating intuitive user experiences and scalable applications.
                </p>
            </ComponentFadeInOnOpen>
            <ComponentFadeInOnOpen timeout={1100}>
                <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
                    <IconLink href="https://www.linkedin.com/in/kacpera/" icon={LinkedinIcon} className="flex-none" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </IconLink>
                    <IconLink href="https://github.com/kaniecko" icon={GitHubIcon} className="flex-none" target="_blank" rel="noopener noreferrer">
                        Github
                    </IconLink>
                    <IconLink href="#" icon={MyResumeIcon} className="flex-none">
                        Resume
                    </IconLink>
                </div>
            </ComponentFadeInOnOpen>
        </>
    )
}

export function IntroFooter() {

}
