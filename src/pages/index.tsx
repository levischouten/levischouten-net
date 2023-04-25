import Layout from "@/components/layout";
import { getAllBlogs } from "@/lib/api";
import { motion } from "framer-motion";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import { format, parseISO } from "date-fns";

export default function Home({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout showBanner>
      <div className="grid grid-cols-1 gap-12">
        <section className="grid grid-cols-1 gap-8">
          <div className="grid grid-cols-1 gap-4">
            <h2 className="font-bold text-xl px-8">Latest blogs</h2>
            {blogs.map((blog) => {
              return (
                <motion.div
                  key={blog.slug}
                  initial={{ translateX: "-10px", opacity: 0 }}
                  whileInView={{ translateX: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 gap-12 p-8"
                >
                  <Link href={`blogs/${blog.slug}`}>
                    <div className="grid grid-cols-4 items-center">
                      <div className="grid grid-cols-1 gap-4 col-span-4 sm:col-span-3">
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
                        className="object-cover col-span-4 sm:col-span-1 sm:h-3/4"
                      />
                    </div>
                  </Link>
                  <hr className="m-auto w-full border-slate-300" />
                </motion.div>
              );
            })}
          </div>

          <Link className="mx-auto underline underline-offset-4" href="/blogs">
            View all blogs
          </Link>
        </section>
      </div>
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
  ]).slice(0, 3) as Blog[]; // TODO: Remove type assertion

  return {
    props: {
      blogs,
    },
  };
}
