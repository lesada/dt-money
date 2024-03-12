import Header from "@/components/Header";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Search from "./components/Search";
import Summary from "./components/Summary";
import Table from "./components/Table";

function Transactions() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Header />
      <main>
        <Summary />
        <section>
          <Search />
          {windowWidth <= 768 ? <Cards /> : <Table />}
        </section>
      </main>
    </div>
  );
}

export default Transactions;
