import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1,
    };
  }

  async getAPIData() {
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&language=${
        this.props.language
      }&page=1&pageSize=18&sortBy=publishedAt&apiKey=a92a904f4bd94d99a51c85ce8bd34dbd`
    );
    response = await response.json();
    // console.log(response);
    if (response.status === "ok") {
      this.setState({
        articles: response.articles,
        totalResults: response.totalResults,
      });
    }
  }

  fetchData = async () => {
    this.setState({
      page: this.state.page + 1,
    });
    let response = await fetch(
      `https://newsapi.org/v2/everything?q=${
        this.props.search ? this.props.search : this.props.q
      }&language=${this.props.language}&page=${
        this.state.page
      }&pageSize=18&sortBy=publishedAt&apiKey=a92a904f4bd94d99a51c85ce8bd34dbd`
    );
    response = await response.json();
    // console.log(response);
    if (response.status === "ok") {
      this.setState({
        articles: this.state.articles.concat(response.articles),
      });
    }
  };

  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate(oldProps) {
    if (oldProps !== this.props) this.getAPIData();
  }
  render() {
    return (
      <>
        <div className="container-fluid">
          <h4 className="text-capitalize background text-light text-center p-2 mt-1 ">
            {this.props.search ? this.props.search : this.props.q} Articles
          </h4>
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <div className="my-5 text-center ">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            }
          >
            <div className="row">
              {this.state.articles.map((item, index) => {
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
}
