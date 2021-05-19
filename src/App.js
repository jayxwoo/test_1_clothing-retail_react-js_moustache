import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Item from "./pages/Item";
import { stock } from "./data/stockData";
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/"><Item data={stock.item_01}></Item></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
