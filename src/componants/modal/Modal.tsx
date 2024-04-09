import { PropsWithChildren } from "react";
import "./Modal.scss";

export const Modal = ({
  children,
  isOpen,
  handleCloseModal,
}: { isOpen: boolean; handleCloseModal: () => void } & PropsWithChildren) => {
  return (
    <dialog className="absolute w-full h-full bg-transparent border-0 p-0 m-0 top-0" open={isOpen}>
      <div className="z-5 fixed w-full h-full bg-gray-700 opacity-50" onClick={handleCloseModal} />
      <div className="z-10 absolute max-w-xs w-full top-1/2 left-1/2 p-5 bg-cyan-400 border border-solid rounded-md border-cyan-500 ">
        {children}
        <button className="absolute flex justify-center items-center cursor-pointer w-6 h-6 -right-4 -top-4 rounded-full border-0 bg-cyan-900 text-xl text-white " onClick={handleCloseModal}>
          x
        </button>
      </div>
    </dialog>
  );
};
