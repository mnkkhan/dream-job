import "./App.css";
import CompanyCard from "./components/CardComponents/CompanyCard";
import { data } from "./components/datas/data";

function App() {
  return (
    <>
      <CompanyCard product={data[0]} />
    </>
  );
}

export default App;
