import { FC } from "react";

interface ToastProps {
  message: string;
  type: 'success' | 'error' | '';
}

const Toast: FC<ToastProps> = ({ message, type }) => {
  return (
    <div className={`fixed bottom-4 right-4 p-4 rounded ${type === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white shadow-md transition-opacity duration-300`}>
      {message}
    </div>
  );
};

export default Toast;
