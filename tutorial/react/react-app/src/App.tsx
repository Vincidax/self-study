import ItemDescription from "./components/itemDescription";
import ListGroup from "./components/ListGroup";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Product
        name="Google Home"
        description="Your AI assistant"
        price={59.99}
      />

      <Product
        name="Macbook Pro"
        description="Your Favorite Computer"
        price={2500}
      />

      <Product
        name="iPhone 12 Pro max"
        description="The best Iphone"
        price={1200}
      />
    </div>
  );
}

export default App;
