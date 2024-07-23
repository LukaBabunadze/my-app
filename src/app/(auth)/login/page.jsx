import LoginForm from "@/components/loginForm/loginForm";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action="">
          <button className={styles.github}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
