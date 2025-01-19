'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import ProjectLogo from './ProjectLogo';

function ContentWrapper({ className, ...props }) {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="lg:ml-80 lg:flex lg:w-full lg:justify-end lg:pl-32">
                <div
                    className={clsx(
                        'mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto',
                        className,
                    )}
                    {...props}
                />
            </div>
        </div>
    )
}

function ProjectArticle({ children, logo, id }) {
    const heightRef = useRef(null);
    const [heightAdjustment, setHeightAdjustment] = useState(0);

    useEffect(() => {
        if (!heightRef.current) return;

        const observer = new ResizeObserver(() => {
            if (!heightRef.current) return;
            const { height } = heightRef.current.getBoundingClientRect();
            const nextMultipleOf8 = 8 * Math.ceil(height / 8);
            setHeightAdjustment(nextMultipleOf8 - height);
        });

        observer.observe(heightRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <article
            id={id}
            className="scroll-mt-16"
            style={{ paddingBottom: `${heightAdjustment}px` }}
        >
            <div ref={heightRef}>
                <header className="relative mb-10 xl:mb-0">
                    <div className="absolute left-0 top-0">
                        {logo && (
                            <div className="fixed left-20 top-24">
                                <ProjectLogo logoSrc={logo} />
                            </div>
                        )}
                    </div>
                    <ContentWrapper>
                        <div className="flex" />
                    </ContentWrapper>
                </header>
                <ContentWrapper className="typography" data-mdx-content>
                    {children}
                </ContentWrapper>
            </div>
        </article>
    );
}

export default ProjectArticle;