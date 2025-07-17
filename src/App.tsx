
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Commercial from "./pages/Commercial";
import Industrial from "./pages/Industrial";
import Infrastructure from "./pages/Infrastructure";
import Institutional from "./pages/Institutional";
import GeneralContractors from "./pages/GeneralContractors";
import Specialty from "./pages/Specialty";
import Owners from "./pages/Owners";
import OurStory from "./pages/OurStory";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/industrial" element={<Industrial />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
          <Route path="/institutional" element={<Institutional />} />
          <Route path="/general-contractors" element={<GeneralContractors />} />
          <Route path="/specialty" element={<Specialty />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
