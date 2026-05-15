export default function FooterSection({ title, links }) {
    return (
        <div className="footer-section">
            <h4 className="section-title fw-bold">{title}</h4>
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
        </div>

    )
}