import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center item ">
      <div className="relative">
        <HashLoader color="#07015f" />
      </div>
    </div>
  );
};

export default LoadingSpinner;
