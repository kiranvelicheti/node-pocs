import express from "express";

const app = express();
const port = 8080 || process.env.PORT;

app.get("/", (req: any, res: any) => {
  res.send("Hi!");
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
