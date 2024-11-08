import { useState } from "react";
import styles from "./auth.module.scss";
import loginImg from "../../assets/login.png";
import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/card/Card";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/config";
import { toast } from "react-toastify";
import Loader from "../../components/loader/Loader";
import { useSelector } from "react-redux";


const Login = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const redirectUser = () => {
  
    navigate("/");
  };

  const signInWithGoogle = () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("Login successfully");
        redirectUser();
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading && <Loader />}
      <section className={`container ${styles.auth}`}>
        <div className={styles.img}>
          <img src={loginImg} alt="Login" width="400" />
        </div>

        <Card>
          <div className={styles.form}>
            <h2>Login</h2>
            <button
              className="--btn --btn-danger --btn-block"
              onClick={signInWithGoogle}
            >
              <FaGoogle color="#fff" /> Login With Google
            </button>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Login;
