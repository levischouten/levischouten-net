import Layout from "@/components/layout";
import { getAllBlogs } from "@/lib/api";
import { parseISO, format } from "date-fns";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";

export default function Blogs({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout showBanner title="Levi Schouten | Blogs">
      {blogs.map((blog) => {
        return (
          <div className="grid grid-cols-1 gap-12 p-8" key={blog.slug}>
            <Link href={`blogs/${blog.slug}`}>
              <div className="grid grid-cols-4 items-center">
                <div className="grid grid-cols-1 gap-4 col-span-3">
                  <h2 className="font-bold text-lg">{blog.title}</h2>
                  <p>{blog.excerpt}</p>
                  <time className="text-slate-500" dateTime={blog.date}>
                    {format(parseISO(blog.date), "LLLL d, yyyy")}
                  </time>
                </div>
                <Image
                  src={blog.coverImage}
                  alt="Blog thumbnail image"
                  width={1000}
                  height={1000}
                  className="object-cover h-3/4"
                />
              </div>
            </Link>
            <hr className="m-auto w-full border-slate-300" />
          </div>
        );
      })}
    </Layout>
  );
}

type Blog = {
  title: string;
  date: string;
  slug: string;
  excerpt: string;
  coverImage: string;
};

export async function getStaticProps() {
  const blogs = getAllBlogs([
    "slug",
    "excerpt",
    "title",
    "date",
    "coverImage",
  ]) as Blog[]; // TODO: Remove type assertion

  return {
    props: {
      blogs,
    },
  };
}
