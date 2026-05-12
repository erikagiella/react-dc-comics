export default function BannerItem({ image, text }) {
    return (
        <div className="banner-item d-flex align-items-center">
            <img src={image} alt={text} />
            <span>{text}</span>
        </div>
    )
}