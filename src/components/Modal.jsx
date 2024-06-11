import { useNavigate } from 'react-router-dom';

import styles from './Modal.module.css';
import PropTypes from 'prop-types';

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    };

function Modal({ children }) {
    const navigate = useNavigate();
    
    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    const closeHandler = () => {
        navigate(-1);
    }


  return (
    <div className={styles.backdrop} onClick={closeHandler}>
      <dialog open className={styles.modal} onClick={stopPropagation}>{children}</dialog>
    </div>
  );
}

export default Modal;