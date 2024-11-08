import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FILTER_BY_SIZE,
  FILTER_BY_CATEGORY,
  FILTER_BY_PRICE,
} from "../../../redux/slice/filterSlice";
import {
  selectMaxPrice,
  selectMinPrice,
  selectMaxSize,
  selectMinSize,
  selectProducts,
} from "../../../redux/slice/productSlice";
import styles from "./ProductFilter.module.scss";

const ProductFilter = () => {
  const [category, setCategory] = useState("All");
  const [size, setSize] = useState(1000); // Added size state with a default value
  const [price, setPrice] = useState(10000000);

  const products = useSelector(selectProducts);
  const minPrice = useSelector(selectMinPrice);
  const maxPrice = useSelector(selectMaxPrice);
  const minSize = useSelector(selectMinSize);
  const maxSize = useSelector(selectMaxSize);


  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  useEffect(() => {
    dispatch(FILTER_BY_SIZE({ products, size }));
  }, [dispatch, products, size]);

  useEffect(() => {
    dispatch(FILTER_BY_PRICE({ products, price }));
  }, [dispatch, products, price]);

  const filterProducts = (cat) => {
    setCategory(cat);
    dispatch(FILTER_BY_CATEGORY({ products, category: cat }));
  };

  const clearFilters = () => {
    setCategory("All");
    setSize(maxSize);
    setPrice(maxPrice);
  };

  return (
    <div className={styles.filter}>
      <h4>ዓይነታት</h4>
      <div className={styles.category}>
        {allCategories.map((cat, index) => (
          <button
            key={index}
            type="button"
            className={category === cat ? styles.active : null}
            onClick={() => filterProducts(cat)}
          >
            &#8250; {cat}
          </button>
        ))}
      </div>

      <h4>ስፍሓት ብካሬ</h4>
      <p>{`${size}`}</p>
      <div className={styles.price}>
        <input
          type="range"
          value={size}
          onChange={(e) => setSize(Number(e.target.value))}
          min={minSize}
          max={maxSize}
        />
      </div>

      <h4>ዋጋ ብር</h4>
      <p>{`${price} ብር`}</p>
      <div className={styles.price}>
        <input
          type="range"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          min={minPrice}
          max={maxPrice}
        />
      </div>
      <br />
      <button className="--btn --btn-danger" onClick={clearFilters}>
        Clear Filter
      </button>
    </div>
  );
};

export default ProductFilter;
