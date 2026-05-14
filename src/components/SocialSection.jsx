import socialLinks from "../data/socialLinks"

export default function SocialSection() {
    return (
        <div className="social-section">
            <h4>FOLLOW US</h4>
            <ul>
                {socials.map((social) => (

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