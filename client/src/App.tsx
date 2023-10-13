import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { TDeck, getDecks } from './api/getDecks';
import { deleteDeck } from './api/deleteDeck';
import { createDeck } from './api/createDeck';

const App: React.FC = () => {
  const [decks, setDecks] = useState<TDeck[]>([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function fetchDecks() {
      const newDecks = await getDecks();
      setDecks(newDecks);
    }
    fetchDecks();
  }, [])

  async function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    
    const newDeck = await createDeck(title);
    setTitle("");
    setDecks([...decks, newDeck]);
  }

  async function handleDeleteDeck(deckId: string) {
    await deleteDeck(deckId);

    setDecks(decks.filter((deck) => deck._id !== deckId));
  }

  return (
    <div className="h-[100vh] flex items-center justify-center flex-col">
      <ul className="grid grid-cols-3 grid-flow-row gap-4 mb-8">
        {decks.map((deck) => (
          <li key={deck._id} className="bg-white h-[120px] flex items-center align-center justify-center px-8 rounded-lg flex-col hover:opacity-95 relative">
            <Link to={`decks/${deck._id}`}>{deck.title}</Link>
            <button onClick={() => handleDeleteDeck(deck._id)} className="absolute top-2 right-2">X</button>
            </li>
        ))}
      </ul>

      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title" className="text-2xl font-medium">Deck Title</label>
        <input
          id="deck-title"
          className="mx-4 p-2 rounded-md"
          value={title}
          onChange={((e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          })}
        />
        <button className="bg-white rounded-md px-4 py-2 text-lg font-semibold">Ceate Deck</button>
      </form>
    </div>
  );
}

export default App;