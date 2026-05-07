import AppLogo from "./AppLogo";
import AppNavbar from "./AppNavbar";

export default function AppHeader() {
    return (
        <header className="app-header">
            <AppLogo />
            <AppNavbar />
        </header>
    )
}