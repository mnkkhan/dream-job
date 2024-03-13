import Signin from "./Components/ui/signin";
import CreateProfile from "./Components/ui/createProfile";
import CompanyCard from "./Components/CardComponents/CompanyCard";
import { Route, Routes} from "react-router-dom";
import { data } from "./Components/datas/data";
import Layout from "./Components/ui/layout";
function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={
          <Layout>
            <CompanyCard product={data[0]}/>
          </Layout>
        }></Route>
       <Route path="/signin" element={<Layout><Signin/></Layout> }/>
        <Route path="/createProfile" element={<Layout><CreateProfile/></Layout>}/>
      </Routes>
      
    </div>
  );
}
export default App;