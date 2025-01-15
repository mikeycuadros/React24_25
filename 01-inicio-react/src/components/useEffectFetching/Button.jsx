import carrito from "../../assets/carrito.png";
const Button = (props) => {
  const { className, onClick } = props;
  return (
    <button className={className} onClick={onClick}>
      {props.children}
      <img src={carrito} className="w-6 h-6 inline-block"></img>
    </button>
  );
};

export default Button;
