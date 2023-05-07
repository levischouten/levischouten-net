import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

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

export function getBlogSlugs() {
  return fs.readdirSync(blogsDirectory);
}

export function getBlogBySlug<T extends Array<keyof Blog>>(
  slug: string,
  fields: T
) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = path.join(blogsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  // Ensure only the minimal needed data is exposed
  return fields.reduce<Record<string, unknown>>((prev, curr) => {
    if (curr === "slug") {
      prev[curr] = realSlug;
    }
    if (curr === "content") {
      prev[curr] = content;
    }
    if (typeof data[curr] !== "undefined") {
      prev[curr] = data[curr];
    }
    return prev;
  }, {}) as Record<T[number], string>;
}

export function getAllBlogs<T extends Array<keyof Blog>>(fields: T) {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogBySlug(slug, [...fields, "date"]))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
