import Link from "next/link";

function Footer() {
  return (
    <div className="w-full text-center min-h-16 bg-blue-200 py-4 dark:bg-gray-600">
      <span className="dark:text-white font-sans md:text-xl">
        FED Docs<sup>V 0.0.5</sup> &copy; 2022 Created by{" "}
        <Link href="https://phanindra-reddy.github.io/react-portfolio/#/">
          <a target="_blank" className="underline hover:text-fuchsia-500">Phanindra Reddy</a>
        </Link>
      </span>
    </div>
  );
}

export default Footer;
