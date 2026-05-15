import Jumbotron from "./Jumbotron";
import MainBanner from "./MainBanner";
import MainContent from "./MainContent";

export default function AppMain() {
    return (
        <main className="app-main">
            <Jumbotron />
            <MainContent />
            <MainBanner />
        </main>
    )
}