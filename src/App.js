import "./App.css";
import NavBaR from "./components/NavBar";
import { Container, Row } from 'react-bootstrap';
import Header from "./components/Header";
import { Catogeries } from "./components/Catogeries";
import { Item } from "./components/Item";
import { useState } from "react";
import { items } from './data';

function App() {
  const [item, setItem] = useState(items)
  const allCatogry = ['الكل', ...new Set(items.map(i => i.category))]
  const filterCatogries = (catogery) => {
    if (catogery === 'الكل')
      setItem(items)
    else {
      const NewItem = items.filter(item => item.category === catogery)
      setItem(NewItem)
    }
  }

  return (
    <div className="App color-body">
      <NavBaR />
      <Container>
        <Row>
          <Header />
          <Catogeries allCatogry={allCatogry} filterCatogries={filterCatogries} />
          <Item item={item} />
        </Row>
      </Container>

    </div>
  );
}

export default App;
