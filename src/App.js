
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WorldHexagonMap from "./pages/WorldHexagonMap";
import BubbleChart from "./pages/BubbleChart";
import WorldHexagonMap1 from "./pages/WorldHexagonMap1";
import { useEffect } from "react";

function App() {
  return (
 
  <div>
    <WorldHexagonMap />
    <WorldHexagonMap1 />
    <BubbleChart />
  </div>
  );
}
export default App;
