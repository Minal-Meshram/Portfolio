import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    
    {/* 🔥 THIS IS THE MAIN FIX */}
    <div className="min-h-screen bg-white text-black dark:bg-[#0b0f1a] dark:text-white transition-colors duration-300">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

    </div>

  </QueryClientProvider>
);

export default App;