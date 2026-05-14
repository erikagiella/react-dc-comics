import FooterSection from "./FooterSection.jsx";

export default function AppFooter() {
    const footerSections = [
        {
            title: "COMISC",
            links: [
                {
                    text: "lalal",
                    url: ""
                },

                {
                    text: "babba",
                    url: ""
                },
            ]
        },
    ]

    return (

        <footer>
            {footerSections.map((section) => (
                <FooterSection
                    key={section.title}
                    title={section.title}
                    links={section.links}
                />
            ))}
        </footer>
    )
}