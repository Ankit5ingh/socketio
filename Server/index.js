const http = require("http").createServer();
// const cors = require("cors");
const io = require("socket.io")(http, {
    cors : {origin : "*"}
});

io.on("connection", (socket) => {
    console.log("a user is Connected");
    socket.on("message", (message)=>{
        // console.log(message);
        io.emit("message", `${socket.id.substr(0,2)} : ${message}`);
    });
})

http.listen(3001, () => console.log("server Running on port 3001"));