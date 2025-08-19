import Link from 'next/link'

export default function MyLink({ href, children }) {
    return <Link href={href} className="text-link">{children}</Link>
}