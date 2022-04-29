import {v4 as uuidv4 } from "uuid";
import {FaReact} from "react-icons/fa";
import {SiJavascript} from "react-icons/si";

export const sideNavData = [
  {
    items: [
      {
        items: [
          { id:"js-001", name: "Var", value: "var-keyword",mainTitle:"javascript", },
          { id:"js-002", name: "Let", value: "let-keyword" ,mainTitle:"javascript",},
          { id:"js-003", name: "Const", value: "const-keyword" ,mainTitle:"javascript",},
        ],
        isFolder: true,
        name: "Variables",
        queryName: "variables",
      },
      {
        items: [
          { id:"js-007", name: "Primitive Datatypes", value: "primitive-datatypes",mainTitle:"javascript", },
          // { id:"js-008", name: "Reference Datatypes", value: "reference-datatypes",mainTitle:"javascript", },
          { id:"js-009", name: "Complex Datatypes", value: "complex-datatypes" ,mainTitle:"javascript",},
        ],
        isFolder: true,
        name: "Datatypes",
        queryName: "data-types",
      },
      {
        id:"js-010", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Type Convertion",
        queryName: "type-convertion",
        value: "type-convertion"
      },
      {
        id:"js-011", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Operators",
        queryName: "operators",
        value: "operators"
      },
      {
        items: [
          { id:"js-012",  name: "If...Else condition", value: "if-else-condition" ,mainTitle:"javascript",},
          { id:"js-013", name: "Switch condition", value: "switch" ,mainTitle:"javascript",},
          { id:"js-014", name: "Try/Catch/Throw", value: "try-catch-throw",mainTitle:"javascript", },
        ],
        isFolder: true,
        name: "Conditional Statements",
        queryName: "conditional-statements",
      },
      {
        items: [
          { id:"js-015", name: "While loop", value: "while-loop",mainTitle:"javascript", },
          { id:"js-016", name: "Do While loop", value: "do-while-loop" ,mainTitle:"javascript",},
          { id:"js-017", name: "For loop", value: "for-loop" ,mainTitle:"javascript",},
          { id:"js-018", name: "For In loop", value: "for-in-loop",mainTitle:"javascript", },
          { id:"js-019", name: "For Of loop", value: "for-of-loop",mainTitle:"javascript", },
          { id:"js-020", name: "break/continue", value: "break-continue",mainTitle:"javascript", },
        ],
        isFolder: true,
        name: "Loops",
        queryName: "loops",
      },
      {
        id:"js-021", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Equality ( == vs ===)",
        queryName: "equality",
        value: "equality"
      },
      {
        id:"js-022", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Objects",
        queryName: "objects",
        value: "objects"
      },
      {
        id:"js-023", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Arrays",
        queryName: "arrays",
        value: "arrays"
      },
      {
        id:"js-024", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Set",
        queryName: "set",
        value: "set"
      },
      {
        id:"js-025", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Maps",
        queryName: "maps",
        value: "maps"
      },
      {
        id:"js-026", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Destructuring",
        queryName: "destructuring",
        value: "destructuring"
      },
      {
        id:"js-027", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Functions",
        queryName: "functions",
        value: "functions"
      },
      {
        id:"js-028", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Arrow Functions",
        queryName: "arrow-functions",
        value: "arrow-functions"
      },
      {
        id:"js-029", 
        isFolder: false,
        mainTitle:"javascript",
        name: "This Keyword",
        queryName: "this-keyword",
        value: "this-keyword"
      },
      {
        // items: [
        //   { id:"js-004", name: "Global Scope", value: "global-scope",mainTitle:"javascript", },
        //   { id:"js-005", name: "Lexical Scope", value: "lexical-scope" ,mainTitle:"javascript",},
        //   { id:"js-006", name: "Block Scope", value: "block-scope" ,mainTitle:"javascript",},
        // ],
        id:uuidv4(),
        isFolder: false,
        mainTitle:"javascript",
        name: "Scope",
        queryName: "scope",
        value:"scope",
      },
      {
        items: [
          { id:"js-030", name: "classes", value: "classes" ,mainTitle:"javascript",},
          { id:"js-031", name: "Inheritance", value: "inheritance" ,mainTitle:"javascript",},
        ],
        isFolder: true,
        name: "Classes",
        queryName: "classes",
      },
      {
        items: [
          { id:"js-032", name: "Prototypes", value: "prototypes",mainTitle:"javascript", },
          { id:"js-033", name: "Prototypal Inheritance", value: "prototypal-inheritance",mainTitle:"javascript", },
        ],
        isFolder: true,
        name: "Prototypes",
        queryName: "prototypes",
      },
      {
        items: [
          { id:"js-034", name: "Map", value: "array-map",mainTitle:"javascript", },
          { id:"js-035", name: "ForEach", value: "for-each" ,mainTitle:"javascript",},
          { id:"js-036", name: "Filter", value: "filter" ,mainTitle:"javascript",},
          { id:"js-037", name: "Reduce", value: "reduce" ,mainTitle:"javascript",},
          { id:"js-038", name: "Each", value: "each" ,mainTitle:"javascript",},
          { id:"js-039", name: "Every", value: "every" ,mainTitle:"javascript",},
          { id:"js-040", name: "Sort", value: "sort" ,mainTitle:"javascript",},
          { id:"js-041", name: "Some", value: "some" ,mainTitle:"javascript",},
          { id:"js-042", name: "Flat", value: "flat" ,mainTitle:"javascript",},
          { id:"js-043", name: "Flat Map", value: "flat-map",mainTitle:"javascript", },
          { id:"js-044", name: "Find Index", value: "find-index" ,mainTitle:"javascript",},
          { id:"js-045", name: "Find", value: "find",mainTitle:"javascript", },
          { id:"js-046", name: "Concat", value: "concat" ,mainTitle:"javascript",},
          { id:"js-047", name: "Fill", value: "fill" ,mainTitle:"javascript",},
          { id:"js-048", name: "Includes", value: "includes",mainTitle:"javascript", },
          { id:"js-049", name: "Reverse", value: "reverse" ,mainTitle:"javascript",},
          { id:"js-050", name: "Splice", value: "splice",mainTitle:"javascript", },
          { id:"js-051", name: "Slice", value: "slice" ,mainTitle:"javascript",},
          { id:"js-052", name: "Index Of", value: "index-of" ,mainTitle:"javascript",},
        ],
        isFolder: true,
        name: "Array Methods",
        queryName: "array-methods",
      },
      {
        id:"js-053", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Spread Operator",
        queryName: "spread-operator",
        value: "spread-operator"
      },
      {
        id:"js-054", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Rest Operator",
        queryName: "rest-operator",
        value: "rest-operator"
      },
      {
        id:"js-055", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Call Method",
        queryName: "call-method",
        value: "call-method"
      },
      {
        id:"js-056", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Bind Method",
        queryName: "bind-method",
        value: "bind-method"
      },
      {
        id:"js-057", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Apply Method",
        queryName: "apply-method",
        value: "apply-method"
      },
      {
        id:uuidv4(), 
        isFolder: false,
        mainTitle:"javascript",
        name: "Date and Time",
        queryName: "date-time",
        value: "date-time"
      },
      {
        items: [
          { id:"js-058", name: "Callbacks", value: "callbacks",mainTitle:"javascript", },
          { id:"js-059", name: "Promises", value: "promises" ,mainTitle:"javascript",},
          { id:"js-060", name: "Async/Await", value: "async-await" ,mainTitle:"javascript",},
          { id:"js-061", name: "setTimeout", value: "settimeout",mainTitle:"javascript", },
          { id:"js-062", name: "setInterval", value: "setinterval",mainTitle:"javascript", },
        ],
        isFolder: true,
        name: "Asynchronous JavaScript",
        queryName: "asynchronous-javascript",
      },
      {
        id:"js-063", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Iterators",
        queryName: "iterators",
        value: "iterators"
      },
      {
        id:"js-064", 
        isFolder: false,
        mainTitle:"javascript",
        name: "Generators/Yields",
        queryName: "generators-yields",
        value: "generators-yields"
      },
      {
        items: [
          { id:"js-065", name: "Hoisting", value: "hoisting",mainTitle:"javascript", },
          { id:"js-066", name: "Closures", value: "closures" ,mainTitle:"javascript",},
          { id:"js-067", name: "Currying", value: "currying" ,mainTitle:"javascript",},
          { id:"js-068", name: "Debouncing", value: "debouncing" ,mainTitle:"javascript",},
          { id:"js-069", name: "Throttling", value: "throttling",mainTitle:"javascript", },
          { id:"js-070", name: "IIFE", value: "iife" ,mainTitle:"javascript",},
          { id:"js-071", name: "Event Bubbling", value: "event-bubbling",mainTitle:"javascript", },
          { id:"js-072", name: "Event Capturing", value: "event-capturing" ,mainTitle:"javascript",},
          { id:"js-073", name: "Event Delegation", value: "event-delegation" ,mainTitle:"javascript",},
          { id:"js-074", name: "Event Loop", value: "event-loop" ,mainTitle:"javascript",},
          { id:"js-075", name: "Call Stack", value: "call-stack" ,mainTitle:"javascript",},
          { id:"js-076", name: "Execution Context", value: "execution-context",mainTitle:"javascript", },
          { id:"js-077", name: "Chrome JS Engine (V8 engine)", value: "chrome-v8-engine" ,mainTitle:"javascript",},
        ],
        isFolder: true,
        name: "Advanced JavaScript",
        queryName: "advanced-javascript",
      },
      {
        items: [
          { id:"js-078", name: "DOM", value: "dom",mainTitle:"javascript",},
          { id:"js-079", name: "XHR & Fetch", value: "xhr-fetch",mainTitle:"javascript", },
          { id:"js-080", name: "Storage", value: "storage",mainTitle:"javascript", },
          { id:"js-081", name: "Video and Audio", value: "video-audio",mainTitle:"javascript", },
          { id:"js-082", name: "Drawing Graphics", value: "drawing-graphics",mainTitle:"javascript", },
        ],
        isFolder: true,
        name: "Web APIs",
        queryName: "web-apis",
      },
    ],
    id:uuidv4(),
    isFolder: true,
    mainRoot:true,
    name: "JavaScript",
    queryName: "javascript",
    icon:<SiJavascript />
  },
  {
    items: [
      {
        items: [
          { id:"reactjs-001", name: "Create React App", value: "create-react-app", mainTitle:"reactjs", },
          { id:"reactjs-002", name: "Class Components", value: "class-components", mainTitle:"reactjs", },
          { id:"reactjs-003", name: "Functional Components", value: "functional-components", mainTitle:"reactjs", },
          { id:"reactjs-004", name: "JSX", value: "jsx", mainTitle:"reactjs", },
          { id:"reactjs-005", name: "Props and State", value: "props-and-state", mainTitle:"reactjs", },
          { id:"reactjs-006", name: "useState and useEffect Hooks", value: "usestate-useeffect", mainTitle:"reactjs", },
          { id:"reactjs-007", name: "Lifecycle Methods", value: "lifecycle-methods", mainTitle:"reactjs", },
          { id:"reactjs-008", name: "setState", value: "setstate" , mainTitle:"reactjs",},
          { id:"reactjs-009", name: "Conditional Rendering", value: "conditional-rendering", mainTitle:"reactjs", },
          { id:"reactjs-010", name: "Lists and Keys", value: "lists-keys" , mainTitle:"reactjs",},
          { id:"reactjs-011", name: "Building Simple Forms", value: "building-simple-forms" , mainTitle:"reactjs",},
          { id:"reactjs-012", name: "Composition vs Inheritance", value: "composition-inheritance", mainTitle:"reactjs", },
        ],
        isFolder: true,
        name: "Fundamentals",
        queryName: "fundamentals",
      },
      {
        items: [
          { id:"reactjs-013", name: "Context API", value: "context-api", mainTitle:"reactjs", },
          { id:"reactjs-014", name: "Higher Order Components", value: "higher-order-components", mainTitle:"reactjs", },
          { id:"reactjs-015", name: "Render Props", value: "render-props", mainTitle:"reactjs", },
          { id:"reactjs-016", name: "Refs", value: "refs", mainTitle:"reactjs", },
          { id:"reactjs-017", name: "Error Boundaries", value: "error-boundaries" , mainTitle:"reactjs",},
          { id:"reactjs-018", name: "Portals", value: "portals", mainTitle:"reactjs", },
          { id:"reactjs-019", name: "Recounciliation", value: "recounciliation", mainTitle:"reactjs", },
        ],
        isFolder: true,
        name: "Advanced Topics",
        queryName: "advanced-topics",
      },
      {
        items: [
          { id:"reactjs-020", name: "useContext", value: "use-context" , mainTitle:"reactjs",},
          { id:"reactjs-021", name: "useReducer", value: "use-reducer", mainTitle:"reactjs", },
          { id:"reactjs-022", name: "useRef", value: "use-ref", mainTitle:"reactjs", },
          { id:"reactjs-023", name: "useMemo", value: "use-memo", mainTitle:"reactjs", },
          { id:"reactjs-024", name: "useCallback", value: "use-callback", mainTitle:"reactjs", },
          { id:"reactjs-025", name: "Custom Hooks", value: "custom-hooks", mainTitle:"reactjs", },
        ],
        isFolder: true,
        name: "React Hooks",
        queryName: "react-hooks",
      },
      {
        items: [
          { id:"reactjs-026", name: "GET", value: "get", mainTitle:"reactjs", },
          { id:"reactjs-027", name: "POST", value: "post", mainTitle:"reactjs", },
          { id:"reactjs-028", name: "PUT", value: "put" , mainTitle:"reactjs",},
          { id:"reactjs-029", name: "PATCH", value: "patch", mainTitle:"reactjs", },
          { id:"reactjs-030", name: "DELETE", value: "delete" , mainTitle:"reactjs",},
        ],
        isFolder: true,
        name: "HTTP Requests",
        queryName: "http-requests",
      },
      {
        id:"reactjs-031", 
        isFolder: false,
        mainTitle:"reactjs",
        name: "Ecosystem",
        queryName: "ecosystem",
        value:"ecosystem"
      },
    ],
    id:uuidv4(), 
    isFolder: true,
    mainRoot:true,
    name: "ReactJS",
    queryName: "reactjs",
    icon:<FaReact/>
  },
];
