export default function ComicCard({ title, image }) {
    return (
        <div className="comic-card col-2">
            <img className="card-image" src={image}></img>
            <div className="card-title">{title}</div>
        </div>
    )
}