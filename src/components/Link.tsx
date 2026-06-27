
function Link({ href, children }: { href: string, children: React.ReactNode }) {
    return <a href={href} className="text-sky-500 hover:underline hover:text-sky-600">{children}</a>
}

export default Link
