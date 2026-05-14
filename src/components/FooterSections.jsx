import FooterSection from "./FooterSection.jsx";
import footerSections from "../data/FooterLinks.js";

export default function FooterSections() {
    return (
        <>
            {
                footerSections.map((section) => (
                    <FooterSection
                        key={section.title}
                        title={section.title}
                        links={section.links}
                    />
                ))
            }
        </>
    )
}