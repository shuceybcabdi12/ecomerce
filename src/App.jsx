import React from "react";
import Header from "./Components/header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="w-full">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-6xl mx-auto w-full mt-16 px-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="mt-16 w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default App;
