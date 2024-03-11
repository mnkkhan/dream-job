import Footer1 from "./components/ui/footer1";
import Signup from "./components/ui/signin";
import CreateProfile from "./components/ui/createProfile";
import { Route, Routes} from "react-router-dom";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/signin" element={<Signup/>}/>
        <Route path="/createProfile" element={<CreateProfile/>}/>
      </Routes>
      <Footer1></Footer1>
    </div>
  );
}

export default App;
