import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Grocery from "./Homepage/Grocery";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Grocery />} />
        {/* <Route path="*" element={<Notfound />}/> */}
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
