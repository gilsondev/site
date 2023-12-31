import React from "react";
import Hyperlink from "../hyperlink";
import PostCard from "../postcard";
import { fetchLatestPosts } from "@/lib/hashnode/client";
import { useTranslations } from "next-intl";

const BlogPosts = async () => {
  const t = useTranslations("BlogPosts");
  const posts = await fetchLatestPosts();

  return (
    <div className="mt-16">
      <h3 className="text-xl font-semibold dark:text-gray-200">Blog Posts</h3>
      <div className="flex flex-col gap-3 mt-3 list-none">
        {posts.data.user.publication.posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
      <Hyperlink
        className="mt-3 text-base dark:text-gray-200"
        href="https://blog.gilsondev.in"
        label="Ver mais"
        target="_blank"
      />
    </div>
  );
};

export default BlogPosts;
