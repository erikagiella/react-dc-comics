import facebookIcon from "../assets/img/footer-facebook.png"
import twitterIcon from "../assets/img/footer-twitter.png"
import youtubeIcon from "../assets/img/footer-youtube.png"
import pinterestIcon from "../assets/img/footer-pinterest.png"
import periscopeIcon from "../assets/img/footer-periscope.png"


export default function FooterBottom() {
    const socials = [
        {
            name: "Facebook",
            icon: facebookIcon,
            url: "#"
        },

        {
            name: "Twitter",
            icon: twitterIcon,
            url: "#"
        },

        {
            name: "YouTube",
            icon: youtubeIcon,
            url: "#"
        },

        {
            name: "Pinterest",
            icon: pinterestIcon,
            url: "#"
        },

        {
            name: "Periscope",
            icon: periscopeIcon,
            url: "#"
        }
    ]

    return (
        <div className="footer-bottom">
            <button className="signup-btn">
                SIGN-UP NOW!
            </button>
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
        </div>
    )
}