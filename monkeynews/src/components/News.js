import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import monkey from "../monkey.jpg";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    category: "general",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      pageSize: 18,
      totalResults: 0,
      loading: false,
    };
  }

  buildUrl = () => {
    const { category, query } = this.props;
    const { page, pageSize } = this.state;

    // If search query exists
    if (query && query.trim() !== "") {
      return `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}&apiKey=${this.props.apiKey}`;
    }

    // If no search query, fetch ALL articles in that category
    return `https://newsapi.org/v2/everything?q=${category}&page=${page}&pageSize=${pageSize}&apiKey=${this.props.apiKey}`;
  };

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.query !== this.props.query ||
      prevProps.category !== this.props.category
    ) {
      this.fetchNews();
    }
  }

  fetchNews = async () => {
    this.props.setProgress(10)
    this.setState({ loading: true });

    try {
      const res = await fetch(this.buildUrl());
      this.props.setProgress(30)
      const data = await res.json();
      this.props.setProgress(50)
      
      this.setState({
        articles: data.articles || [],
        totalResults: data.totalResults || 0,
        loading: false,
      });
      this.props.setProgress(70)
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
    this.props.setProgress(100)
  };

  fetchData = async () => {
    this.props.setProgress(10)
    this.setState({ page: this.state.page + 1 }, 
      async () => {
        this.props.setProgress(30)
        const res = await fetch(this.buildUrl());
        this.props.setProgress(50)
        const data = await res.json();
        this.props.setProgress(70)
        this.setState({
          articles: this.state.articles.concat(data.articles || []),
        });
        this.props.setProgress(80)
    });
    this.props.setProgress(100)
  };

  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center mb-4">
          Monkey News – {this.props.category.toUpperCase()}
        </h2>

        {/* {this.state.loading && <Loader />} */}
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchData}
          hasMore={this.state.totalResults > this.state.articles.length}
          loader={<Loader />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="row justify-content-center">
            {this.state.articles.map((el) => (
              <div
                className="col-md-4 d-flex justify-content-center"
                key={el.url}
              >
                <NewsItem
                  title={el.title}
                  description={el.description}
                  imageurl={el.urlToImage || monkey}
                  url={el.url}
                  pubDate={el.publishedAt}
                  source={el.source.name}
                />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
