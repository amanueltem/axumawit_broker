import React, { useEffect } from "react";
import InfoBox from "../../infoBox/InfoBox";
import styles from "./Home.module.scss";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  STORE_PRODUCTS,
} from "../../../redux/slice/productSlice";

import useFetchCollection from "../../../customHooks/useFetchCollection";


//Icons
const earningIcon = <AiFillDollarCircle size={30} color="#b624ff" />;
const productIcon = <BsCart4 size={30} color="#1f93ff" />;
const ordersIcon = <FaCartArrowDown size={30} color="orangered" />;

const Home = () => {
  const products = useSelector(selectProducts);


  const fbProducts = useFetchCollection("items");


  return (
    <div className={styles.home}>
      <h2>Admin Home</h2>
      <div className={styles["info-box"]}>
     
        <InfoBox
          cardClass={`${styles.card} ${styles.card2}`}
          title={"Products"}
          count={products.length}
          icon={productIcon}
        />
 
      </div>
      <div>
   
      </div>
    </div>
  );
};

export default Home;
