export default function BannerItem({ image, text }) {
    return (
        <div className="banner-item d-flex align-items-center gap-3 mx-4">
            <img src={image} alt={text} />
            <span>{text}</span>
        </div>
    )
}