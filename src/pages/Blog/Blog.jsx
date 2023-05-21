const Blog = () => {
  return (
    <div>
      <div className="m-10">
        <h2 className=" text-lg font-bold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p className=" font-semibold">
          Ans. <br />
          Access Token : <br />
          1. An access token is a credential that is used to access protected
          resources on behalf of a user or client. <br></br>
          2. It is typically issued by an authentication server (such as OAuth)
          after a successful authentication and authorization process. <br></br>
          3. The access token contains information about the user or client, the
          granted permissions or scopes, and an expiration time. <br></br>
          Refresh Token : <br />
          1. A refresh token is a long-lived credential that is used to obtain a
          new access token after the current access token expires. <br></br>
          2. It is typically issued alongside the access token during the
          initial authentication and authorization process. <br></br>
          3. The refresh token is securely stored on the client-side, usually in
          a cookie or local storage, and is sent to the authentication server to
          request a new access token. <br></br>
        </p>

        <br />
        <h2 className=" text-lg font-bold">
          2.Compare SQL and NoSQL databases?
        </h2>

        <p className=" font-semibold">
          Ans. <br />
          SQL : <br />
          1.SQL databases have a predefined schema with structured tables,
          columns, and relationships, following a rigid structure. They use SQL
          as the standard language for defining, manipulating, and querying
          data. <br></br>
          NoSQL : <br />
          1. NoSQL databases have a flexible schema or schema-less design. They
          store data in various formats like key-value pairs, documents, graphs,
          or wide-column stores, allowing for dynamic and agile data structures.{" "}
          <br></br>
        </p>

        <br />
        <h2 className=" text-lg font-bold">
          3.  What is express js? What is Nest JS?
        </h2>
        <p className=" font-semibold">
          Ans. <br />
          Node.
          <br />
          Js is a JavaScript runtime built on Chrome's V8 JavaScript engine,
          which allows you to run JavaScript code outside of a web browser. It
          provides a platform for building server-side applications using
          JavaScript.
          <br />
          Express.
          <br />
          Js, on the other hand, is a web application framework built on top of
          Node.js. It provides a set of tools and features to help you build web
          applications and APIs quickly and easily. Express.js simplifies the
          process of building web applications by providing routing, middleware,
          and other features out of the box.
        </p>
        <h2 className=" text-lg font-bold">
          4. What is a custom hook, and why will you create a custom hook?
        </h2>
        <p className=" font-semibold">
          Ans. <br />
          In React, a custom hook is a reusable function that allows you to
          share logic between different components. Custom hooks can contain
          stateful logic and abstract away complex behavior, making it easier to
          manage the application's state and behavior. You would create a custom
          hook to simplify your code and avoid code repetition. For instance, if
          you have multiple components with similar functionality, you can
          extract the common logic into a custom hook and reuse it across those
          components. This can help you reduce the amount of code you need to
          write and maintain, making your code more efficient and easier to
          manage. Additionally, by encapsulating the shared logic into a custom
          hook, you can also make your code more readable and easier to
          understand.
        </p>
      </div>
    </div>
  );
};

export default Blog;
