import { useState } from "react";
import { SearchContext } from "./";

export const SearchProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");

  return (
    <SearchContext.Provider value={{ filter, setFilter }}>
      {children}
    </SearchContext.Provider>
  );
};
