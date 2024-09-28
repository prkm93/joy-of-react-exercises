import React from 'react';

import { VARIANT_OPTIONS } from '../../constants';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toastMsg, setToastMsg] = React.useState(
    '16 photos have been uploaded'
  );
  const [toastMsgVariant, setToastMsgVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const [toasts, setToasts] = React.useState([]);

  /**
   * submits form details when Pop Toast Button is clicked
   */
  const handleSubmit = React.useCallback(
    (e) => {
      e.preventDefault();

      if (toastMsg && toastMsgVariant) {
        const nextToast = [
          ...toasts,
          {
            message: toastMsg,
            variant: toastMsgVariant,
            id: crypto.randomUUID(),
          },
        ];

        setToasts(nextToast);

        setToastMsg('');
        setToastMsgVariant(VARIANT_OPTIONS[0]);
      } else {
        console.log('Toast message or variant is missing');
      }
    },
    [toastMsg, toastMsgVariant, toasts]
  );

  /**
   * called when X button clicked on toast to dismiss it
   */
  const handleDismiss = React.useCallback(
    (id) => {
      const newToasts = toasts.filter((item) => item.id !== id);
      setToasts(newToasts);
    },
    [toasts]
  );

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === 'Escape') {
        setToasts([]);
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <ToastContext.Provider
      value={{
        toastMsg,
        setToastMsg,
        toastMsgVariant,
        setToastMsgVariant,
        toasts,
        handleDismiss,
        handleSubmit,
      }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
