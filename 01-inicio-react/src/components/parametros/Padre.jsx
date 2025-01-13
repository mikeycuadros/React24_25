const Padre = (props) => {
  const { info, setInfo, children, handleClickEdad } = props;
  const handleClick = () => {
    setInfo({ ...info, nombre: "Pepe" });
  };

  return (
    <>
      <section>
        <h2>Bienvenido: {info.nombre}</h2>
        <p>Edad: {info.edad}</p>
        {info.isAdmin && <p>Es administrador</p>}
        {info.edad < 18 ? <p>Eres menor de edad</p> : <p>Eres mayor de edad</p>}
        <div>
          <button onClick={handleClick}>Modificar</button>
        </div>
        <div>
          <button onClick={handleClickEdad}>Añadir edad</button>
        </div>
      </section>
      <section>{children}</section>
    </>
  );
};

export default Padre;
