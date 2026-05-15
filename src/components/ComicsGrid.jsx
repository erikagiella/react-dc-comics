import ComicCard from "./ComicCard";
import comics from "../data/comics.js"

export default function ComicsGrid() {
    return (
        <div className="row g-3">
            {comics.map((comic) =>
            (<ComicCard
                key={comic.title}
                title={comic.title}
                image={comic.thumb}
            />)
            )}
        </div>
    )
}