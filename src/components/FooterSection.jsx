export default function FooterSection({ title, links }) {
    return (
        <>
            <h3>{title}</h3>
            <ul>
                {
                    links.map((link) => (
                        <li key={link.text} >
                            <a href={link.url} >
                                {link.text}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </>

    )
}