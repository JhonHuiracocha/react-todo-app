import { useState } from "react";
import { SearchContext } from "./";

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  return (
    <SearchContext.Provider value={{ search, setSearch, filter, setFilter }}>
      {children}
    </SearchContext.Provider>
  );
};
