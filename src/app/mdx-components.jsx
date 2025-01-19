'use client';

import Link from 'next/link'
import Image from 'next/image'
import ProjectImageCarousel from '@/components/ProjectImageCarousel'

export function useMDXComponents(components) {
    return {
        ...components,
        a: Link,
        img: function Img(props) {
            if (Array.isArray(props.images)) {
                return <ProjectImageCarousel images={props.images} />
            }

            return (
                <div className="relative mt-8 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 [&+*]:mt-8">
                    <Image
                        alt=""
                        sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
                        {...props}
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
                </div>
            )
        },
        code: function Code({ highlightedCode, ...props }) {
            if (highlightedCode) {
                return (
                    <code {...props} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
                )
            }
            return <code {...props} />
        }
    }
}