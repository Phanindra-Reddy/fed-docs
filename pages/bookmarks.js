import { useState, useEffect } from "react";
import moment from "moment";
import { useRouter } from "next/router";

import Link from "next/link";
import { Scrollbars } from "react-custom-scrollbars-2";
import { getCategories } from "../services/index";

import SideNav from "../components/SideNav";
import CategoryPagination from "../components/CategoryPagination";
import MouseOverPopover from "../components/MouseOverPopover";
import Footer from "../components/Footer";
import { MdDelete } from "react-icons/md";
import { notifyError } from "../utils/toaster";
import {ToastContainer} from "react-toastify";

function BookmarksComp({ categories }) {
  const router = useRouter();
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookmarks"));
    setBookmarks(data);
  }, []);

  const handleCategory = (val) => {
    router.push({
      pathname: `blog/search`,
      search: `?category=${val}`,
    });
  };

  const deleteBookmark = (id, name) => {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    var remBookmarks = bookmarks.filter((item)=>item.time !== id );
    localStorage.setItem("bookmarks", JSON.stringify(remBookmarks));
    setBookmarks(remBookmarks);
    notifyError(`${name} bookmark deleted successfully.`);
  };

  return (
    <>
      <ToastContainer />
      <div
        className={`flex flex-col min-h-screen bg-gray-100 dark:bg-gray-700`}
      >
        <div className="flex-1 mt-5">
          <div className="flex flex-row">
            <div className="hidden lg:block lg:basis-1/6 h-96 sticky top-20">
              <h2 className="font-medium underline text-3xl ml-5 mb-5 dark:text-white">
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
            <div className="w-full lg:basis-4/6">
              <h2 className="font-medium underline text-3xl ml-5 mb-5 dark:text-white">
                Bookmarks
              </h2>
              <div className="flex flex-col mx-5 md:mx-10">
                {/* {bookmarks?.length === 0 && (
                <p className="text-center my-48 lg:mt-16 font-medium text-3xl dark:text-white flex flex-col md:flex-row items-center justify-center">
                  No bookmarks!
                  <span className="text-6xl">🙂</span>
                </p>
              )} */}
                {bookmarks?.length > 0 ? (
                  bookmarks.map((item, i) => (
                    <div
                      key={item.time}
                      className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white p-2 mb-5 rounded-md border-2 hover:border-blue-700 dark:bg-gray-500 dark:text-white"
                    >
                      <Link href={item?.href}>
                        <a className="font-medium text-xl hover:text-blue-700">
                          {item?.title?.length > 30 ? (
                            //? item?.title?.slice(0, 30) + "..."
                            <MouseOverPopover data={item?.title} />
                          ) : (
                            item?.title
                          )}
                        </a>
                      </Link>
                      <p className="text-sm text-gray-400 dark:text-gray-100 flex items-center">
                        Bookmarked on: {moment(item?.time).format("llll")}
                        <button
                          type="button"
                          onClick={() => deleteBookmark(item?.time, item?.title)}
                          className="text-red-600 text-xl ml-5"
                        >
                          <MdDelete />
                        </button>
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center my-48 lg:mt-16 font-medium text-3xl dark:text-white flex flex-col md:flex-row items-center justify-center">
                    No bookmarks!
                    <span className="text-6xl">🙂</span>
                  </p>
                )}
              </div>
            </div>
            <div className="hidden lg:block lg:basis-1/6 h-96 sticky top-20">
              <h2 className="font-medium underline text-3xl mb-5 dark:text-white">
                Tech Stack
              </h2>
              <Scrollbars>
                <SideNav />
              </Scrollbars>
            </div>
          </div>
          <div className="w-full lg:hidden mb-5 ">
            <CategoryPagination
              categories={categories}
              handleCategory={handleCategory}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BookmarksComp;

export async function getStaticProps() {
  const categories = await getCategories();

  return {
    props: {
      categories,
    },
  };
}
