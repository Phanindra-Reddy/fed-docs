import Link from "next/link";
import Image from "next/image";

function ReactMainComp() {
  return (
    <div
      className="min-h-screen container"
      style={{
        background: "url('/react1.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",        
        // opacity: "0.8"
      }}
    >
      <div className="text-lg text-black font-medium p-5 px-10">
        <p>
          <b>React</b> is a javascript library for building user interfaces.
          <br />
          <span className="text-2xl">
            Declarative <br />
          </span>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
          Declarative views make your code more predictable and easier to debug.
        </p>
        <br />
        <p>
          <span className="text-2xl">
            Component-Based
            <br />
          </span>
          Build encapsulated components that manage their own state, then
          compose them to make complex UIs. Since component logic is written in
          JavaScript instead of templates, you can easily pass rich data through
          your app and keep state out of the DOM.
        </p>
        <br />
        <p>
          <span className="text-2xl">
            Learn Once, Write Anywhere
            <br />
          </span>
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React without rewriting existing code.
          React can also render on the server using Node and power mobile apps
          using React Native.
        </p>
        <br />
        <p className="mb-5"></p>
        <Link href="/reactjs/create-react-app">
          <a className="p-2 text-black rounded-md border-2 border-violet-700 hover:bg-violet-700 hover:text-white">
            Get Started with React.js
          </a>
        </Link>
      </div>
    </div>
  );
}

export default ReactMainComp;
