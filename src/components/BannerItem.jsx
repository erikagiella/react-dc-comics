export default function BannerItem({ image, text, className }) {
    return (
        <div className="banner-item d-flex align-items-center gap-3 mx-4">
            <img className={className} src={image} alt={text} />
            <span>{text}</span>
        </div>
    )
}