const { Server } = require("socket.io");

let io;

function initializeSocket(server) {
  io = new Server(server, {
    cors: {
      origin: "*", // ⚠️ Replace with your frontend URL in production
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log(`New client connected: ${socket.id}`);

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`Client disconnected: ${socket.id}`);
    });

  });
}

function sendMessageToSocketId(socketId, message) {
  if (io) {
    io.to(socketId).emit('message' , message);
  } else {
    console.error("Socket.io is not initialized.");
  }
}

module.exports = { initializeSocket, sendMessageToSocketId };
