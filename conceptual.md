### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

The purpose of React Router is to allow for client-side routing in a React application. This allows for the application to have multiple pages without having to actually reload the page.

- What is a single page application?

A single page application is an application that only has one HTML page. The content of the page is dynamically changed based on the user's interaction with the application or with React Routing using the URL.

- What are some differences between client side and server side routing?

Server side routing handles routing using HTTP requests from the client to serve up HTML pages in a response. Client side routing handles routing using the URL and Javascript to dynamically change the DOM without physically reloading the page or sending any HTTP requests.

- What are two ways of handling redirects with React Router? When would you use each?

One way to handle redirects is to use the Redirect component. This is useful when you want to redirect the user to a different page based on some condition. Another way to handle redirects is to use the `history` object. This is useful when you want to redirect the user to a different page based on some condition, but you want to do it programmatically.

- What are two different ways to handle page-not-found user experiences using React Router?

A Switch component can be used to render a 404 page if no other routes match the URL. A Redirect component can be used to redirect the user to a 404 page if no other routes match the URL.

- How do you grab URL parameters from within a component using React Router?

By using the `useParams()` hook.

- What is context in React? When would you use it?

Context is a way to pass data through the component tree without having to pass props down manually at every level. You would use it when you have data that you want to be available to many components at different nesting levels.

- Describe some differences between class-based components and functional components in React.

Class-based components are written using ES6 classes and have a `render()` method that returns React elements and was the original way to handle state in a component. Functional components are written using functions and return React elements. using hooks, functional components can now handle state.

- What are some of the problems that hooks were designed to solve?

Hooks were designed to solve the problem of having to use class-based components to handle state. Before, there were very ugly and complicated ways to handle state in functional components. Hooks also allow for the use of lifecycle methods in functional components.
