import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewsItem from "../components/NewsItem/NewsItem";
import API from "../utils/API";

function News() {

    const [news, setNews] = useState([]); 

    useEffect(() => {
        API.getNews()
            .then(res => setNews(res.data.articles))
            .catch(err => console.log(err))
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="col-12" id="heading">
                    <h1>
                        Helping people isn't the only way to be involved with your community. Stay up to date and informed with local news here.
                    </h1>
                </div>
            </div>
            {news.map(article => (
                <NewsItem 
                    image={article.image}
                    title={article.title}
                    description={article.description}
                    url={article.url}
                />
            ))}
        </div>
    )
}

export default News;