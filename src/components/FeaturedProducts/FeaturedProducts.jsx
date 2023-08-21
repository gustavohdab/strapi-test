import useFetch from "../../hooks/useFetch";
import Card from "../Card/Card";
import "./FeaturedProducts.scss";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters] [type] [$eq]=${type}`
  );

  console.log(data);
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a
          atque culpa molestias voluptatem iusto dolorum fugit, blanditiis totam
          repellendus quod ducimus, facilis praesentium, in assumenda rem
          doloribus adipisci ipsum!
        </p>
      </div>
      <div className="bottom">
        {loading && <h1>Loading...</h1>}
        {error && <h1>Error...</h1>}
        {data?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
