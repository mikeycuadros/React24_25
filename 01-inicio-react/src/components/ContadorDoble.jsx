import { useState } from "react";

const ContadorDoble = () => {
  // hooks
  const [friends, setFriends] = useState({ Juan: 0, Carlos: 0, Maria: 0 });

  // vairables

  // funciones
  function handlerClickLike(nombre, numero) {
    if (numero > 0) {
      setFriends((preValue) => ({
        ...preValue,
        [nombre]: preValue[nombre] + numero,
      }));
    } else if (numero < 0 && friends[nombre] > 0) {
      setFriends((preValue) => ({
        ...preValue,
        [nombre]: preValue[nombre] + numero,
      }));
    }
  }

  function calculateAverage() {
    const totalLikes = Object.values(friends).reduce(
      (acc, curr) => acc + curr,
      0
    );
    const totalFriends = Object.keys(friends).length;
    return (totalLikes / totalFriends).toFixed(1);
  }

  return (
    <div className="max-w-sm mx-auto mt-8 p-6 bg-grey-200 shadow-sm rounded-md">
      <h1 className="text-2xl font-bold mb-5 text-center ">
        Contador de Likes de mis amigos
      </h1>
      <div className="text-center mt-4">
        <span>
          Juan tiene <strong>{friends.Juan}</strong> likes
        </span>
        <div className="flex justify-center mt-2 gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => handlerClickLike("Juan", 1)}
          >
            Me gusta
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            onClick={() => handlerClickLike("Juan", -1)}
          >
            No me gusta
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        <span>
          Maria tiene <strong>{friends.Maria}</strong> likes
        </span>
        <div className="flex justify-center mt-2 gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            onClick={() => handlerClickLike("Maria", 1)}
          >
            Me gusta
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded-md"
            onClick={() => handlerClickLike("Maria", -1)}
          >
            No me gusta
          </button>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Media de los contadores
          </h2>
          <p className="text-lg">
            La media es: <span className="font-bold">{calculateAverage()}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContadorDoble;
//Crear la media aritmetica de todos los likes
