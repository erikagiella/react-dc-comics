export default function NavItem({ text }) {
    return (
        <li>
            <a href="#" className={text === "COMICS" ? "nav-link selected" : "nav-link"}>
                {text}
            </a>
        </li>
    )
}