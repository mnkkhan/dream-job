import "./App.css";
import CompanyCard from "./Components/CardComponents/CompanyCard";
import { data } from "./Components/datas/data";

function App() {
  return (
    <>
      <CompanyCard product={data[0]} />
    </>
  );
}

export default App;
