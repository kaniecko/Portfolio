import Image from 'next/image'

export default function ServerImage(props) {
    const src = props.src || props.url || '';

    return (
        <div className="relative mt-8 overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 [&+*]:mt-8">
            <Image
                src={src}
                alt={props.alt || ""}
                width={1200}
                height={800}
                className="w-full h-auto"
                sizes="(min-width: 1280px) 36rem, (min-width: 1024px) 45vw, (min-width: 640px) 32rem, 95vw"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
        </div>
    )
}