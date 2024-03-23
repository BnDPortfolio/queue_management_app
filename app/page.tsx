import LoginDiv from "./(components)/LoginDiv";
import SplashMessage from "./(components)/SplashMessage";
import styles from "./page.module.css";

const Home = () => {
  return (
    <main className={styles.main}>
      <LoginDiv />
      <SplashMessage />
    </main>
  );
};

export default Home;
