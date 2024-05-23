import styles from './Modal.module.css';
import PropTypes from 'prop-types';

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    };

function Modal({ onClose, children }) {
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

  return (
    <div className={styles.backdrop} onClick={onClose}>
      <dialog open className={styles.modal} onClick={stopPropagation}>{children}</dialog>
    </div>
  );
}

export default Modal;