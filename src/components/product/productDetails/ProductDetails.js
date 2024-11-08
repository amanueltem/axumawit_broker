import styles from "./ProductDetails.module.scss";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import spinnerImg from "../../../assets/spinner.jpg";

import { useDispatch, useSelector } from "react-redux";

import useFetchDocument from "../../../customHooks/useFetchDocument";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import Card from "../../card/Card";
import StarsRating from "react-star-rate";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
 
  const { document } = useFetchDocument("items", id);
  const { data } = useFetchCollection("reviews");
  const filteredReviews = data.filter((review) => review.productID === id);



  useEffect(() => {
    setProduct(document);
  }, [document]);





  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Product Details</h2>
        <div>
          <Link to="/#products">&larr; ናብ ዋና ገፅ ተመለስ</Link>
        </div>
        {product === null ? (
          <img src={spinnerImg} alt="Loading" style={{ width: "50px" }} />
        ) : (
          <>
            <div className={styles.details}>
              <div className={styles.img}>
                <img src={product.imageURL} alt={product.name} />
              </div>
              <div className={styles.content}>
                <h3>{product.name}</h3>
                <p className={styles.price}>{`${product.price} ብር`}</p>
                <p>{product.desc}</p>
                <p>
                  <b>SKU</b> {product.id}
                </p>
             

                 <p>
  {product.size > 0 && (
    <>
      <b>ስፍሓት መሬት</b> {product.size} ካሬ
    </>
  )}
</p>


              
            
              </div>
            </div>
          </>
        )}
        <Card cardClass={styles.card}>
          <h3>Product Reviews</h3>
          <div>
            {filteredReviews.length === 0 ? (
              <p>There are no reviews for this product yet.</p>
            ) : (
              <>
                {filteredReviews.map((item, index) => {
                  const { rate, review, reviewDate, userName } = item;
                  return (
                    <div key={index} className={styles.review}>
                      <StarsRating value={rate} />
                      <p>{review}</p>
                      <span>
                        <b>{reviewDate}</b>
                      </span>
                      <br />
                      <span>
                        <b>by: {userName}</b>
                      </span>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductDetails;
