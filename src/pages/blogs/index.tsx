import Layout from "@/components/layout";
import { getAllBlogs } from "@/lib/api";
import { parseISO, format } from "date-fns";
import { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Blogs({
  blogs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout
      showBanner
      title="Levi Schouten | Blogs"
      introText="I love sharing my tech knowledge and experience! Here, you'll find articles and tutorials on everything from front-end to back-end development."
    >
      {blogs.map((blog) => {
        return (
          <motion.div
            initial={{ translateX: "-10px", opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-12 sm:p-8"
            key={blog.slug}
          >
            <Link href={`blogs/${blog.slug}`}>
              <div className="grid grid-cols-4 gap-4 items-center">
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
                  className="object-cover sm:col-span-1 sm:h-3/4 col-span-4"
                />
              </div>
            </Link>
            <hr className="m-auto w-full border-slate-300" />
          </motion.div>
        );
      })}
    </Layout>
  );
}

export async function getStaticProps() {
  const blogs = getAllBlogs(["slug", "excerpt", "title", "date", "coverImage"]);

  return {
    props: {
      blogs,
    },
  };
}
