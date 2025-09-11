// Node.js Basics - HTTP Server + File System
const http = require("http");
const fs = require("fs");
const os = require("os");
const path = require("path");

const PORT = 4080;

// Log some OS info
console.log("Operating System:", os.type());
console.log("Free Memory (MB):", (os.freemem() / 1024 / 1024).toFixed(2));
console.log("CPU Details:", os.cpus()[0].model);

// Create or read a file
const filePath = path.join(__dirname, "message.txt");
fs.writeFileSync(filePath, "Hello from Session-5 Node.js class!");
const fileContent = fs.readFileSync(filePath, "utf-8");
console.log("File Content:", fileContent);

// Create a basic HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  const data = {
    message: "Hello from Node.js Server 🚀",
    fileContent,
    system: {
      os: os.type(),
      freeMem: os.freemem(),
    },
  };
  res.end(JSON.stringify(data, null, 2));
});

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
