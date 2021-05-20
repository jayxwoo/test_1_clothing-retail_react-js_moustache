import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Item from "./pages/Item";
import { item_01 } from "./data/stockData";
import "./styles/App.scss";
import IsMobileContextProvider from "./contexts/IsMobileContext";
import MyCartContextProvider from "./contexts/MyCartContext";

function App() {
  return (
    <Router>
      <IsMobileContextProvider>
        <MyCartContextProvider>
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/"><Item data={item_01}></Item></Route>
            </Switch>
          </div>
        </MyCartContextProvider>
      </IsMobileContextProvider>
    </Router>
  );
}

export default App;
