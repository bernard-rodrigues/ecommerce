import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Categories } from "./components/Categories";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { EcommerceDataProvider } from "./contexts/EcomerceData";
import { Home } from "./pages/Home";
import { ProductPage } from "./pages/ProductPage";
import { ProductsByCategory } from "./pages/ProductsByCategory";

export function App() { 
  return (
    <EcommerceDataProvider>
      <BrowserRouter>
        <Header />
        <Categories/>
        <main className="relative left-1/2 -translate-x-1/2 w-[1200px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/category/:category" element={<ProductsByCategory />} />
            </Routes>
          
        </main>
      </BrowserRouter>
      <Footer />
    </EcommerceDataProvider>
  )
  
}
