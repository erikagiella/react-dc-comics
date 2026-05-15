export default function ComicCard({ title, image }) {
    return (
        <div className="comic-card col-2">
            <img className="comic-card-image mb-2" src={image}></img>
            <div className="comic-card-title text-uppercase">{title}</div>
        </div>
    )
}