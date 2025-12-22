import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import News from "./components/News";
import { NavbarWithNavigate } from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  const apiKey = process.env.REACT_APP_NEWS_API;

  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState(0);

  const handleQuery = (searchText) => {
    setQuery(searchText);
  };

  return (
    <Router>
      <NavbarWithNavigate handleQuery={handleQuery} />
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <News apiKey={apiKey} setProgress={setProgress} query={query} />
          }
        />
        <Route
          path="/business"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="business"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="entertainment"
            />
          }
        />
        <Route
          path="/health"
          element={
            <News apiKey={apiKey} setProgress={setProgress} category="health" />
          }
        />
        <Route
          path="/science"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="science"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News apiKey={apiKey} setProgress={setProgress} category="sports" />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              apiKey={apiKey}
              setProgress={setProgress}
              category="technology"
            />
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}
