export default function BannerItem({ image, text }) {
    return (
        <div className="d-flex">
            <img src={image} alt={text} />
            <div className="bannerItemText">{text}</div>
        </div>
    )
}