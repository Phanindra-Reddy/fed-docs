import Link from "next/link";
import {useRouter} from "next/router";
import { Scrollbars } from "react-custom-scrollbars-2";
import { getBlogs, getCategories, getBlogsByCategory } from "../../services/index";

import SideNav from "../../components/SideNav";
import BlogPostBlock from "../../components/BlogPostBlock";
import CategoryPagination from "../../components/CategoryPagination";

function Blog({ blogs, categories }) {

  const router = useRouter();
  
  const handleCategory = (val) => {
    router.push({
      pathname:`blog/search`,
      search:`?category=${val}`,
    })
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-700">
      <header className="text-center border-b-2 py-5">
        <h1 className="mb-1 font-medium text-xl md:text-3xl dark:text-white">
          <span className="text-orange-600">F</span>
          <span className="text-yellow-600">E</span>
          <span className="text-blue-400">D</span> Docs Blog
        </h1>
        <p className="mb-2">
          <span className="text-orange-600">Front </span>
          <span className="text-yellow-600">End </span>
          <span className="text-blue-400">Development</span>
        </p>
        <p className="break-words mb-2 font-extralight md:text-xl dark:text-white">
          The latest news about front-end technologies from FED docs team.
        </p>
      </header>

      <div className="flex-1 mt-5">
        <div className="w-full lg:hidden mb-5">
          <CategoryPagination categories={categories} handleCategory={handleCategory} />
        </div>
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
                  <div key={i} onClick={()=>handleCategory(tag?.slug)} type="button" className=" text-black hover:bg-blue-200 block px-3 py-2 mx-2 rounded-md text-base font-normal hover:text-blue-700 dark:hover:text-black hover:underline my-2 dark:text-white cursor-pointer">
                    {tag?.category}
                  </div>
                );
              })}
            </Scrollbars>
          </div>
          <div className="w-full lg:basis-4/6">
            {blogs.map((blog, i) => (
              <BlogPostBlock key={i} blog={blog.node} handleCategory={handleCategory} />
            ))}
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
      </div>
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const blogs = await getBlogs();
  const categories = await getCategories();

  return {
    props: {
      blogs,
      categories,
    },
  };
}
