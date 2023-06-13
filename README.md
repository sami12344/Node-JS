<h1 align = "center" >

![image](/images/nodeJS.png)
NODE JS

</h1>
<h4 align="center">Node.js is a fast, scalable JavaScript runtime environment commonly used for server-side applications and web development, known for its event-driven, non-blocking I/O model.</h4>
<br>

<h1 align="center">

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)

</h1>

<p align="center">
  <a href="#About">About</a> •
  <a href="#Installation">Installation</a> •
  <a href="#Concepts">Concepts</a> •
  <a href="#Features">Features</a> •
  <a href="#Documentation">Documentation</a> •
  <a href="#License">License</a> •
</p>

## About

Node.js, a powerful and versatile JavaScript runtime environment, has emerged as a game-changer in the world of web development. It provides developers with a fast, scalable, and efficient platform for building server-side applications. With its unique architecture and innovative features, Node.js has gained immense popularity and has become a cornerstone of modern web development.

One of the key characteristics that sets Node.js apart is its event-driven, non-blocking I/O model. Traditional web servers handle incoming requests synchronously, which means each request is processed one at a time, leading to potential bottlenecks and delays. In contrast, Node.js uses an event-driven architecture that allows for concurrent handling of multiple requests. This non-blocking I/O model ensures that the server can process incoming requests efficiently, resulting in a highly responsive and performant application.

Under the hood, Node.js leverages the V8 JavaScript engine developed by Google for its Chrome browser. V8 compiles JavaScript into machine code, enabling Node.js to execute JavaScript at an impressive speed. This makes Node.js an excellent choice for applications that require real-time updates and processing of large volumes of data.

Node.js also boasts a vast ecosystem of modules and libraries, thanks to its package manager, npm. npm provides access to an extensive collection of reusable code modules, allowing developers to easily integrate existing solutions into their projects. This not only accelerates development time but also promotes code reuse and collaboration within the community.

Furthermore, Node.js is highly adaptable and can be used for various types of applications. Whether you are building a RESTful API, a web server, or a real-time chat application, Node.js provides the necessary tools and frameworks to streamline development. Express.js, for example, is a popular web application framework for Node.js that simplifies the process of building robust APIs and web applications.

Another advantage of Node.js is its lightweight nature, which enables it to handle a large number of concurrent connections efficiently. This makes it particularly suitable for applications that require handling high traffic loads or dealing with long-lived connections, such as chat applications or streaming services.

Moreover, Node.js has proven to be a catalyst for the rise of JavaScript as a full-stack development language. With Node.js, developers can utilize their JavaScript skills both on the front end and the back end, reducing the need to switch between different programming languages. This unification of the development stack not only enhances productivity but also allows for seamless data sharing and code sharing between the client and server.

Despite its numerous benefits, Node.js does have some considerations to keep in mind. As a single-threaded environment, it may not be the best choice for CPU-intensive tasks or applications that require extensive parallel processing. However, Node.js mitigates this limitation by delegating such tasks to worker threads or by utilizing external services through APIs.

In conclusion, Node.js has revolutionized the way we approach server-side development. Its event-driven architecture, high performance, extensive ecosystem, and flexibility have made it a preferred choice for developers across the globe. Whether you are building a small-scale web application or a large-scale enterprise system, Node.js provides the tools and capabilities needed to create robust, scalable, and efficient server-side applications. As web technologies continue to evolve, Node.js remains at the forefront, empowering developers to bring their ideas to life in the ever-changing digital landscape.


```
Node.js = Runtime Environment + JavaScript Library
```
## Concepts
The following diagram depicts some important parts of Node.js which we will discuss in detail in the subsequent chapters.

<h4 align ="center" >

![image](/images/nodejsDiagram.jpg)

<br>

<br>
In simple scenario,
<br>
<br>

![image](/images/nodejs_concepts.jpg)

</h4>

## Features

### 1. Single Threaded
Node.js operates on a single thread. It is based on the “Single Threaded Event Loop Model” architecture which can handle multiple client requests. A single thread executes the main event loop. Still, in the background, the input-output work is performed on separate threads, as Node API’s input-output operation is asynchronous (non-blocking design) to accommodate the Event Loop. Event Loop is what allows node.js to perform all the non-blocking operations.

### 2. Asynchronous
Node.js is asynchronous by default, i.e., it operates non-blocking. When a client requests a server, a single thread handles the request; it checks if the request involves any database interaction. If it does not, we process the request, and the server returns the response to the client. The thread is ready to handle the next request.

### 3. Event Driven
The event-driven concept is similar to the concept of a callback function in asynchronous programming. The only difference is that the callback function executes once the asynchronous function returns its result, triggering events on its associated event handler. Node provides a module called “Event” which consists of an “EventEmitter” class that allows us to implement event-driven programming. An Event handler is a function called when an event is triggered. A main loop listens to the triggers and calls the corresponding event handler.

EventEmitter consists of various methods, one of which is the emit(); that fires an event. Emit() has the first argument as the event’s name; the next arguments are used to pass data. The on() method listens to the event that is emitted and executes it. Event-driven programming makes Node pretty fast and gives high performance.

### 4. Open Source
Node.js is open-source, which means it is free to use. We can install Node.js from https://nodejs.org/en/ according to our platform.

### 5. Performance
Google Chrome’s V8 JavaScript engine is the foundation of Node.js, enabling faster code execution. The engine compiles the JavaScript code into machine code which makes our code easier and faster to implement effectively. Concepts like asynchronous programming and its operation on non-blocking input-output operations make its performance high. Node.js uses events highly, which makes it pretty fast.

### 6. Highly Scalable
Node.js applications are highly scalable as they operate asynchronously (non-blocking). Node.js works on a Single thread, where when a single request arrives, it starts processing it and is ready to handle the next request. Once we prepare the response, we send it back to the client.

### 7. Node Package Manager(NPM)
As we know, the Node Package Manager is a package manager for Node JavaScript runtime environment and is a recommended feature of the Node.js installer. It is the world’s largest online repository. It also looks after the management of the local dependencies of our project. It has nearly 50,000 – 80,000 packages in its public online repository.

### 8. No Buffering
Due to the callback function concept, the Node.js application output the data in blocks. Thus, the user receives the data more easily and is ready, as it does not have to wait for the entire operation to complete. It cuts down the time needed for processing, e.g., while uploading audio or video files. They never buffer any data.

A callback function is a function that is passed to another function as an argument, the first parameter passed to a callback function is err, which is checked when something goes wrong, whereas the second parameter in the callback function is used to pass the data. Additional arguments can be passed to the callback function to pass the data.

### 9. Caching
Node.js holds a pretty good advantage of caching. It supports the caching of modules. When a Node.js module is requested for the first time, it is cached in the application memory. We will not be required to re-execute the codes as caching allows the application to load the web pages faster and easily respond to the user.
## Documentation

The documentation of Node JS can be found here

<ul>
<li><a href='https://nodejs.org/en/docs'>Node JS</a></li>
<li><a href='https://devdocs.io/node/'>Dev Docs</a>
</li>
</ul>

## License

[MIT](LICENSE)