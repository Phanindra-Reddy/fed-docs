import Image from "next/image";
import Link from "next/link";

import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3, IoIosArrowRoundForward } from "react-icons/io";
import {
  SiTypescript,
  SiReactrouter,
  SiMaterialui,
  SiChakraui,
  SiTailwindcss,
  SiRedux,
  SiNextdotjs,
  SiJavascript,
} from "react-icons/si";
import { FaReact, FaBootstrap } from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="py-12 flex flex-col items-center justify-center md:px-20 px-5 dark:bg-gray-700 dark:text-white">
      <div className="mb-8">
        <Image
          src="/fed-canvas.png"
          alt="fed-canvas"
          width={200}
          height={120}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="mb-1 font-medium text-xl md:text-3xl dark:text-white">
          Welcome to <span className="text-orange-600">F</span>
          <span className="text-yellow-600">E</span>
          <span className="text-blue-400">D</span> Documentation
        </h1>
        <p className="mb-2">
          <span className="text-orange-600">Front </span>
          <span className="text-yellow-600">End </span>
          <span className="text-blue-400">Development</span>
        </p>
        <p className="break-words mb-2 font-extralight md:text-xl dark:text-white">
          A Place where you will learn about all latest frontend technologies
          including such as HTML, CSS, Javascript, Reactjs, Redux, Nextjs,
          Material-Ui, Bootstrap, Tailwind CSS, Chakra-Ui and many more...
        </p>
        <div className="flex flex-wrap items-center justify-center my-2">
          <span className="text-3xl text-orange-700">
            <ImHtmlFive />
          </span>
          <span className="text-3xl mr-3 text-blue-700">
            <IoLogoCss3 />
          </span>
          <span className="text-3xl mr-3 text-teal-600">
            <SiChakraui />
          </span>
          <span className="text-3xl mr-3 text-blue-800">
            <FaBootstrap />
          </span>
          <span className="text-3xl mr-3 text-blue-500">
            <SiMaterialui />
          </span>
          <span className="text-3xl mr-3 text-sky-400">
            <SiTailwindcss />
          </span>
          <span className="text-3xl mr-3 text-yellow-500">
            <SiJavascript />
          </span>
          <span className="text-3xl mr-3 text-blue-600">
            <SiTypescript />
          </span>
          <span className="text-3xl mr-3 text-sky-500">
            <FaReact />
          </span>
          <span className="text-3xl mr-3 text-violet-600">
            <SiRedux />
          </span>
          <span className="text-3xl mr-3">
            <SiReactrouter />
          </span>
          <span className="text-3xl mr-3">
            <SiNextdotjs />
          </span>
        </div>
        <Link href="/javascript" passHref>
          <span className="flex items-center border-2 rounded-md border-blue-600 font-medium text-xl hover:text-white hover:bg-blue-600 mt-3 py-2 px-2 dark:text-white cursor-pointer">
            <span>Get Started</span>
            <span className="ml-3 text-3xl">
              <IoIosArrowRoundForward />
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
}
