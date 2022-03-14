import React from "react";

const Context = React.createContext(null);

const Provider = ({ children }) => {
  const [theme, setTheme] = React.useState(
    window.localStorage.getItem("theme") || "light"
  );
  return (
    <Context.Provider value={{ theme, setTheme }}>{children}</Context.Provider>
  );
};
export { Context, Provider };
