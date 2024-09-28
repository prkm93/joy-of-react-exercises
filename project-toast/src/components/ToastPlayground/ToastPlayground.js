import React from 'react';

import ToastShelf from '../ToastShelf';
import Button from '../Button';
import { ToastContext } from '../ToastProvider';

import { VARIANT_OPTIONS } from '../../constants';

import styles from './ToastPlayground.module.css';

function ToastPlayground() {
  const {
    toastMsg,
    setToastMsg,
    toastMsgVariant,
    setToastMsgVariant,
    handleSubmit,
  } = React.useContext(ToastContext);

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form onSubmit={handleSubmit}>
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: 'baseline' }}>
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={toastMsg || ''}
                onChange={({ target }) => setToastMsg(target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {/* TODO Other Variant radio buttons here */}
              {VARIANT_OPTIONS.map((variantType) => {
                return (
                  <label htmlFor={`variant-${variantType}`} key={variantType}>
                    <input
                      type="radio"
                      id={`variant-${variantType}`}
                      name="variant"
                      value={variantType}
                      checked={toastMsgVariant === variantType}
                      onChange={({ target }) =>
                        setToastMsgVariant(target.value)
                      }
                    />
                    {variantType}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
