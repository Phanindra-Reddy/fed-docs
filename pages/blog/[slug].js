import { useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { getCategories, getBlogs, getBlog } from "../../services/index";

import { RichText } from "@graphcms/rich-text-react-renderer";
import { Scrollbars } from "react-custom-scrollbars-2";
import Footer from "../../components/Footer";
import CategoryPagination from "../../components/CategoryPagination";
import { BsBookmarkPlus, BsFillBookmarkPlusFill } from "react-icons/bs";
import Tooltip from '@mui/material/Tooltip';
import HeadComp from "../../components/HeadComp";

import moment from "moment";
import Prism from "prismjs";
import "prismjs/plugins/line-numbers/prism-line-numbers";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";
import {ToastContainer} from "react-toastify"
import {notifyInfo, notifySuccess} from "../../utils/toaster";



function BlogPost({ data, categories }) {
  const router = useRouter();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCategory = (val) => {
    router.push({
      pathname: `search`,
      search: `?category=${val}`,
    });
  };

  const handleBookmark = () => {

    var currentPageHref = window.location.href;
    var bookmarklink = {
      href:window.location.href,
      title:window.document.title,
      time:new Date(),
    }
    
    if(localStorage.getItem('bookmarks') === null){
      var bookmarks = [];
      bookmarks.push(bookmarklink);
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      notifySuccess(`${data?.titleName} Bookmarked successfully.`);
    } else {
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      if(bookmarks.find((bookmark)=>bookmark.href === currentPageHref)){
        notifyInfo(`${data?.titleName} Already bookmarked successfully.`);  
        return;
      }else{
        bookmarks.push(bookmarklink);
        notifySuccess(`${data?.titleName} Bookmarked successfully.`);
      }
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
  };

  return (
    <>
    <HeadComp title="FED Blog" description={data?.titleName} />
    <ToastContainer/>
      <div className="flex flex-col h-full bg-slate-100 dark:bg-gray-700">
        <div className="flex lg:flex-row flex-col">
          <div className="hidden mx-8 lg:block lg:basis-1/6 h-96 sticky top-20">
            <h2 className="font-medium underline text-3xl mb-5 dark:text-white">
              Categories
            </h2>

            <Scrollbars>
              {categories.map((tag, i) => {
                return (
                  // <Link key={i} href="#">
                  //   <a className="text-black hover:bg-blue-200 block px-3 py-2 mx-2 rounded-md text-base font-normal hover:text-blue-700 dark:hover:text-black hover:underline my-2 dark:text-white">
                  //     {tag.category}
                  //   </a>
                  // </Link>
                  <div
                    key={i}
                    onClick={() => handleCategory(tag?.slug)}
                    type="button"
                    className=" text-black hover:bg-blue-200 block px-3 py-2 mx-2 rounded-md text-base font-normal hover:text-blue-700 dark:hover:text-black hover:underline my-2 dark:text-white cursor-pointer"
                  >
                    {tag?.category}
                  </div>
                );
              })}
            </Scrollbars>
          </div>
          <div className="w-full lg:basis-4/6 lg:mx-auto my-10 p-10 bg-white border-2 border-gray-200 rounded-md dark:bg-gray-500 dark:text-white">
            <p className="mb-5 text-sm text-gray-500 dark:text-white">
              Published on: {moment(data?.createdAt).format("MMMM Do, YYYY")}
            </p>
            <h1 className="text-3xl font-bold mb-5">{data?.titleName}</h1>
            <h5 className="font-xl font-medium mb-5 break-words">{data?.excerpt}</h5>
            <div className="h-16 flex flex-row flex-wrap items-center mb-5">
              {data?.fED_Categories?.map((tag, i) => {
                return (
                  <button
                    type="button"
                    key={i}
                    onClick={() => handleCategory(tag?.slug)}
                    className="mr-5 md:my-0 cursor-pointer  hover:p-1 hover:rounded-md hover:border-2 hover:border-gray-200 hover:bg-slate-100 dark:hover:text-black"
                  >
                    #{tag.slug}
                  </button>
                );
              })}
            </div>
            <RichText
                content={data?.blogContent?.raw?.children}
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
          <div className="w-full lg:hidden mb-10">
            <h1 className="ml-5 mb-2 underline font-medium text-2xl">Categories</h1>
            <CategoryPagination categories={categories} handleCategory={handleCategory} />
          </div>
        </div>
        <Footer />
      </div>
      <button
        type="button"
        onClick={handleBookmark}
        className="z-10 cursor-pointer fixed right-5 bottom-5 md:right-10 md:bottom-10"
      >
        <Tooltip title="Bookmark Page" placement="top" arrow>
        <span className="w-12 h-12 bg-blue-500 hover:bg-blue-700 rounded-full text-white flex items-center justify-center">
          {/* { bookmark === (window.location.href) ? <BsFillBookmarkPlusFill/> :<BsBookmarkPlus />} */}
          <BsBookmarkPlus/>
        </span>
        </Tooltip>
      </button>
    </>
  );
}

export default BlogPost;

export async function getStaticProps({ params }) {
  const data = await getBlog(params.slug);
  const categories = await getCategories();

  return {
    props: {
      data,
      categories,
    },
  };
}

export async function getStaticPaths() {
  const topics = await getBlogs();

  return {
    paths: topics.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false,
  };
}
