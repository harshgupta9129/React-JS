import { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import monkey from "../monkey.jpg";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const { query, apiKey, setProgress, category = "general" } = props;

  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  const pageSize = 18;

  // ✅ Stable URL builder
  const buildUrl = useCallback(
    (pageNo) => {
      if (query && query.trim() !== "") {
        return `https://newsapi.org/v2/everything?q=${encodeURIComponent(
          query
        )}&page=${pageNo}&pageSize=${pageSize}&apiKey=${apiKey}`;
      }

      return `https://newsapi.org/v2/everything?q=${category}&page=${pageNo}&pageSize=${pageSize}&apiKey=${apiKey}`;
    },
    [query, category, apiKey]
  );

  const getTitle = () => {
    if (query && query.trim() !== "") {
      return `Search Results for "${query}"`;
    }

    if (category === "general") {
      return "Top Headlines";
    }

    return category.charAt(0).toUpperCase() + category.slice(1);
  };


  // ✅ Fetch on category / query change
  useEffect(() => {
    const fetchNews = async () => {
      setProgress(10);
      setpage(1);

      try {
        const res = await fetch(buildUrl(1));
        setProgress(30);
        const data = await res.json();
        setProgress(60);

        setarticles(data.articles || []);
        settotalResults(data.totalResults || []);
      } catch (error) {
        console.error("Error fetching news:", error);
      }

      setProgress(100);
    };

    fetchNews();
  }, [query, category, buildUrl, setProgress]);

  // ✅ Infinite Scroll fetch
  const fetchData = async () => {
    const nextPage = page + 1;
    setpage(nextPage);
    setProgress(10);

    try {
      const res = await fetch(buildUrl(nextPage));
      setProgress(40);
      const data = await res.json();
      setProgress(70);

      setarticles((prev) => prev.concat(data.articles || []));
    } catch (error) {
      console.error("Error fetching more news:", error);
    }

    setProgress(100);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4" style={{marginTop:"90px"}}>
        Monkey News – {getTitle()}
      </h2>

      <InfiniteScroll
        dataLength={articles.length}
        next={fetchData}
        hasMore={articles.length < totalResults}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="row justify-content-center">
          {articles.map((el, index) => (
            <div
              className="col-md-4 d-flex justify-content-center"
              key={`${el.url}-${index}`}
            >
              <NewsItem
                title={el.title}
                description={el.description}
                imageurl={el.urlToImage || monkey}
                url={el.url}
                pubDate={el.publishedAt}
                source={el.source?.name}
              />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
}

News.defaultProps = {
  category: "general",
};
