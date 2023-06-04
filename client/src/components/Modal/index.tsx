import React from 'react';
import ReactDOM from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  backdropVariants,
  buttonVariants,
  modalVariants,
} from '@/lib/animations/modal';

// TODO: dynamically import animation
// TODO: remove scolling
const Modal: React.FC<{
  show: boolean;
  setModal: (state: boolean) => void;
  children: React.ReactNode;
}> = ({ show, setModal, children }) => {
  const closeModal = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      setModal(false);
    }
  };

  return ReactDOM.createPortal(
    <AnimatePresence>
      {show ? (
        <motion.div
          variants={backdropVariants}
          transition={{ duration: 0.1 }}
          initial='closed'
          animate='opened'
          exit='closed'
          className='absolute left-0 top-0 z-50 grid h-screen w-full place-items-center bg-black/50'
          onClick={closeModal}
        >
          <motion.div
            variants={modalVariants}
            initial='closed'
            animate='opened'
            exit='closed'
            className='relative h-3/6 w-3/5 overflow-hidden rounded bg-white p-5'
          >
            {children}
            <motion.button
              variants={buttonVariants}
              initial='closed'
              animate='opened'
              type='button'
              onClick={closeModal}
              className='absolute bottom-5 right-5'
            >
              Close
            </motion.button>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.getElementById('modal-portal') as HTMLDivElement
  );
};

export default Modal;
