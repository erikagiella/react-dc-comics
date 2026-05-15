import FooterSection from "./FooterSection.jsx";
import footerSections from "../data/FooterLinks.js";
import footerBackgroundLogo from "../assets/img/dc-logo-bg.png"

export default function FooterSections() {
    return (
        <div className="footer-sections container d-flex gap-5">
            <div className="row">
                <div className="col-5 d-flex flex-column gap-3">
                    <FooterSection {...footerSections[0]} />
                    <FooterSection {...footerSections[1]} />
                </div>

                <div className="col-4">
                    <FooterSection {...footerSections[2]} />
                </div>

                <div className="col-3">
                    <FooterSection {...footerSections[3]} />
                </div>
            </div>
        </div>
    )
}