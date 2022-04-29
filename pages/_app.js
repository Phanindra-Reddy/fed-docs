import { useState, useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Router from "next/router";
import Navbar from "../components/Navbar";
import HeadComp from "../components/HeadComp";

// Router.events.on("routeChangeStart", () => NProgress.start());
// Router.events.on("routeChangeComplete", () => NProgress.done());
// Router.events.on("routeChangeError", () => NProgress.done());

// NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const [darkTheme, setDarkTheme] = useState(false);

  NProgress.configure({ showSpinner: true });
  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });
  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  return (
    <>
      <div className={darkTheme ? "dark" : ""}>
        <HeadComp
          title="FED Docs"
          description="Front End Development Technologies Documentation."
        />
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
          <Component
            {...pageProps}
            darkTheme={darkTheme}
            setDarkTheme={setDarkTheme}
          />
      </div>
    </>
  );
}

export default MyApp;
