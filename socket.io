// server.js
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app); // create HTTP server
const io = new Server(server); // attach socket.io to it

// serve the HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// handle socket connections
io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  // listen for a message from the client
  socket.on("sendMessage", (msg) => {
    console.log("Message received:", msg);

    // send it to all connected clients
    io.emit("receiveMessage", msg);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// start the server
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
