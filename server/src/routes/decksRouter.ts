import express, { Request, Response } from "express";
import Deck from "../models/Deck";


export const decksRouter = express.Router();

decksRouter.get('/decks', async (_, res: Response) => {
  const decks = await Deck.find();

  res.json(decks);
});

decksRouter.delete('/decks/:id', async (req: Request, res: Response) => {
  const id = req.params.id;
  await Deck.findByIdAndDelete(id);
  res.json({
    message: "Deleted succesfully!",
  });
});

decksRouter.post('/decks', async (req: Request, res: Response) => {
  const newDeck = new Deck({
    title: req.body.title,
  });
  const createdDeck = await newDeck.save();
  res.json(createdDeck);
});