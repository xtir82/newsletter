import React from 'react';

import NewsList from "@/components/news/news-list";
import {DUMMY_NEWS} from "@/dummy-news";

const NewsPage = () => {
    return (
        <>
            <h1>News Page</h1>
            <NewsList news={DUMMY_NEWS}/>
        </>
    )};

export default NewsPage;