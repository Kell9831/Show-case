import * as React from "react";

import Header from "../Header";
import Showcase from "../Showcase";

import { I18nProvider } from "../../contexts/i18nContext";
import TicTacToe from "../TicTacToe/TicTacToe";
import PokeCollection from "../PokeCollection";

function App() {
  const [page, setPage] = React.useState("showcase");

  return (
    <I18nProvider>
      <Header setPage={setPage} page={page} />
      <main className="container">
        {page === "showcase" && <Showcase setPage={setPage} />}
        {page === "tic-tac-toe" && <TicTacToe />}
        {page === "poke-collection" && <PokeCollection />}
      </main>
    </I18nProvider>
  );
}

export default App;
