import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import ItemForm from "./ItemForm";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [snacks, setSnacks] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    async function getItems() {
      let snacks = await SnackOrBoozeApi.getItems("snacks");
      let drinks = await SnackOrBoozeApi.getItems("drinks");
      setDrinks(drinks);
      setSnacks(snacks);
      setIsLoading(false);
    }
    getItems();
  }, []);

  const handleAddItem = async (item) => {
    let newItem = await SnackOrBoozeApi.addItem(item);

    if (item.type === "snacks") {
      setSnacks((snacks) => [...snacks, newItem]);
    } else {
      setDrinks((drinks) => [...drinks, newItem]);
    }
  };

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/">
              <Home snacks={snacks} drinks={drinks} />
            </Route>
            <Route exact path="/snacks">
              <Menu
                items={snacks}
                title="Snacks"
                description="Yummy foods for your tummy"
              />
            </Route>
            <Route exact path="/snacks/:id">
              <Item items={snacks} cantFind="/snacks" />
            </Route>
            <Route exact path="/drinks">
              <Menu
                items={drinks}
                title="Drinks"
                description="Delicious beverages for your thirst"
              />
            </Route>
            <Route exact path="/drinks/:id">
              <Item items={drinks} cantFind="/drinks" />
            </Route>
            <Route exact path="/add">
              <ItemForm onSubmit={handleAddItem} isLoading={setIsLoading} />
            </Route>
            <Route>
              <p className="not-found">
                Hmmm. I can't seem to find what you want.
              </p>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
