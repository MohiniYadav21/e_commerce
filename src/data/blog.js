export const blogData = [
  {
    title: "Mastering React: A Complete Beginner's Guide",
    slug:  "mastering-react-a-complete-beginners-guide",
    image: "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2",
    content: `
      <p>React has become one of the most popular JavaScript libraries for building user interfaces. It was developed by Facebook and is maintained by a large community of developers. If you're new to React, this guide will walk you through the fundamentals and best practices of working with React in modern web development.</p>

      <h3>Why React?</h3>
      <p>React offers a component-based approach that makes it easier to manage complex UIs. It also has a virtual DOM, which allows for faster and more efficient rendering. React's unidirectional data flow makes debugging easier and improves the overall performance of the application.</p>

      <h3>Setting Up a React Project</h3>
      <p>To start a new React project, the easiest way is to use <code>create-react-app</code>, a command-line tool provided by the React team.</p>
      <pre><code>npx create-react-app my-app
cd my-app
npm start</code></pre>
      <p>This sets up a fully functional development environment with hot reloading, a local server, and a structured project layout.</p>

      <h3>Understanding JSX</h3>
      <p>JSX is a syntax extension for JavaScript that looks similar to HTML. It allows you to write UI elements in a declarative way inside your JavaScript code:</p>
      <pre><code>const element = &lt;h1&gt;Hello, world!&lt;/h1&gt;;</code></pre>
      <p>Behind the scenes, JSX gets compiled to <code>React.createElement()</code> calls, which are then rendered to the DOM.</p>

      <h3>Components in React</h3>
      <p>React applications are built using components. There are two main types of components: functional and class-based. With the introduction of Hooks, functional components are now preferred.</p>
      <pre><code>
function Greeting(props) {
  return &lt;h1&gt;Hello, {props.name}&lt;/h1&gt;;
}
      </code></pre>

      <h3>Props and State</h3>
      <p>Props are inputs passed to a component from its parent. State is a local data store that can change over time.</p>
      <p>Here’s how you can use state in a functional component:</p>
      <pre><code>
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;You clicked {count} times&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;Click me&lt;/button&gt;
    &lt;/div&gt;
  );
}
      </code></pre>

      <h3>Handling Events</h3>
      <p>React uses camelCase for event handlers and you pass a function instead of a string.</p>
      <pre><code>
&lt;button onClick={handleClick}&gt;Click me&lt;/button&gt;
      </code></pre>

      <h3>Conditional Rendering</h3>
      <p>You can render different UI elements based on conditions:</p>
      <pre><code>
{isLoggedIn ? &lt;LogoutButton /&gt; : &lt;LoginButton /&gt;}
      </code></pre>

      <h3>Lists and Keys</h3>
      <p>Use <code>map()</code> to render a list of items, and always provide a unique key:</p>
      <pre><code>
const listItems = items.map(item =&gt;
  &lt;li key={item.id}&gt;{item.name}&lt;/li&gt;
);
      </code></pre>

      <h3>Conclusion</h3>
      <p>React is a robust and flexible library for building UIs. With its component-based architecture, virtual DOM, and active community, it's a great choice for both beginners and experienced developers. By learning React, you're setting yourself up to work on a wide variety of modern web projects.</p>

      <p>In upcoming posts, we'll explore advanced concepts like context, hooks, routing, and performance optimization.</p>
    `
  },
  {
    title: "Building a Personal Portfolio Website from Scratch",
    slug:  "building-a-personal-portfolio-website-from-scratch",
    image: "https://marketplace.canva.com/EAFwckKNjDE/2/0/1600w/canva-black-white-grayscale-portfolio-presentation-vzScEqAI__M.jpg",
    content: `
      <p>Creating a personal portfolio website is a powerful way to showcase your skills, projects, and personality to potential employers or clients. In this guide, we’ll walk through the entire process of building a portfolio from scratch using HTML, CSS, and JavaScript.</p>

      <h3>1. Planning Your Portfolio</h3>
      <p>Before writing code, sketch out the structure of your site. Common sections include:</p>
      <ul>
        <li>Hero Section (intro + profile image)</li>
        <li>About Me</li>
        <li>Projects or Work Samples</li>
        <li>Skills</li>
        <li>Contact Form or Social Links</li>
      </ul>

      <h3>2. Setting Up the Project</h3>
      <p>Create your folder structure:</p>
      <pre><code>
/portfolio
  /images
  /css
  /js
  index.html
      </code></pre>

      <h3>3. Writing the HTML</h3>
      <p>Here’s a basic HTML structure:</p>
      <pre><code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;My Portfolio&lt;/title&gt;
  &lt;link rel="stylesheet" href="css/style.css"&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;header&gt;&lt;h1&gt;John Doe&lt;/h1&gt;&lt;/header&gt;
  &lt;section id="about"&gt;...&lt;/section&gt;
  &lt;section id="projects"&gt;...&lt;/section&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
      </code></pre>

      <h3>4. Styling with CSS</h3>
      <p>Create responsive layouts using Flexbox or Grid. Here's a sample hero section:</p>
      <pre><code>
.hero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}
.hero img {
  width: 200px;
  border-radius: 50%;
}
      </code></pre>

      <h3>5. Adding JavaScript</h3>
      <p>You can add interactivity such as dark mode toggle, filtering projects, or smooth scrolling.</p>
      <pre><code>
// Scroll to top
document.querySelector('#top-btn').addEventListener('click', () =&gt; {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
      </code></pre>

      <h3>6. Making It Live</h3>
      <p>To share your portfolio with the world:</p>
      <ul>
        <li>Use GitHub Pages</li>
        <li>Deploy with Netlify or Vercel</li>
        <li>Buy a domain and connect it to your hosting</li>
      </ul>

      <h3>Final Thoughts</h3>
      <p>Your portfolio should evolve with your skills. Keep it updated, showcase your best work, and personalize it to stand out. A well-designed portfolio can make a great first impression and open up new career opportunities.</p>
    `
  },
  {
  slug: "understanding-javascript-fundamentals",
  title: "Understanding JavaScript Fundamentals: A Deep Dive",
  image: "https://via.placeholder.com/800x400?text=JavaScript+Fundamentals",
  content: `
    <p>JavaScript is the backbone of modern web development. Whether you're building interactive websites, single-page apps, or server-side applications using Node.js, mastering JavaScript fundamentals is essential.</p>

    <h3>1. Variables and Data Types</h3>
    <p>JavaScript uses <code>var</code>, <code>let</code>, and <code>const</code> to declare variables. Each has different scoping rules:</p>
    <ul>
      <li><strong>var</strong> – function scoped, can be redeclared</li>
      <li><strong>let</strong> – block scoped, can be reassigned</li>
      <li><strong>const</strong> – block scoped, cannot be reassigned</li>
    </ul>
    <p>Data types in JS include primitives (<code>string</code>, <code>number</code>, <code>boolean</code>, <code>null</code>, <code>undefined</code>, <code>symbol</code>, <code>bigint</code>) and objects.</p>

    <h3>2. Functions and Scope</h3>
    <p>Functions are reusable blocks of code:</p>
    <pre><code>function greet(name) {
  return 'Hello, ' + name;
}</code></pre>
    <p>JavaScript supports function expressions, arrow functions, and closures. Understanding lexical scope is critical to mastering JavaScript.</p>

    <h3>3. Arrays and Objects</h3>
    <p>Arrays and objects are the core data structures in JS:</p>
    <pre><code>const fruits = ['apple', 'banana'];
const person = { name: 'Alice', age: 25 };</code></pre>
    <p>You can loop through arrays with <code>for</code>, <code>forEach</code>, or <code>map</code>, and manipulate objects using dot or bracket notation.</p>

    <h3>4. DOM Manipulation</h3>
    <p>The DOM (Document Object Model) lets you access and manipulate HTML:</p>
    <pre><code>document.getElementById('demo').innerText = 'Hello';</code></pre>
    <p>Modern JS uses event listeners, query selectors, and classList manipulation for interactive UI development.</p>

    <h3>5. ES6+ Features</h3>
    <ul>
      <li><strong>Destructuring</strong>: <code>const { name } = person;</code></li>
      <li><strong>Spread/Rest</strong>: <code>const newArr = [...arr1, ...arr2]</code></li>
      <li><strong>Template Literals</strong>: <code>\`Hello \${name}\`</code></li>
      <li><strong>Arrow Functions</strong>: <code>const sum = (a, b) => a + b;</code></li>
    </ul>

    <h3>6. Promises and Async/Await</h3>
    <p>Handling asynchronous operations is easier with Promises and <code>async/await</code>:</p>
    <pre><code>async function fetchData() {
  const res = await fetch('/api');
  const data = await res.json();
}</code></pre>

    <h3>Conclusion</h3>
    <p>JavaScript fundamentals form the bedrock of all advanced web development. Whether you're learning frameworks like React or diving into backend development with Node.js, understanding core concepts like scope, functions, objects, and async patterns is non-negotiable. Keep coding, keep experimenting, and master the language of the web.</p>
  `
},
{
  slug: "essential-ui-ux-design-principles",
  title: "Essential UI/UX Design Principles Every Developer Should Know",
  image: "https://via.placeholder.com/800x400?text=UI+UX+Design",
  content: `
    <p>UI/UX design isn’t just for designers — developers benefit immensely from understanding the basics. Whether you’re building websites or apps, applying design principles makes your product more usable, accessible, and delightful.</p>

    <h3>1. User-Centered Design</h3>
    <p>Put the user at the center of every decision. Understand their goals, pain points, and how they’ll interact with your interface. Empathy is the foundation of great design.</p>

    <h3>2. Visual Hierarchy</h3>
    <p>Design should guide the user's eyes. Use font size, weight, spacing, and color to highlight what matters most. Example:</p>
    <ul>
      <li><strong>Headings</strong> should be bold and larger</li>
      <li><strong>Buttons</strong> should stand out with contrast</li>
      <li><strong>Whitespace</strong> separates and groups content</li>
    </ul>

    <h3>3. Consistency</h3>
    <p>Consistency builds familiarity and reduces confusion. Use the same layout patterns, button styles, font sizes, and color schemes throughout your application.</p>

    <h3>4. Feedback and Interaction</h3>
    <p>Every action should have a reaction. Buttons should show hover/focus states, form submissions should display loaders, and success or error messages should be clear.</p>

    <h3>5. Accessibility (a11y)</h3>
    <p>Design for everyone. Use semantic HTML, alt text for images, proper contrast ratios, and keyboard-friendly navigation. Accessibility improves usability for all users.</p>

    <h3>6. Mobile Responsiveness</h3>
    <p>With mobile traffic dominating, design must adapt to various screen sizes. Use a mobile-first approach, flexible grids (like CSS Flexbox/Grid), and media queries.</p>

    <h3>7. Performance and Clarity</h3>
    <p>Design isn’t just looks — it’s functionality. A clean, simple layout with fast load times provides a better experience. Avoid clutter and prioritize speed.</p>

    <h3>8. User Testing</h3>
    <p>Don’t assume users will use your interface as you intended. Observe real users interact with your design and refine based on feedback.</p>

    <h3>Conclusion</h3>
    <p>Learning UI/UX principles empowers developers to build intuitive, beautiful, and accessible products. Start small — apply clear typography, consistent spacing, and mobile responsiveness — and evolve your design thinking over time. Good design is invisible but makes all the difference.</p>
  `
}


];


export function findBlogBySlug(slug) {
  return blogData.find(blog => blog.slug === slug);
}