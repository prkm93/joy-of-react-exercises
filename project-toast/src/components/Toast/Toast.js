import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};

function Toast({ children, toastMsgVariant, id, onDismiss }) {
  const IconVariant = ICONS_BY_VARIANT[toastMsgVariant];

  return (
    <div className={`${styles.toast} ${styles[toastMsgVariant]}`}>
      <div className={styles.iconContainer}>
        <IconVariant size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button
        className={styles.closeButton}
        onClick={() => onDismiss(id)}
        aria-label="Dismiss message"
        aria-live="off">
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  );
}

export default Toast;
