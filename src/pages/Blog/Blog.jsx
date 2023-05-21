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
          3. What is express js? What is Nest JS?
        </h2>
        <p className=" font-semibold">
          Ans. <br />
          Express.js :
          <br />
          Express.js is a web application framework for Node.js that simplifies
          the process of building web servers and APIs. It provides a set of
          features and tools to handle HTTP requests, define routes, and manage
          middleware. With Express.js, developers can quickly create server-side
          applications using JavaScript.
          <br />
          Nest.js.
          <br />
          Nest.js is a powerful, progressive, and scalable framework for
          building server-side applications with Node.js. It is built on top of
          Express.js and incorporates modern JavaScript features and design
          patterns to enhance developer productivity and application structure.
        </p>
        <h2 className=" text-lg font-bold">
          4. What is MongoDB aggregate and how does it work?
        </h2>
        <p className=" font-semibold">
          Ans. <br />
          MongoDB's aggregate is a powerful aggregation framework that allows
          you to perform advanced data processing and analysis operations on
          your data stored in MongoDB. It provides a way to combine multiple
          operations together, such as filtering, grouping, sorting, and
          transforming data, in order to produce computed results.
        </p>
      </div>
    </div>
  );
};

export default Blog;
