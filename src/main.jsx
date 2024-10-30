import ReactDOM from "react-dom";
import App from "./App";
import { FinanceProvider } from "./FinanceContext";
import "./index.css";

ReactDOM.render(
  <FinanceProvider>
    <App />
  </FinanceProvider>,
  document.getElementById("root")
);
