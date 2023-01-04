import React from "react";

interface ModalProps {
  children: React.ReactNode,
  title: string,
  onClose: () => void
}

const Modal = ({ children, title, onClose }: ModalProps) => {
  return (
    <>
      <div onClick={onClose} className="fixed top-0 left-0 w-full h-screen bg-[#333] opacity-[0.5]"></div>
      <div className="w-[30rem] fixed top-[25%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] p-5 rounded-lg shadow-xl">
        <h3 className="mb-6 font-medium text-2xl">{title}</h3>
        {children}
      </div>
    </>
  );
};

export default Modal;