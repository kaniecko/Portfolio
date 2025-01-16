import { useId } from 'react'

import { Intro, IntroFooter } from 'src/components/Intro'
import { StarField } from 'src/components/StarField'
import { ThemeToggle } from 'src/components/ThemeToggle'

function Timeline() {
  let id = useId()

  return (
    <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+48rem)] lg:min-w-[32rem] lg:overflow-visible">
        <defs>
          <pattern id={id} width="6" height="8" patternUnits="userSpaceOnUse">
            <path
              d="M0 0H6M0 8H6"
              className="stroke-sky-900/10 xl:stroke-white/10 dark:stroke-white/10"
              fill="none"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
    </div>
  )
}

function FixedSidebar({ main, footer }) {
    return (
        <div className="relative flex-none overflow-hidden w-full lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex">
            <div className="relative flex w-full justify-center lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+45rem)] lg:min-w-[24rem]">
                <div className="w-full max-w-2xl mx-auto lg:mx-0 lg:flex lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
                    <div className="pb-16 pt-10 sm:pb-20 sm:pt-32 lg:pt-0 lg:pb-10 w-full">
                        <div className="relative">
                            {main}
                        </div>
                    </div>
                    <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
                        {footer}
                    </div>
                </div>
            </div>
        </div>
    )
}
export function Layout({ children }) {
  return (
    <>
      <FixedSidebar main={<Intro />} footer={<IntroFooter />} />
      <ThemeToggle />
      <div className="relative flex-auto">
        <Timeline />
        <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
          {children}
        </main>
      </div>
    </>
  )
}
