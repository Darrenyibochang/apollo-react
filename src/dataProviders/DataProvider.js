import React from "react";

import MovieListDataProvider from "./MovieListDataProvider";

import UserDataProvider from "./UserDataProvider";

const DataProvider = ({ children }) => {
  return (
    <UserDataProvider>
      <MovieListDataProvider>{children}</MovieListDataProvider>
    </UserDataProvider>
  );
};

export default DataProvider;
