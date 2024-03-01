import viteLogo from '/vite.svg';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrapper}>
      <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
        <img src={viteLogo} className={styles.logo} alt="Vite logo" />
      </a>
      <h1>Vite + React + TS + SCSS</h1>
    </div>
  );
}

export default App;
