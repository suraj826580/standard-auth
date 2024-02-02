// we are checking here the version of node

const [major, minor] = process.versions.node.split(".").map(Number);
if (major < 10) {
  console.log(
    "Please go to nodejs.org and download version 10 or greater. 👌\n "
  );
  process.exit();
}
// Application is Start fro here
import express from "express";
import "dotenv/config";
const app = express();

app.get("/", async function (req, res) {
  try {
    res.status(200).send({ msg: "Home Page" });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

app.get("/login", async (req, res) => {
  try {
    res.status(200).send({ msg: "Login Successfull" });
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

app.set("port", process.env.PORT || 8765);
const server = app.listen(app.get("port"), () => {
  console.log(`Server is Running on ${server.address().port}`);
});
