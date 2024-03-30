import { PropsWithChildren } from "react";
import "./Modal.scss";

export const Modal = ({
  children,
  isOpen,
  handleCloseModal,
}: { isOpen: boolean; handleCloseModal: () => void } & PropsWithChildren) => {
  return (
    <dialog className="modal" open={isOpen}>
      <div className="modal-background" onClick={handleCloseModal} />
      <div className="modal-content">
        {children}
        <button className="modal-close-cross" onClick={handleCloseModal}>
          x
        </button>
      </div>
    </dialog>
  );
};
