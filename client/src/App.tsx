import React, { useState } from 'react'

interface AppProps {

}

const App: React.FC<AppProps> = () => {
  const [title, setTitle] = useState("");

  function handleCreateDeck(e: React.FormEvent) {
    e.preventDefault();
    fetch("http://localhost:4000/decks", {
      method: "POST",
      body: JSON.stringify({
        title,
      }),
    });
  }

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <form onSubmit={handleCreateDeck}>
        <label htmlFor="deck-title">Deck Title</label>
        <input
          id="deck-title"
          className="mx-4"
          value={title}
          onChange={((e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value);
          })}
        />
        <button>Ceate Deck</button>
      </form>
    </div>
  );
}

export default App;