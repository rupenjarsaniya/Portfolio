import React, { FC, ReactNode, useRef } from "react";
import s from "./Modal.module.scss";
import useClickOutside from "@/hooks/useClickOutside";

interface IModal {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: FC<IModal> = ({ children, isOpen, onClose }) => {
  const ref = useRef(null as any);

  useClickOutside(ref, () => {
    onClose();
  });

  if (!isOpen) return null;

  return (
    <div className={s.root}>
      <div
        className={s.root__modal}
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {children}
      </div>
    </div>
  );
};
