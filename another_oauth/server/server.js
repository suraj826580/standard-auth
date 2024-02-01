const [major, minor] = process.versions.node.split(".").map(Number);
if (major < 10) {
  console.log(
    "Please go to nodejs.org and download version 10 or greater. 👌\n "
  );
  process.exit();
}
import express from "express";
import "dotenv/config";
const app = express();

app.set("port", process.env.PORT || 8765);
const server = app.listen(app.get("port"), () => {
  console.log(`Server is Running on ${server.address().port}`);
});
