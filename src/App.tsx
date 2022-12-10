import React from 'react';
import CardList from './components/card-list';
import Header from './components/header';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchBar from './components/search-bar';
import { Route, Routes } from "react-router-dom";

export default function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <>
        <Header />
        <SearchBar />
        <Routes>
          <Route path="/" element={<CardList />} />
        </Routes>

      </>
    </QueryClientProvider>

  );
}