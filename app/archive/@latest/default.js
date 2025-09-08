import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewPage() {
    const latestNews = getLatestNews();

    return (
        <>
            <h2>Latest New Page</h2>
            <NewsList news={latestNews} />
        </>
    );
}
