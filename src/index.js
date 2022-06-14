import ReactDOM from "react-dom/client";
import { Header } from "./components/header";
import { MyPage } from "./components/my-page";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <MyPage />
  </div>
);

reportWebVitals();
