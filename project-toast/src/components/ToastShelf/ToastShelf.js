import React from 'react';

import { ToastContext } from '../ToastProvider';
import VisuallyHidden from '../VisuallyHidden';
import Toast from '../Toast';

import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts, handleDismiss } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification">
      {toasts?.map((toast) => {
        const { message, variant, id } = toast;
        return (
          <li className={styles.toastWrapper} key={id}>
            <Toast toastMsgVariant={variant} id={id} onDismiss={handleDismiss}>
              <VisuallyHidden>{message}</VisuallyHidden>
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
