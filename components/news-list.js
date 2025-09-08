import Link from "next/link";

export default function NewsList({ news }) {
    return (
        <ul className="news-list">
            {news.map((newsItem) => (
                <li>
                    <Link key={newsItem.id} href={`/news/${newsItem.slug}`}>
                        <img src={`images/news/${newsItem.image}`} alt={newsItem.title} />
                        <span>{newsItem.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    );
}
