import AppLogo from "./AppLogo";
import AppNavbar from "./AppNavbar";

export default function AppHeader() {
    return (
        <header className="app-header container d-flex justify-content-between align-items-center py-4">
            <AppLogo />
            <AppNavbar />
        </header>
    )
}