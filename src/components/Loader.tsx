import { FC } from "react";

const Loader: FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="loader h-16 w-16 border-8 border-t-8 border-[#7C2483] border-solid rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
