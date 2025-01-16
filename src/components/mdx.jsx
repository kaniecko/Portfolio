'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Logo } from 'src/components/Logo'
import Spline from '@splinetool/react-spline/next'


export const a = Link

export const img = function Img(props) {
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
}

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

function ArticleHeader({ id, logo, splineScene }) {
    return (
        <header className="relative mb-10 xl:mb-0">
            {splineScene && (
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="w-full h-full relative left-1/2 -translate-x-1/2">
                        <Spline
                            scene={splineScene}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            )}
            <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
                {logo && (
                    <Link href={`#${id}`} className="inline-flex">
                        <Logo className="h-6 w-6 xl:h-8 xl:w-8" />
                    </Link>
                )}
                <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300" />
            </div>
            <ContentWrapper>
                <div className="flex">
                    {logo && (
                        <Link href={`#${id}`} className="inline-flex">
                            <Logo className="h-6 w-6 xl:hidden" />
                        </Link>
                    )}
                </div>
            </ContentWrapper>
        </header>
    )
}

export const article = function Article({ id, logo, splineScene, children }) {
    let heightRef = useRef(null)
    let [heightAdjustment, setHeightAdjustment] = useState(0)

    useEffect(() => {
        if (!heightRef.current) {
            return
        }

        let observer = new window.ResizeObserver(() => {
            if (!heightRef.current) {
                return
            }
            let { height } = heightRef.current.getBoundingClientRect()
            let nextMultipleOf8 = 8 * Math.ceil(height / 8)
            setHeightAdjustment(nextMultipleOf8 - height)
        })

        observer.observe(heightRef.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <article
            id={id}
            className="scroll-mt-16"
            style={{ paddingBottom: `${heightAdjustment}px` }}
        >
            <div ref={heightRef}>
                <ArticleHeader id={id} logo={logo} splineScene={splineScene} />
                <ContentWrapper className="typography" data-mdx-content>
                    {children}
                </ContentWrapper>
            </div>
        </article>
    )
}

export const code = function Code({ highlightedCode, ...props }) {
  if (highlightedCode) {
    return (
        <code {...props} dangerouslySetInnerHTML={{ __html: highlightedCode }} />
    )
  }

  return <code {...props} />
}