import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  //   const {post, name, desc} = props;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src={
              post.img ??
              "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            fill
            alt="Nature"
            className={styles.img}
          />
        </div>
        <span className={styles.date}>
          {post.createdAt?.toString().slice(4, 16) ??
            new Date().toString().slice(4, 16)}
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/blog/${post.id}`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
