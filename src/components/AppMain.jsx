import MainBanner from "./MainBanner";
import MainContent from "./MainContent";

export default function AppMain() {
    return (
        <main className="app-main">
            <div className="dc-jumbotron"></div>
            <MainContent />
            <MainBanner />
        </main>
    )
}