import "dotenv-safe/config";
import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";

import { routes } from './routes';

const app: Application = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/", routes);


// app.get('/', (_, res: Response) => {
//   res.send("hello");
// });

// app.get('/decks', async (_, res: Response) => {
//   const decks = await Deck.find();

//   res.json(decks);
// });

// app.delete('/decks', async (_, res: Response) => {
//   await Deck.deleteMany();
//   res.status(200).send("Deleted succesfully!");
// });

// app.delete('/decks/:id', async (req: Request, res: Response) => {
//   const id = req.params.id;
//   await Deck.findByIdAndDelete(id);
//   res.json({
//     message: "Deleted succesfully!",
//   });
// });

// app.post('/decks', async (req: Request, res: Response) => {
//   const newDeck = new Deck({
//     title: req.body.title,
//   });
//   const createdDeck = await newDeck.save();
//   res.json(createdDeck);
// });

const port = parseInt(process.env.PORT) || 4000;

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port, () => console.log(`server running on localhost:${port}`));
  })
