import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Fotter from "./Components/Fotter";


const App = () => {

  return (
    <div>
      <section>
        <Navbar></Navbar>
      </section>
      <section>
        <Outlet></Outlet>
      </section>
      <section className="mt-20">
        <Fotter></Fotter>
      </section>
    </div>
  );
};

export default App;