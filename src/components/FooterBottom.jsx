import SignUpButton from "./SignUpButton"
import SocialSection from "./SocialSection"


export default function FooterBottom() {
    return (
        <div className="footer-bottom py-4">
            <div className="container d-flex justify-content-between align-items-center">
                <SignUpButton />
                <SocialSection />
            </div>
        </div>
    )
}