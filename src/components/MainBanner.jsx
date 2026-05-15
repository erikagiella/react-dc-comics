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
            image: digitalComics,
            className: "digital-comics"
        },
        {
            text: "DC MERCHANDISE",
            image: merchandise,
            className: "merchandise"
        },
        {
            text: "SUBSCRIPTION",
            image: subscriptions,
            className: "subscriptions"
        },
        {
            text: "COMIC SHOP LOCATOR",
            image: shopLocator,
            className: "shop-locator"
        },
        {
            text: "DC POWER VISA",
            image: dcPowerVisa,
            className: "visa-power"
        }
    ]

    return (
        <div className="main-banner py-3">
            <div className="banner-content container d-flex flex-row justify-content-center align-items-center px-2 py-4 gap-4">
                {bannerItems.map((item) => (
                    <BannerItem
                        key={item.text}
                        text={item.text}
                        image={item.image}
                        className={item.className}
                    />
                ))}
            </div>
        </div>
    )
}