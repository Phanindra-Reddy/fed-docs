import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Footer from "../../components/Footer";
import SideNav from "../../components/SideNav";
import { Scrollbars } from "react-custom-scrollbars-2";
import { getReactTopic, getReactTopics } from "../../services";

import { BsBookmarkPlus, BsFillBookmarkPlusFill } from "react-icons/bs";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Tooltip from "@mui/material/Tooltip";
import HeadComp from "../../components/HeadComp";

import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import { ToastContainer } from "react-toastify";
import { notifyInfo, notifySuccess } from "../../utils/toaster";

function ReactTopic({ data }) {
  //const router = useRouter();

  const [bookmarkPage, setBookmarkPage] = useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleBookmark = () => {
    var currentPageHref = window.location.href;
    var bookmarklink = {
      href: window.location.href,
      title: window.document.title,
      time: new Date(),
    };

    if (localStorage.getItem("bookmarks") === null) {
      var bookmarks = [];
      bookmarks.push(bookmarklink);
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
      notifySuccess(`${data?.topicName} Bookmarked successfully.`);
    } else {
      var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
      if (bookmarks.find((bookmark) => bookmark.href === currentPageHref)) {
        notifyInfo(`${data?.topicName} Already bookmarked successfully.`);
        return;
      } else {
        bookmarks.push(bookmarklink);
        notifySuccess(`${data?.topicName} Bookmarked successfully.`);
      }
      localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    setBookmarkPage(bookmarklink);
  };

  return (
    <>
      <HeadComp title="Reactjs" description={data?.topicName} />
      <ToastContainer />
      <div className="flex flex-col h-screen">
        <div className="flex-1">
          <div className="flex flex-row">
            <div className="hidden lg:block lg:w-1/4 h-screen sticky top-0">
              <Scrollbars>
                <SideNav />
              </Scrollbars>
            </div>
            <div className="w-full lg:w-3/4 p-5 dark:bg-gray-700 dark:text-white">
              <RichText
                content={data?.featuredTopic?.raw?.children}
                renderers={{
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-semibold mt-5 mb-3">
                      {children}
                    </h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold mt-5 mb-3">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-semibold mt-5 mb-3">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-xl mt-5 mb-3">{children}</h4>
                  ),
                  h5: ({ children }) => (
                    <h5 className="text-lg mt-5 mb-3">{children}</h5>
                  ),
                  h6: ({ children }) => (
                    <h6 className="mt-5 mb-3">{children}</h6>
                  ),
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-1 rounded-md border border-gray-300 text-black text-lg">
                      {children}
                    </code>
                  ),
                  code_block: ({ children }) => {
                    return (
                      <pre className="line-numbers language-js">
                        <code>{children}</code>
                      </pre>
                    );
                  },
                  bold: ({ children }) => <strong>{children}</strong>,
                  img: ({
                    src,
                    altText,
                    handle,
                    height,
                    width,
                    blurDataUrl,
                  }) => (
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        margin: "1rem 0",
                      }}
                    >
                      <Image
                        src={src}
                        alt={altText}
                        height={height}
                        width={width}
                        objectFit="cover"
                        placeholder={blurDataUrl ? "blur" : "empty"}
                        blurDataURL={blurDataUrl}
                      />
                    </div>
                  ),
                  iframe: ({ url, width, height }) => (
                    <iframe
                      // style={{
                      //   width: { width },
                      //   height: { height },
                      // }}
                      //src={url}
                      src={
                        url.includes("watch")
                          ? url.replace("watch?v=", "embed/")
                          : url
                      }
                      loading="lazy"
                      allow="fullscreen"
                      frameBorder="0"
                      referrerPolicy="no-referrer"
                      width="100%"
                      height="500"
                      className="my-5"
                    >
                      <p>
                        Your browser doesn&apos;t support HTML5 video. Here is a{" "}
                        <a href={url}>link to the video</a> instead.
                      </p>
                    </iframe>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-outside text-lg pl-10 mb-3">
                      {children}
                    </ol>
                  ),
                  ul: ({ children }) => (
                    <ul className="list-disc list-outside text-lg pl-10 mb-3">
                      {children}
                    </ul>
                  ),
                  li: ({ children }) => <li>{children}</li>,
                  p: ({ children }) => (
                    <p className="text-lg mb-3">{children}</p>
                  ),
                  a: ({ children, openInNewTab, href, rel, ...rest }) => {
                    if (href.match(/^https?:\/\/|^\/\//i)) {
                      return (
                        <a
                          href={href}
                          target={openInNewTab ? "_blank" : "_self"}
                          //rel={rel || 'noopener noreferrer'}
                          rel="noreferrer"
                          {...rest}
                          className="text-blue-700 hover:underline"
                        >
                          {children}
                        </a>
                      );
                    }

                    return (
                      <Link href={href}>
                        <a {...rest}>{children}</a>
                      </Link>
                    );
                  },
                  italic: ({ children }) => (
                    <i className="italic-class" style={{}}>
                      {children}
                    </i>
                  ),
                  underline: ({ children }) => (
                    <u role="button">{children} test</u>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-blue-500 border-l-4 p-3 text-lg rounded-md bg-gray-100 dark:text-black my-5">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => <table>{children}</table>,
                  table_head: ({ children }) => <thead>{children}</thead>,
                  table_body: ({ children }) => <tbody>{children}</tbody>,
                  table_row: ({ children }) => <tr>{children}</tr>,
                  table_cell: ({ children }) => <td className="border-2 border-gray-400 md:p-2 text-center">{children}</td>,
                  table_header_cell: ({ children }) => <th>{children}</th>,
                  list_item_child: ({ children }) => <p>{children}</p>,
                }}
              />
            </div>
          </div>
          <Footer />
        </div>

        <button
          type="button"
          onClick={handleBookmark}
          className="z-10 cursor-pointer fixed right-5 bottom-5 md:right-10 md:bottom-10"
        >
          <Tooltip title="Bookmark this page" placement="top" arrow>
            <span className="w-12 h-12 bg-blue-500 hover:bg-blue-700 rounded-full text-white flex items-center justify-center">
              {/* { bookmarkPage === href ? <BsFillBookmarkPlusFill/> :<BsBookmarkPlus />} */}
              <BsBookmarkPlus />
            </span>
          </Tooltip>
        </button>
      </div>
    </>
  );
}

export default ReactTopic;

export async function getStaticProps({ params }) {
  const data = await getReactTopic(params.slug);

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const topics = await getReactTopics();

  return {
    paths: topics.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
