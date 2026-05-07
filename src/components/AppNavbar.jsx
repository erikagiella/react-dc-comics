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
        <nav className="navbar">
            <ul className="d-flex gap-4 fw-semibold">
                {/*Creo un NavItem per ogni elemento dell'array links*/}
                {links.map((link) => (
                    <NavItem
                        key={link}
                        text={link}
                    />
                ))
                }
            </ul>
        </nav>
    )

}