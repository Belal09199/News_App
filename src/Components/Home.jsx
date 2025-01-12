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
  getAPIData = async () => {
    var response = "";
    if (this.props.search)
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&pageSize=1&apiKey=e88d085a88b64e5380be3e084507bad0`
      );
    else
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.q}&pageSize=1&language=${this.props.language}&apiKey=e88d085a88b64e5380be3e084507bad0`
      );
    var result = await response.json();
    this.setState({
      articles: result.articles.filter((x) => x.title !== "[Removed]"),
      totalResults: result.totalResults,
    });
    // console.log(result);
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    var response = "";
    if (this.props.search)
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.search}&language=${this.props.language}&page=${this.state.page}&apiKey=e88d085a88b64e5380be3e084507bad0`
      );
    else
      response = await fetch(
        `https://newsapi.org/v2/everything?q=${this.props.q}&language=${this.props.language}&page=${this.state.page}&apiKey=e88d085a88b64e5380be3e084507bad0`
      );
    var result = await response.json();
    this.setState({
      articles: this.state.articles.concat(result.articles),
    });
  };

  componentDidMount() {
    this.getAPIData();
  }

  componentDidUpdate(oldProps) {
    if (this.props !== oldProps) {
      this.getAPIData();
    }
  }
  render() {
    return (
      <>
        <div className="container mt-2 mb-4">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="assets/images/s1.jpeg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="assets/images/s4.jpeg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="assets/images/s5.jpeg"
                  className="d-block w-100"
                  alt="..."
                  style={{ height: "500px", width: "100%" }}
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="container mt-4">
          <h5
            className="text-center mb-3 text-light py-2 text-capitalize"
            style={{ backgroundColor: "#003366" }}
          >
            {this.props.search ? this.props.search : this.props.q} News Articles
          </h5>
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <>
                <div class="spinner-grow text-primary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-secondary" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div class="spinner-grow text-success" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </>
            }
          >
            <div className="row">
              {this.state.articles.map((item, index) => {
                return (
                  <NewsItem
                    key={index}
                    name={item.name}
                    pic={item.urlToImage}
                    title={item.title}
                    description={item.description}
                    source={item.source}
                    date={item.publishedAt}
                    url={item.url}
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
