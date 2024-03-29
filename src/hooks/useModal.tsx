import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => setIsOpen((state) => !state);

  return {
    isOpen,
    handleToggleModal,
  };
};
