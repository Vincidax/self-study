import ItemDescription from "./itemDescription";

type ProductProps = {
  name: string;
  description: string;
  price: number;
};

function Product({ name, description, price }: ProductProps) {
  return (
    <div>
      <ItemDescription name={name} description={description} />
      <h3>${price}</h3>
    </div>
  );
}

export default Product;
