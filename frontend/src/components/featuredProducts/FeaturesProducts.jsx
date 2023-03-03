import Box from "../Box/Box";
import "./featuredProducts.scss";

const FeaturesProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
      img2: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Long Sleeve Graphic T-shirt",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/3760852/pexels-photo-3760852.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "Coat",
      isNew: true,
      oldPrice: 19,
      price: 12,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "skirt",
      oldPrice: 19,
      price: 12,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600",
      title: "hat",
      oldPrice: 19,
      price: 12,
    },
  ];
  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} Products</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti
          odio ipsam vero deserunt rem blanditiis obcaecati autem porro
          reprehenderit omnis ex sed facere, nobis, velit dolor animi maiores
          mollitia nam.
        </p>
      </div>
      <div className='bottom'>
        {data?.map((item) => (
          <Box key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesProducts;
