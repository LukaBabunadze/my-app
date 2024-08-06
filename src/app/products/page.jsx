"use client";
import { useEffect, useState } from "react";
import styles from "./products.module.css";
import Image from "next/image";

const Products = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [updateProduct, setUpdateProduct] = useState({});

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

  const handleModalOpen = (id) => {
    setIsOpen(true);
    let filteredProduct = data.filter((item, index, array) => {
      return item.id == id;
    })[0];

    setUpdateProduct(filteredProduct);
  };

  const handleProductUpdate = () => {
    console.log(updateProduct.id);
    console.log(updateProduct);
    console.log(updateProduct.title);
    fetch(`https://dummyjson.com/products/${updateProduct.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: updateProduct.title }),
    })
      .then((resp) => resp.json())
      .then((result) => {
        let index = data.findIndex((item) => item.id == result.id);
        setData((prev) => {
          const newArray = [...prev];
          if (index >= 0) {
            newArray[index] = result;
          }
          return newArray;
        });
      });
    setIsOpen(false);
  };

  // useEffect(() => {
  //   fetch("https://dummyjson.com/products")
  //     .then((res) => res.json())
  //     .then((result) => console.log(result.products));
  // }, []);

  return (
    <div className={styles.container}>
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
            <button onClick={() => handleModalOpen(product.id)}>update</button>
            <button onClick={() => handleDeleteProduct(product.id)}>
              delete
            </button>
          </div>
        );
      })}
      {isOpen && (
        <div className={styles.modalContainer}>
          <div className={styles.modalContentWrapper}>
            <div className={styles.inputWrapper}>
              <h5>title</h5>
              <input
                type="text"
                placeholder={updateProduct.title}
                onChange={(event) => {
                  return setUpdateProduct((prev) => {
                    return { ...prev, title: event.target.value };
                  });
                }}
              />
            </div>
            <button onClick={() => handleProductUpdate()}>
              update product
            </button>
            <button
              onClick={() => {
                return setIsOpen(false);
              }}
            >
              close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
