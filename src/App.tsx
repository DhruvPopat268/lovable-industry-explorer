import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Infrastructure from "./pages/Infrastructure";
import Industrial from "./pages/Industrial";
import Commercial from "./pages/Commercial";
import GeneralContractors from "./pages/GeneralContractors";
import Specialty from "./pages/Specialty";
import Owners from "./pages/Owners";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/general-contractors" element={<GeneralContractors />} />
          <Route path="/specialty" element={<Specialty />} />
          <Route path="/owners" element={<Owners />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
