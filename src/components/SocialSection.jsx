import socialLinks from "../data/socialLinks"

export default function SocialSection() {
    return (
        <div className="social-section d-flex">
            <h4 className="social-followus">FOLLOW US</h4>
            <ul className="d-flex">
                {socialLinks.map((social) => (
                    <li key={social.name}>
                        <a href={social.url}>
                            <img
                                src={social.icon}
                                alt={social.name}
                            />
                        </a>
                    </li>

                ))}
            </ul>
        </div>
    )
}