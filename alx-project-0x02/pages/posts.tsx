import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage = ({ posts }: PostsPageProps) => {
  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <h1 className="text-xl font-bold">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            userId={post.userId}
          />
        ))}
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();

  const posts = data.map((post: any) => ({
    id: post.id,
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
};

export default PostsPage;
