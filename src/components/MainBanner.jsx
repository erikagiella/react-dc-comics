import digitalComics from "../assets/img/buy-comics-digital-comics.png"
import merchandise from "../assets/img/buy-comics-merchandise.png"
import subscriptions from "../assets/img/buy-comics-subscriptions.png"
import shopLocator from "../assets/img/buy-comics-shop-locator.png"
import dcPowerVisa from "../assets/img/buy-dc-power-visa.svg"
import BannerItem from "./BannerItem"

export default function MainBanner() {
    const bannerItems = [
        {
            text: "DIGITAL COMICS",
            image: digitalComics
        },
        {
            text: "DC MERCHANDISE",
            image: merchandise
        },
        {
            text: "SUBSCRIPTION",
            image: subscriptions
        },
        {
            text: "COMIC SHOP LOCATOR",
            image: shopLocator
        },
        {
            text: "DC POWER VISA",
            image: dcPowerVisa
        }
    ]

    return (
        <div className="main-banner py-3">
            <div className="banner-content container d-flex flex-row align-items-center p-2">
                {bannerItems.map((item) => (
                    <BannerItem
                        key={item.text}
                        text={item.text}
                        image={item.image}
                    />
                ))}
            </div>
        </div>
    )
}