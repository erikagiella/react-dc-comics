import FooterSection from "./FooterSection.jsx";
import footerSections from "../data/FooterLinks.js";

export default function FooterSections() {
    return (
        <div className="footer-sections">
            <div className="container py-4 d-flex gap-5">
                {
                    footerSections.map((section) => (
                        <FooterSection
                            key={section.title}
                            title={section.title}
                            links={section.links}
                        />
                    ))
                }
            </div>
        </div>
    )
}