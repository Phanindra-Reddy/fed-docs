import { Fragment, useState } from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
import { ImSun } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiMoreVertical } from "react-icons/fi";
import Link from "next/link";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { sideNavData } from "../utils/sideNavData";
import FolderStruct from "../components/FolderStruct";

import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useRouter } from "next/router";
import SearchComp from "./SearchComp";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import AutoCompleteSearch from "./AutoCompleteSearch";
import DrawerComp from "./DrawerComp";

const drawerWidth = 300;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function MyLink(props) {
  let { href, children, active, nextTab, ...rest } = props;
  return (
    <Link href={href}>
      {nextTab ? (
        <a
          {...rest}
          className={classNames(
            active ? "bg-violet-500 text-white" : "text-gray-900",
            "hover:bg-violet-500 hover:text-white rounded-md mx-1 block px-4 py-2 text-sm md:text-lg"
          )}
          target="_blank"
        >
          {children}
        </a>
      ) : (
        <a
          {...rest}
          className={classNames(
            active ? "bg-violet-500 text-white" : "text-gray-900",
            "hover:bg-violet-500 hover:text-white rounded-md mx-1 block px-4 py-2 text-sm md:text-lg"
          )}
        >
          {children}
        </a>
      )}
    </Link>
  );
}

function Navbar({ darkTheme, setDarkTheme }) {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <div className="w-full h-16 bg-gradient-to-r from-sky-500 to-indigo-500 border-b-2 border-violet-800 flex items-center justify-between px-5 md:px-10 sticky top-0 z-10">
        <div className="flex items-center justify-center">
          <button
            type="button"
            className="w-8 lg:hidden mr-4 text-2xl text-white hover:bg-gray-100 hover:p-1 hover:rounded-full hover:text-black"
            onClick={handleDrawer}
          >
            <GiHamburgerMenu />
          </button>
          <Link href="/">
            <a className="text-white font-medium text-2xl mr-10">FED Docs</a>
          </Link>
          {/* <div className="hidden lg:block">
            <AutoCompleteSearch/>
          </div> */}
        </div>
        <div className="flex items-center justify-center">
          {/* <button type="button" className="lg:hidden mr-5">
            <span className="text-2xl text-white cursor-pointer">
              <GoSearch />
            </span>
          </button> */}

          <div className="mr-5 hidden md:block">
            <Link href="https://fed-docs-ide.netlify.app/">
              <a
                className="text-white font-medium text-lg mr-3 hover:underline"
                target="_blank"
              >
                IDE
              </a>
            </Link>
            <Link href="/playgrounds">
              <a className="text-white font-medium text-lg mr-3 hover:underline">
                Playgrounds
              </a>
            </Link>

            <Link href="/learning-paths">
              <a className="text-white font-medium text-lg mr-3 hover:underline">
                Learning Paths
              </a>
            </Link>

            <Link href="/projects">
              <a className="text-white font-medium text-lg mr-3 hover:underline">
                Projects
              </a>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => {
              setDarkTheme(!darkTheme);
            }}
            className="mr-5"
          >
            {!darkTheme ? (
              <span className="text-2xl text-gray-800">
                <BsFillMoonFill />
              </span>
            ) : (
              <span className="text-2xl text-white">
                <ImSun />
              </span>
            )}
          </button>

          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="text-white text-2xl md:text-3xl py-1">
                <FiMoreVertical />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/blog" active={active}>
                        Blog
                      </MyLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/bookmarks" active={active}>
                        Bookmarks
                      </MyLink>
                    )}
                  </Menu.Item>
                </div>
                {/* <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/javascript" active={active}>
                        JavaScript
                      </MyLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/reactjs" active={active}>
                        Reactjs
                      </MyLink>
                    )}
                  </Menu.Item>
                </div> */}
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink
                        href="https://fed-docs-ide.netlify.app/"
                        active={active}
                        nextTab="true"
                      >
                        IDE
                      </MyLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/playgrounds" active={active}>
                        Playgrounds
                      </MyLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/learning-paths" active={active}>
                        Learning Paths
                      </MyLink>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/projects" active={active}>
                        Projects
                      </MyLink>
                    )}
                  </Menu.Item>
                </div>
                {/* <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/" active={active}>
                        Home
                      </MyLink>
                    )}
                  </Menu.Item>
                </div> */}
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <MyLink href="/dev" active={active}>
                        Dev
                      </MyLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>

      <Box>
        <SwipeableDrawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(!drawerOpen)}
          onOpen={() => setDrawerOpen(!drawerOpen)}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <DrawerComp data={sideNavData} handleDrawer={handleDrawer} />
          {/* {sideNavData?.map((data) => (
            <DrawerComp
              key={data.id}
              data={data}
            />
          ))} */}
        </SwipeableDrawer>
      </Box>
    </>
  );
}

export default Navbar;
