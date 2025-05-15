import React from 'react';
import {DUMMY_NEWS} from "@/dummy-news";
import {notFound} from "next/navigation";

const InterceptedPageImage = ({params}) => {
    const newsItemSlug = params.slug;
    const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsItemSlug);

    if (!newsItem) {
        notFound();
    }
    return (
        <>
            <h2>INTERCEPTED TEST!</h2>
            <div className="fullscreen-image">
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
            </div>
        </>
    );
};

export default InterceptedPageImage;