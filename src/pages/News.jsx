import React, { useEffect, useState } from 'react'
import Spinner from '../components/spinner';
import InfiniteScroll from 'react-infinite-scroll-component';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - NewsPortal`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <div className="container-fluid" >
            <h1 className='fs-1 text-center my-3' >NewsPortal - Top {capitalizeFirstLetter(props.category)} Headlines</h1 >

            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-sm-3 g-3">

                        {articles.map((element) => {
                            return <div className="col" key={element.url}>
                                <div className="card">
                                    <img src={element.urlToImage ? element.urlToImage : "/images/gsmarena_00.jpg"} className="card-img-top" alt="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title ? element.title : ""}</h5>
                                        <p className="card-text">{element.description ? element.description : ""}</p>
                                        <p className="card-text"><small className="text-muted">By {element.author ? element.author : "Unknown"} on  {new Date(element.publishedAt).toGMTString()}</small></p>

                                        <a rel="noreferrer" href={element.url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                                    </div>
                                </div>
                            </div>
                        })}



                    </div>
                </div>
            </InfiniteScroll>
        </div >
    )
}

export default News
