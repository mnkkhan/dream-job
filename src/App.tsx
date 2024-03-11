import Footer1 from "./Components/ui/footer1";
import Signup from "./Components/ui/signin";
import CreateProfile from "./Components/ui/createProfile";
import CompanyCard from "./Components/CardComponents/CompanyCard";
import { Route, Routes} from "react-router-dom";
import { data } from "./Components/datas/data";
function App() {
  return (
    <div>
      <CompanyCard product={data[0]}/>
      <Routes>
        <Route path="/signin" element={<Signup/>}/>
        <Route path="/createProfile" element={<CreateProfile/>}/>
      </Routes>
      <Footer1></Footer1>
    </div>
  );
}

export default App;