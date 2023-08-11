import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
var key = 0;
// OLD_API
// let api="6b451e4d4577494a8f6e8cf80a8218c7";
export default function NewsComponent(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalResults, setTotalResults] = useState(0);

  // document.title = `KALTAK-${capitalize(props.category)}`;
  let update = async () => {
    setPageSize(6);
    props.progress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.api}&page=${page}&pageSize=${pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.progress(30);
    let parsed_data = await data.json();
    props.progress(70);
    setArticles(parsed_data.articles);
    setTotalResults(parsed_data.totalResults);
    setLoading(false);
    props.progress(100);
  };
  useEffect(() => {
    update();
  }, []);
  let fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${
      props.category
    }&apiKey=${props.api}&page=${page + 1}&pageSize=${pageSize}`;
    setPage(page + 1);
    setLoading(true);
    let data = await fetch(url);
    let parsed_data = await data.json();

    setArticles(articles.concat(parsed_data.articles));
    setTotalResults(parsed_data.totalResults);
    setLoading(false);
  };

  let capitalize = (category) => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };
  return (
    <>
      <h2
        className={`mx-5 my-3 pt-5  px-2 fw-bold text-center text-${props.toggle_mode}`}
      >
        KALTAK Top {capitalize(props.category)} Headlines:-
      </h2>
      <hr className={`mb-4 text-${props.toggle_mode}`} />
      {loading && (
        <Spinner
          toggle_mode={props.toggle_mode}
          width={`5rem`}
          height={`5rem`}
          fs={`3`}
          my={`5`}
        />
      )}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={
          <Spinner
            toggle_mode={props.toggle_mode}
            width={`3rem`}
            height={`3rem`}
            fs={`3`}
            my={`5`}
          />
        }
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              key += 1;
              return (
                <div className="col-md-4" key={key}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageurl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    toggle_mode={props.toggle_mode}
                    mode={props.mode}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

NewsComponent.defaultProps = {
  category: "general",
};
NewsComponent.propTypes = {
  category: PropTypes.string.isRequired,
};
