import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/pages/Login";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Registration from "./pages/Registration";
import PrivateRoutes from "./routes/PrivateRoutes";
import { SkeletonTheme } from "react-loading-skeleton";

function App() {
  return (
    <SkeletonTheme baseColor="#d3d5de" highlightColor="#444">
      <div className="font-roboto box-border p-0 m-0 bg-[#eeee]">
        <Router>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Registration />} />
            <Route element={<PrivateRoutes />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </SkeletonTheme>
  );
}

export default App;
