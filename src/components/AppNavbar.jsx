export default function AppNavbar() {

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
            <ul>
                {links.map((link) => (
                    <li key={link}>
                        <a href="#">{link}</a>
                    </li>
                ))
                }
            </ul>
        </nav>
    )

}