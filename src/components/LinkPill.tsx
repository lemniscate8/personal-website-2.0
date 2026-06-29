function LinkPill({ href, color, download, children }) {
    const colorToClasses = {
        blue: "bg-sky-200 text-sky-600 hover:text-sky-700"
    }
    return <a href={href} download={download} className={(color ? colorToClasses[color] : colorToClasses.blue) + " rounded p-1 px-2 hover:underline"}>{children}</a>
}

export default LinkPill
