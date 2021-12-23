import "reflect-metadata";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import router from "./routes";
import cors from "cors";
import bodyParser from "body-parser";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(cors());
app.use(express.static("public"));


app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.use(router);


app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
