import express from "express";

const app = express();
const port = process.argv.includes("--test") ? 3000 : 80;

app.use(express.static("public"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
