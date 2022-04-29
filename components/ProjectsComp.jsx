import { useState } from "react";
import { Tab } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectsComp() {
  let [categories] = useState({
    HTML_CSS: [
      {
        id: 1,
        projectName: "Landing Page",
        projectImageUrl:
          "https://i.ytimg.com/vi/hVdTQWASliE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAD15mLbDIe-tKbnNzxrhi8uEGe6w",
        projectVideoUrl: "https://www.youtube.com/watch?v=hVdTQWASliE",
      },
      {
        id: 2,
        projectName: "Tribute Page",
        projectImageUrl:
          "https://i.ytimg.com/vi/BtExsVNopCs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAV_8MqYILZ-r1RY9pkR2sS8RDeA",
        projectVideoUrl: "https://www.youtube.com/watch?v=BtExsVNopCs",
      },
      {
        id: 3,
        projectName: "CSS Animation Website",
        projectImageUrl:
          "https://i.ytimg.com/vi/1ygRRP-y9pw/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAtKjCSKZbL_TiC0u5-MTZkxHxlWA",
        projectVideoUrl: "https://www.youtube.com/watch?v=1ygRRP-y9pw",
      },
      {
        id: 4,
        projectName: "Paallex Website",
        projectImageUrl:
          "https://i.ytimg.com/vi/JttTcnidSdQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA1fIIk2KRVArYcAlT8WHLZUrq1ig",
        projectVideoUrl: "https://www.youtube.com/watch?v=JttTcnidSdQ",
      },
      {
        id: 5,
        projectName: "Photography Website",
        projectImageUrl:
          "https://i.ytimg.com/vi/9-AK7fUXL4k/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCAmuM_PfwT4el2NpcDPxG9hihZ7g",
        projectVideoUrl: "https://www.youtube.com/watch?v=9-AK7fUXL4k",
      },
      {
        id: 6,
        projectName: "SurveyForm",
        projectImageUrl:
          "https://i.ytimg.com/vi/-YVnVN_JTqQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4t7UDjfIlF3Ty2L2KLQJ1wkyYNw",
        projectVideoUrl: "https://www.youtube.com/watch?v=-YVnVN_JTqQ",
      },
      {
        id: 7,
        projectName: "Technical Docs",
        projectImageUrl:
          "https://i.ytimg.com/vi/hdMEqwkMTgs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDSpoyPCb-PQtb5vv247QQsRoHaRw",
        projectVideoUrl: "https://www.youtube.com/watch?v=K5VXWV4N6f0",
      },
      {
        id: 8,
        projectName: "Social Media App clone",
        projectImageUrl:
          "https://i.ytimg.com/vi/NljIHlZRTTE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCclK-y-X5sjQr95AfYMyQcpYIK3w",
        projectVideoUrl: "https://www.youtube.com/watch?v=NljIHlZRTTE",
      },
      {
        id: 9,
        projectName: "Animated Website",
        projectImageUrl:
          "https://i.ytimg.com/vi/gWai7fYp9PY/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBK_-KcH-x92mysQWTVHbI2syV2GA",
        projectVideoUrl: "https://www.youtube.com/watch?v=gWai7fYp9PY",
      },
      {
        id: 10,
        projectName: "Portfolio",
        projectImageUrl:
          "https://i.ytimg.com/vi/lgeoAUvoRJU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCe3q8SMCPUOnZIUbBhtkjGqvlX1Q",
        projectVideoUrl: "https://www.youtube.com/watch?v=lgeoAUvoRJU",
      },
    ],
    JavaScript: [
      {
        id: 1,
        projectName: "TODO App",
        projectImageUrl:
          "https://i.ytimg.com/vi/Ttf3CEsEwMQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDr3S32n0LN73inE2Xd1pwJtl5bbQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=Ttf3CEsEwMQ",
      },
      {
        id: 2,
        projectName: "Tic Tac Toe",
        projectImageUrl:
          "https://i.ytimg.com/vi/B3pmT7Cpi24/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBKqu1w0L9AEaqlqAi7c3tGKEOMHA",
        projectVideoUrl: "https://www.youtube.com/watch?v=Y-GkMjUZsmM",
      },
      {
        id: 3,
        projectName: "Calculator",
        projectImageUrl:
          "https://i.ytimg.com/vi/j59qQ7YWLxw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBMwRusE6Fn8uovNza_YKEJnjX7_A",
        projectVideoUrl: "https://www.youtube.com/watch?v=j59qQ7YWLxw",
      },
      {
        id: 4,
        projectName: "Whack-a-mole game",
        projectImageUrl:
          "https://i.ytimg.com/vi/toNFfAaWghU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD85jWe5r4Dg8_cpdiV-QlTqBPnWA",
        projectVideoUrl: "https://www.youtube.com/watch?v=rJU3tHLgb_c",
      },
      {
        id: 5,
        projectName: "Real-time Weather app",
        projectImageUrl:
          "https://i.ytimg.com/vi/wPElVpR1rwA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCToeqT4HPMqL9cE_23jAz2jv1aKQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=wPElVpR1rwA",
      },
      {
        id: 6,
        projectName: "Netflix clone",
        projectImageUrl:
          "https://i.ytimg.com/vi/P7t13SGytRk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBFlila8gJeCm85DVL4LJy2utYnQA",
        projectVideoUrl: "https://www.youtube.com/watch?v=P7t13SGytRk",
      },
      {
        id: 7,
        projectName: "Food Recipe App",
        projectImageUrl:
          "https://i.ytimg.com/vi/opikz5x_1ak/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAzLD7EyQq5HXpd8_LdcWmYR29PkQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=opikz5x_1ak",
      },
      {
        id: 8,
        projectName: "Build a Music Player",
        projectImageUrl:
          "https://i.ytimg.com/vi/QTHRWGn_sJw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBwScmrEW_m0-wawwzmJ7gnKWfBhA",
        projectVideoUrl: "https://www.youtube.com/watch?v=QTHRWGn_sJw",
      },
      {
        id: 9,
        projectName: "Responsive Portfolio",
        projectImageUrl:
          "https://i.ytimg.com/vi/27JtRAI3QO8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt31l_drbOJ_I91k5yyDgc6GZkwA",
        projectVideoUrl: "https://www.youtube.com/watch?v=27JtRAI3QO8",
      },
      {
        id: 10,
        projectName: "Wordle Clone",
        projectImageUrl:
          "https://i.ytimg.com/vi/ckjRsPaWHX8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVCmCO-a1rqu2xrqwuwjo_JlKufg",
        projectVideoUrl: "https://www.youtube.com/watch?v=ckjRsPaWHX8",
      },
    ],
    React: [
      {
        id: 1,
        projectName: "React Expense Tracker",
        projectImageUrl:
          "https://i.ytimg.com/vi/XuFDcZABiDQ/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBnqvqc0IZbaj4vT7PKtuRoDKamzQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=XuFDcZABiDQ",
      },
      {
        id: 2,
        projectName: "Zomato Clone",
        projectImageUrl:
          "https://i.ytimg.com/vi/TDLc9AWEcFA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA6y9O25f_hWpzWxENyPZUfdGRgKQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=TDLc9AWEcFA",
      },
      {
        id: 3,
        projectName: "Restaurant Website",
        projectImageUrl:
          "https://i.ytimg.com/vi/4oV65GVVits/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDL5DuSEJ8p_hTF94E2-3vSgaZmQw",
        projectVideoUrl: "https://www.youtube.com/watch?v=4oV65GVVits&t=78s",
      },
      {
        id: 4,
        projectName: "React Notes App",
        projectImageUrl:
          "https://i.ytimg.com/vi/8KB3DHI-QbM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCzxibsc7cLjx9K32zPQq_SgSpEBw",
        projectVideoUrl: "https://www.youtube.com/watch?v=8KB3DHI-QbM",
      },
      {
        id: 5,
        projectName: "Cryptocurrency App",
        projectImageUrl:
          "https://i.ytimg.com/vi/9DDX3US3kss/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCPFrkt8ts5POM2NvOd9rlegLMMYg",
        projectVideoUrl: "https://www.youtube.com/watch?v=9DDX3US3kss",
      },
      {
        id: 6,
        projectName: "Chat Application",
        projectImageUrl:
          "https://i.ytimg.com/vi/jcOKU9f86XE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCRHZwnbkRMj3wxg6MX8-W9ehNkPw",
        projectVideoUrl: "https://www.youtube.com/watch?v=jcOKU9f86XE",
      },
      {
        id: 7,
        projectName: "React Admin Panel",
        projectImageUrl:
          "https://i.ytimg.com/vi/K7vHoUwClaM/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBayJJ26uQBj4jseHUc7bx3xjtjJQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=K7vHoUwClaM&t=113s",
      },
      {
        id: 8,
        projectName: "Social Media App",
        projectImageUrl:
          "https://i.ytimg.com/vi/1RHDhtbqo94/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBX2-0ADU_AkP67pESMpBLLrY_WIQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=1RHDhtbqo94&t=190s",
      },
      {
        id: 9,
        projectName: "React Youtube Clone",
        projectImageUrl:
          "https://i.ytimg.com/vi/Mos5QJAje28/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6_yMDiHNpn8Un5iooBQ4rC6TCVQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=Mos5QJAje28",
      },
      {
        id: 10,
        projectName: "React Blog App",
        projectImageUrl:
          "https://i.ytimg.com/vi/tlTdbc5byAs/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCelIE5n-lvacFU_9N8-nQBKKEyTg",
        projectVideoUrl: "https://www.youtube.com/watch?v=tlTdbc5byAs&t=69s",
      },
    ],
    Nextjs: [
      {
        id: 1,
        projectName: "Landing Page",
        projectImageUrl:
          "https://i.ytimg.com/vi/iGBERMGMIvc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATZqjT4oxwHRlVNLMSZUdXI599Jg",
        projectVideoUrl: "https://www.youtube.com/watch?v=iGBERMGMIvc",
      },
      {
        id: 2,
        projectName: "Nextjs CMS blog",
        projectImageUrl:
          "https://i.ytimg.com/vi/HYv55DhgTuA/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBrJURkzjIsbkHEZHAJT5o5TPKo_g",
        projectVideoUrl: "https://www.youtube.com/watch?v=HYv55DhgTuA&t",
      },
      {
        id: 3,
        projectName: "Hulu App",
        projectImageUrl:
          "https://i.ytimg.com/vi/MqDlsjc8GLo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBx5wDErShsbdtzUiIfSfKwFcCHnQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=MqDlsjc8GLo&t",
      },
      {
        id: 4,
        projectName: "Food Ordering App",
        projectImageUrl:
          "https://i.ytimg.com/vi/Z-hACIsjv4E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDnRdFGvWjAFixxyN0J1TvZ8Cj1-w",
        projectVideoUrl: "https://www.youtube.com/watch?v=Z-hACIsjv4E&t=123s",
      },
      {
        id: 5,
        projectName: "Twitter Clone",
        projectImageUrl:
          "https://i.ytimg.com/vi/5Wak0iyGCrc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBThEN0qTeeSI0vrM7caTqNZpeyRw",
        projectVideoUrl: "https://www.youtube.com/watch?v=5Wak0iyGCrc",
      },
      {
        id: 6,
        projectName: "Real Estate App",
        projectImageUrl:
          "https://i.ytimg.com/vi/y47gYvXchXM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjZ5ofaRSCmk-XmrFv13rp0CABTw",
        projectVideoUrl: "https://www.youtube.com/watch?v=y47gYvXchXM&t",
      },
      {
        id: 7,
        projectName: "Personal/Agency Website",
        projectImageUrl:
          "https://i.ytimg.com/vi/erpw_22yAJM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK2ZzZlye0G6Ir04kFz1ZbTIc27g",
        projectVideoUrl: "https://www.youtube.com/watch?v=erpw_22yAJM",
      },
      {
        id: 8,
        projectName: "Weather App",
        projectImageUrl:
          "https://i.ytimg.com/vi/6UlpfXQWysg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBX8_SNvty0cVxlX25-wDVqmChVvA",
        projectVideoUrl: "https://www.youtube.com/watch?v=6UlpfXQWysg",
      },
      {
        id: 9,
        projectName: "Video Conference App",
        projectImageUrl:
          "https://i.ytimg.com/vi/1Jj__vAh6w0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAQ676NfRU8fekkgVUiKibf16g8bQ",
        projectVideoUrl: "https://www.youtube.com/watch?v=1Jj__vAh6w0&t",
      },
      {
        id: 10,
        projectName: "Nextjs Portfolio",
        projectImageUrl:
          "https://i.ytimg.com/vi/OPaLnMw2i_0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAqmdG0gdsyKhbg2nlWLly3wEjieA",
        projectVideoUrl: "https://www.youtube.com/watch?v=OPaLnMw2i_0",
      },
    ],
  });

  return (
    <div className="mt-5">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900 p-1 mx-2 md:mx-10">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700",
                  "focus:outline-none ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:ring-2",
                  selected
                    ? "bg-white shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel key={idx}>
              <div className="grid md:grid-cols-3 gap-8 mx-2 md:mx-10 my-10">
                {posts.map((post) => (
                  <Link href={post?.projectVideoUrl} key={post.id} passHref>
                    <a
                      target="_blank"
                      className="hover:border-2 hover:border-gray-50 hover:p-2 hover:rounded-md hover:bg-blue-400 dark:hover:bg-blue-500 hover:text-white"
                    >
                      <Image
                        src={post?.projectImageUrl}
                        alt="projectImage"
                        width={360}
                        height={202}
                        placeholder="blur"
                        blurDataURL
                      />
                      <h2 className="text-center text-2xl dark:text-white">
                        {post?.projectName}
                      </h2>
                    </a>
                  </Link>
                ))}
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
