import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home(props) {
  let [articles, setArticles] = useState([]);
  let [totalResults, setTotalResults] = useState(0);
  let [page, setPage] = useState(1);

  async function getAPIData() {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        props.search ? props.search : props.q
      }&language=${
        props.language
      }&page=1&pageSize=18&sortBy=publishedAt&apiKey=a92a904f4bd94d99a51c85ce8bd34dbd`
    );
    response = await response.json();
    // console.log(response);
    if (response.status === "ok") {
      setArticles(response.articles);
      setTotalResults(response.totalResults);
    }
  }

  let fetchData = async () => {
    setPage(page + 1);
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        props.search ? props.search : props.q
      }&language=${
        props.language
      }&page=${page}&pageSize=18&sortBy=publishedAt&apiKey=a92a904f4bd94d99a51c85ce8bd34dbd`
    );
    response = await response.json();
    // console.log(response);
    if (response.status === "ok") {
      setArticles(articles.concat(response.articles));
    }
  };

  useEffect(() => {
    getAPIData();
  }, [props]);

  return (
    <>
      <div className="container-fluid">
        <h4 className="text-capitalize background text-light text-center p-2 mt-1 ">
          {props.search ? props.search : props.q} Articles
        </h4>
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={
            <div className="my-5 text-center ">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }
        >
          <div className="row">
            {articles.map((item, index) => {
              return (
                <NewsItem
                  key={index}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  pic={item.urlToImage}
                  date={item.publishedAt}
                  source={item.source?.name}
                />
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
