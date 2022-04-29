import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineGlobeAlt } from "react-icons/hi";

function Dev() {
  const router = useRouter();

  const handleIconRoute = (url) => {
    router.push(url)
  };

  return (
    <>
      <div className="h-screen dark:bg-gray-700 flex flex-col items-center pt-10">
        <Image src="/phanindra.png" alt="my_image" height="200" width="200" />

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center my-10">
            <h1 className="font-medium text-5xl h-16 text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:to-fuchsia-800">
              Phanindra Reddy
            </h1>
            <h4 className="text-3xl h-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
              Front-End Developer
            </h4>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={() =>
                handleIconRoute(
                  "https://www.linkedin.com/in/phanindra-reddy-maram-747973145/"
                )
              }
              className="cursor-pointer text-3xl text-blue-500 mr-5"
            >
              <BsLinkedin />
            </button>

            <button
              type="button"
              onClick={() =>
                handleIconRoute("https://github.com/Phanindra-Reddy/")
              }
              className="cursor-pointer text-3xl mr-5 dark:text-gray-100"
            >
              <BsGithub />
            </button>

            <button
              type="button"
              onClick={() =>
                handleIconRoute(
                  "https://phanindra-reddy.github.io/react-portfolio/#/"
                )
              }
              className="cursor-pointer text-4xl dark:text-white"
            >
              <HiOutlineGlobeAlt />
            </button>
          </div>

          <div className="mt-4">
            <Image src="/signature.svg" alt="sign" height={100} width={300} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dev;
