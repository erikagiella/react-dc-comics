import SignUpButton from "./SignUpButton"
import SocialSection from "./SocialSection"


export default function FooterBottom() {
    return (
        <div className="footer-bottom">
            <div className="container d-flex justify-content-between">
                <SignUpButton />
                <SocialSection />
            </div>
        </div>
    )
}