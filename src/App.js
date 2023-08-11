import React, { useState } from "react";
import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
let api = process.env.REACT_APP_API_KEY;
export default function App() {
  const [dark_mode, setModeflag] = useState(false);
  const [mode, setMode] = useState(`light`);
  const [toggle_mode, setToggleMode] = useState("dark");
  const [progress_value, setProgressValue] = useState(0);

  let setDarkMode = () => {
    if (dark_mode) {
      setMode("light");
      setModeflag(false);
      setToggleMode("dark");
      document.body.style.backgroundColor = "#ffffff";
    } else {
      setMode("dark");
      setModeflag(true);
      setToggleMode("light");
      document.body.style.backgroundColor = "#2e353c";
    }
  };
  let setprogress = (progress_value) => {
    setProgressValue(progress_value);
  };
  return (
    <>
      <Router>
        <LoadingBar color="#f11946" progress={progress_value} />
        <Navbar setDarkMode={setDarkMode} mode={mode} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <NewsComponent
                api={api}
                progress={setprogress}
                mode={mode}
                toggle_mode={toggle_mode}
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <NewsComponent
                api={api}
                progress={setprogress}
                key="business"
                mode={mode}
                toggle_mode={toggle_mode}
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <NewsComponent
                api={api}
                progress={setprogress}
                key="entertainment"
                mode={mode}
                toggle_mode={toggle_mode}
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <NewsComponent
                api={api}
                progress={setprogress}
                key="general"
                mode={mode}
                toggle_mode={toggle_mode}
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <NewsComponent
                api={api}
                progress={setprogress}
                key="health"
                mode={mode}
                toggle_mode={toggle_mode}
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <NewsComponent
                api={api}
                progress={setprogress}
                key="science"
                mode={mode}
                toggle_mode={toggle_mode}
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <NewsComponent
                api={api}
                progress={setprogress}
                key="sports"
                mode={mode}
                toggle_mode={toggle_mode}
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <NewsComponent
                api={api}
                progress={setprogress}
                key="technology"
                mode={mode}
                toggle_mode={toggle_mode}
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </>
  );
}
