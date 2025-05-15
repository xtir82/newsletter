import React from 'react';
import {getLatestNews} from "@/lib/news";
import NewsList from "@/components/news/news-list";


const LatestNewsPage = () => {
    const latestNews = getLatestNews();
    return (
        <div>
            <h1>LatestNewsPage</h1>
            <NewsList news={latestNews} />
        </div>
    );
};

export default LatestNewsPage;