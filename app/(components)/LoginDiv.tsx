import styles from "@/app/(styles)/login.module.css";
import Button from "./Button";

const LoginDiv = () => {
  return (
    <div className={styles.description}>
      <p> This is going to be a queue app!</p>
      <input type="text"></input>
      <input type="text"></input>
      <Button />
    </div>
  );
};

export default LoginDiv;
