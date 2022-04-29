import Link from "next/link";
import { BsBookmarkPlus, BsFillBookmarkPlusFill } from "react-icons/bs";
import moment from "moment";
import {useRouter} from "next/router";

const BlogPostBlock = (props) => {

    const router = useRouter();
   
    const {blog, handleCategory} = props
    const {id, titleName, slug, createdAt, excerpt,fED_Categories} = blog
    
    return (
      <div key={id} className="bg-white mb-5 mx-5 rounded-md border-2 hover:border-2 hover:border-blue-700">
        <div className="p-2 sm:px-4 sm:py-2">
          <div className="my-2">
            <Link href={router?.query?.category === undefined ? `blog/${slug}` : `${slug}`}>
              <a className="text-1xl font-medium cursor-pointer hover:text-blue-700 text-2xl">
                {titleName}
              </a>
            </Link>
            <p className="mt-5">
              {excerpt}
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-between my-3">
            <div className="flex flex-row items-center">
              {fED_Categories?.map((tag, i) => {
                return (
                  <button type="button" onClick={()=>handleCategory(tag?.slug)} key={i} className="mr-4 my-5 md:my-0 cursor-pointer  hover:p-1 hover:rounded-md hover:border-2 hover:border-gray-200 hover:bg-slate-100">
                      #{tag.slug}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center justify-between">
              <p className="mr-5">Published on: {moment(createdAt).format('MMMM Do, YYYY')}</p>
              {/* <button type="button" onClick={handleBookmark} className="rounded-full h-10 w-10 hover:bg-gray-200 flex items-center justify-center">
                <BsBookmarkPlus className="text-xl" />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
};


export default BlogPostBlock;