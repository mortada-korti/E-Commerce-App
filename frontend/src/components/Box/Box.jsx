import "./box.scss";
const Box = ({ item }) => {
  return (
    <div className='box'>
      <div className='box--top'>
        <img src={item.img} alt='' className='mainImg' />
        {item.img2 && <img src={item.img2} alt='' className='secondImg' />}
        {item.isNew && <span className='new'>New Season</span>}
      </div>
      <div className='box--bottom'>
        <span className='box--title'>{item.title}</span>
        <div className='box--prices'>
          <span className='old'>{item.oldPrice}$</span>
          <span>{item.price}$</span>
        </div>
      </div>
    </div>
  );
};

export default Box;
