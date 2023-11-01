import { useState } from "react";

import { GhUserForm } from "./GhUserForm";
import { GhUserViewer } from "./GhUserViewer";
import { RecentSearches } from "./RecentSearches";

const App = () => {
  const [userData, setUserData] = useState({});
  const [searchesList, setSearchesList] = useState([]);

  function addSearchToList(value) {
    setSearchesList([...searchesList, value]);
  }

  async function getUserData(id) {
    const data = await fetch("https://api.github.com/users/" + id, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });

    const json = await data.json();
    setUserData(json);
    document.querySelector("#id-search-input").value = id;
  }

  async function onSubmit(id) {
    getUserData(id);
    addSearchToList(id);
  }

  return (
    <div className="app">
      <h1>React Github API</h1>
      <GhUserForm onSubmit={onSubmit} />
      <RecentSearches list={searchesList} getUserData={getUserData} />
      <hr />
      <GhUserViewer value={userData} />
    </div>
  );
};

export default App;
