import styles from "./slug.module.css";
// import { posts } from "../page";
import Image from "next/image";

const getSinglePost = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    throw new Error("Can't fetch Single blog");
  }
  return res.json();
};

const SingleBlog = async ({ params }) => {
  // const post = posts.filter((post, index, array) => {
  //   return post.id == params.slug;
  // })[0];

  const post = await getSinglePost(params.slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            post.img ??
            "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {new Date().toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.body}</div>
      </div>
    </div>
  );
};

export default SingleBlog;
