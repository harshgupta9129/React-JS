import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import monkey from "../monkey.jpg";

export default class News extends Component {
  static defaultProps = {
    category: "general",
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      pageSize: 12,
      totalResults: 0,
      loading: false,
    };
  }

  apiKey = "c051ee8ef68244929c279fec39ba8454";

  buildUrl = () => {
    const { category, query } = this.props;
    const { page, pageSize } = this.state;

    // If search query exists
    if (query && query.trim() !== "") {
      return `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}&apiKey=${this.apiKey}`;
    }

    // If no search query, fetch ALL articles in that category
    return `https://newsapi.org/v2/everything?q=${category}&page=${page}&pageSize=${pageSize}&apiKey=${this.apiKey}`;
  };

  componentDidMount() {
    this.fetchNews();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.query !== this.props.query ||
      prevProps.category !== this.props.category ||
      prevState.page !== this.state.page
    ) {
      this.fetchNews();
    }
  }

  fetchNews = async () => {
    this.setState({ loading: true });

    try {
      const res = await fetch(this.buildUrl());
      const data = await res.json();

      this.setState({
        articles: data.articles || [],
        totalResults: data.totalResults || 0,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <div className="container my-4">
        <h2 className="text-center mb-4">
          Monkey News – {this.props.category.toUpperCase()}
        </h2>

        {this.state.loading && <Loader />}

        <div className="row justify-content-center">
          {!this.state.loading &&
            this.state.articles.map((el) => (
              <div
                className="col-md-3 d-flex justify-content-center"
                key={el.url}
              >
                <NewsItem
                  title={el.title}
                  description={el.description}
                  imageurl={el.urlToImage || monkey}
                  url={el.url}
                  pubDate={el.publishedAt}
                />
              </div>
            ))}
        </div>

        <div className="d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            className="btn btn-primary"
            onClick={() => this.setState({ page: this.state.page - 1 })}
          >
            Previous
          </button>

          <button
            disabled={
              this.state.page >=
              Math.ceil(this.state.totalResults / this.state.pageSize)
            }
            className="btn btn-primary"
            onClick={() => this.setState({ page: this.state.page + 1 })}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}
