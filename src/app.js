import { useState } from 'react';
import styles from './app.module.css';

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transform = `translateX(-${currentIndex * 100}%)`;
  return (
    <div className={styles.container}>
      <div className={styles.slideContainer}>
        <div
          className={styles.slide}
          style={{
            left: '0%',
            transform,
          }}
        >
          <img src="images/img-1.jpeg" alt="image-1" />
        </div>
        <div
          className={styles.slide}
          style={{
            left: '100%',
            transform,
          }}
        >
          <img src="images/img-2.jpeg" alt="image-2" />
        </div>
        <div
          className={styles.slide}
          style={{
            left: '200%',
            transform,
          }}
        >
          <img src="images/person-1.jpeg" alt="prerson-1" />
        </div>
      </div>
      <div className={styles.buttons}>
        <button
          disabled={currentIndex === 0}
          onClick={() => {
            setCurrentIndex(currentIndex - 1);
          }}
        >
          Prev
        </button>

        <button
          onClick={() => {
            setCurrentIndex(currentIndex + 1);
          }}
          disabled={currentIndex === 2}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
