import { Banner } from "./components/Banner";
import { Categories } from "./components/Categories";
import { Featured } from "./components/Featured";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function App() {
  return (
    <>
      <Header />
      <Categories />
      <main className="relative left-1/2 -translate-x-1/2 w-[1200px]">
        <Banner />
        <Featured />
      </main>
      <Footer />
    </>
  )
  
}
