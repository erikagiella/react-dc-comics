export default function NavItem({ text }) {
    //questa funzione, dato un parametro "text", restituisce lo stesso come contenuto di li>a
    return (
        <li>
            <a href="#">{text}</a>
        </li>
    )
}