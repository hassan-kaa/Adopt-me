import { createRoot } from "react-dom/client";
import SearchParams from "./views/SearchParams";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Details from "./views/Details";
import { useState } from "react";
import AdoptedPetContext from "./services/AdoptedPetContext";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  const adoptedPet = useState(null);
  return (
    <div
    className="box-border m-0 py-8 px-8 font-main bg-slate-100 "
      
    >
      <Router>
        <QueryClientProvider client={queryClient}>
          <AdoptedPetContext.Provider value={adoptedPet}>
            <header className="text-center" >
              <Link to="/" className="text-4xl text-regal-blue font-bold" >Adopt Me!</Link>
            </header>
            <Routes>
              <Route path="/breeds/:animal" element={<Details />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </AdoptedPetContext.Provider>
        </QueryClientProvider>
      </Router>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
