import { useEffect, useState } from "react";

const Salud = () => {
  const [edad, setEdad] = useState(0);
  const [sexo, setSexo] = useState("M");
  // useEffect(() => {
  //   console.log("Renderizando al montar el componente");
  // });
  // useEffect(() => {
  //   console.log("Renderizando solo al montar el componente");
  // }, []);
  useEffect(() => {
    console.log(
      "Renderizando al montar el componente y cuando modifique el estado Sexo"
    );
  }, [sexo]);

  const handlerClickEdad = () => {
    setEdad((prevEdad) => prevEdad + 1);
  };

  const handlerClickSexo = () => {
    setSexo((prevSexo) => (prevSexo === "M" ? "F" : "M"));
  };

  return (
    <>
      <p>Edad: {edad}</p>
      <button onClick={handlerClickEdad}>Aumentar Edad</button>
      <p>Sexo: {sexo}</p>
      <button onClick={handlerClickSexo}>Cambiar Sexo</button>
    </>
  );
};

export default Salud;
