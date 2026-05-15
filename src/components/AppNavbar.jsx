import NavItem from "./NavItem"

export default function AppNavbar() {
    // Array di link della navbar
    const links = [
        "CHARACTERS",
        "COMICS",
        "MOVIES",
        "TV",
        "GAMES",
        "COLLECTIBLES",
        "VIDEOS",
        "FANS",
        "NEWS",
        "SHOP"
    ]

    return (
        <div className="nav-links">
            <ul className="d-flex gap-4 fw-semibold font-condensed">
                {/*Creo un NavItem per ogni elemento dell'array links*/}
                {links.map((link) => (
                    <NavItem
                        key={link}
                        text={link}
                    />
                ))
                }
            </ul>
        </div>
    )

}