import socialLinks from "../data/socialLinks"

export default function SocialSection() {
    return (
        <div className="social-section d-flex align-items-center gap-4">
            <h4 className="social-followus font-condensed fw-bolder">FOLLOW US</h4>
            <ul className="d-flex align-items-center gap-4">
                {socialLinks.map((social) => (
                    <li className="social-logo" key={social.name}>
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