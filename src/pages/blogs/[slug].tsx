import Layout from "@/components/layout";
import { getAllBlogs, getBlogBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import type { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Blog({
  blog,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  return (
    <Layout title={`Levi Schouten | ${blog.title}`}>
      {router.isFallback ? (
        <h1>Loading...</h1>
      ) : (
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-16"
        >
          <header className="grid grid-cols-2">
            <div>
              <h1 className="text-2xl font-bold">{blog.title}</h1>
              <p className="text-slate-400">{blog.date}</p>
            </div>
            <p>{blog.excerpt}</p>
          </header>
          <hr className="m-auto w-2/3 border-slate-300" />
          <div className="max-w-2xl mx-auto">
            <Image
              src={blog.coverImage}
              alt="Cover image"
              width={700}
              height={700}
              className="rounded-sm"
            />
            <div
              className="markdown"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </motion.article>
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

type Blog = {
  title: string;
  date: string;
  slug: string;
  author: string;
  content: string;
  ogImage: string;
  coverImage: string;
  excerpt: string;
};

export async function getStaticProps({ params }: Params) {
  const blog = getBlogBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "excerpt",
  ]) as Blog; // TODO: Remove type assertion
  const content = await markdownToHtml(blog.content || "");

  return {
    props: {
      blog: {
        ...blog,
        content,
      },
    },
  } as const;
}

export async function getStaticPaths() {
  const posts = getAllBlogs(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
