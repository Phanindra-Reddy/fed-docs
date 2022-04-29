import Link from "next/link";

function JsMainComp() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/javascript.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        opacity: "0.7"
      }}
    >
      <div className="text-lg text-black font-medium p-5 px-10">
        <p>
          <b>JavaScript</b> (JS) is a lightweight, interpreted, or just-in-time
          compiled programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          single-threaded, dynamic language, supporting object-oriented,
          imperative, and declarative (e.g. functional programming) styles. Read
          more about JavaScript.
        </p>
        <br/>
        <p>
          This section is dedicated to the JavaScript language itself, and not
          the parts that are specific to Web pages or other host environments.
          For information about API specifics to Web pages, please see Web APIs
          and DOM.
        </p>
        <br/>
        <p>
          The standards for JavaScript are the ECMAScript Language Specification
          (ECMA-262) and the ECMAScript Internationalization API specification
          (ECMA-402). The JavaScript documentation throughout MDN is based on
          the latest draft versions of ECMA-262 and ECMA-402. And in cases where
          some proposals for new ECMAScript features have already been
          implemented in browsers, documentation and examples in MDN articles
          may use some of those new features.
        </p>
        <br/>
        <p className="mb-5">
          Do not confuse JavaScript with the Java programming language. Both
          &ldquo;Java&ldquo; and &ldquo;JavaScript&ldquo; are trademarks or registered trademarks of
          Oracle in the U.S. and other countries. However, the two programming
          languages have very different syntax, semantics, and use.
        </p>
        <Link href="/javascript/var-keyword">
          <a className="p-2 text-black rounded-md border-2 border-violet-700 hover:bg-violet-700 hover:text-white">Get Started with JS</a>
        </Link>
      </div>
    </div>
  );
}

export default JsMainComp;