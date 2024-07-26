import PostCard from "@/components/postCard/postCard";
import styles from "./blog.module.css";

// export const posts = [
//   {
//     id: 1,
//     title: "Some Random Title",
//     body: "this is little description for PostCard component",
//     img: "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     createdAt: new Date(),
//   },
//   {
//     id: 2,
//     title: "Some Random Title",
//     body: "this is little description for PostCard component",
//     img: "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     createdAt: new Date(),
//   },
//   {
//     id: 3,
//     title: "Some Random Title",
//     body: "this is little description for PostCard component",
//     img: "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     createdAt: new Date(),
//   },
//   {
//     id: 4,
//     title: "Some Random Title",
//     body: "this is little description for PostCard component",
//     img: "https://images.pexels.com/photos/1564473/pexels-photo-1564473.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     createdAt: new Date(),
//   },
// ];

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Something went wrong!");
  }
  return res.json();
};

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
