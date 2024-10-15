import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import Grocery from "./Homepage/Grocery";
import Grocerytemplate from "./Category/Grocerytemplate";
import NotFound from "./NotFound";
import Grocerytrack from "./Homepage/TrackingOrder/Grocerytrack";
import GroceryCheckout from "./Homepage/Grocery components/Checkout/groceryCheckout";
import Aboutgrocery from "../src/Aboutpage/Aboutgrocery";
import Contactpage from "./Contactpage/Contactpage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Grocery />} />
        <Route path="/about" element={<Aboutgrocery />} />
        <Route path="/grocerytemplate" element={<Grocerytemplate />} />
        <Route path="/checkout" element={<GroceryCheckout />} />
        <Route path="/order-tracking" element={<Grocerytrack />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
