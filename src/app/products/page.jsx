"use client";
import { useEffect, useState } from "react";
import styles from "./products.module.css";
import Image from "next/image";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((result) => setData(result.products));
  }, []);

  const handleDeleteProduct = (id) => {
    fetch(`https://dummyjson.com/products/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((deletedItem) => {
        setData((prev) => {
          let filteredData = [...prev].filter((item, index, array) => {
            return item.id !== deletedItem.id;
          });
          return filteredData;
        });
      });
  };

  return (
    <div>
      {data.map((product, index, array) => {
        return (
          <div className={styles.productItem} key={product.id}>
            <Image
              width={200}
              height={200}
              src={product.images[0]}
              alt={product.title}
            />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <button>update</button>
            <button onClick={() => handleDeleteProduct(product.id)}>
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
