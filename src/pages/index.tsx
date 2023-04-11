import Layout from "@/components/layout";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div className="max-w-lg mx-auto grid grid-cols-1 gap-12">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 gap-12"
        >
          <div className="grid grid-cols-1 gap-4">
            <h2 className="font-bold text-xl">Latest blogs</h2>
            <Link href="/" className="grid grid-cols-1 gap-8 bg-slate-100 p-4">
              <p className="">
                Lorem velit sint pariatur Lorem adipisicing ea ullamco. Aliquip
                pariatur laboris fugiat fugiat ea. Qui do in ullamco sint
                nostrud minim elit Lorem culpa.
              </p>
              <h3 className="font-medium text-lg">Lorem Velit</h3>
            </Link>
            <Link href="/" className="grid grid-cols-1 gap-8 bg-slate-100 p-4">
              <p className="">
                Lorem velit sint pariatur Lorem adipisicing ea ullamco. Aliquip
                pariatur laboris fugiat fugiat ea. Qui do in ullamco sint
                nostrud minim elit Lorem culpa.
              </p>
              <h3 className="font-medium text-lg">Lorem Velit</h3>
            </Link>
            <Link href="/" className="grid grid-cols-1 gap-8 bg-slate-100 p-4">
              <p className="">
                Lorem velit sint pariatur Lorem adipisicing ea ullamco. Aliquip
                pariatur laboris fugiat fugiat ea. Qui do in ullamco sint
                nostrud minim elit Lorem culpa.
              </p>
              <h3 className="font-medium text-lg">Lorem Velit</h3>
            </Link>
          </div>

          <Link className="mx-auto underline underline-offset-4" href="/blogs">
            View all blogs
          </Link>

          <hr className="m-auto w-3/4 border-slate-300" />
        </motion.section>
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 gap-12"
        >
          <div className="grid grid-cols-1 gap-4">
            <h2 className="font-bold text-xl">Latest projects</h2>
            <Link href="/" className="grid grid-cols-1 gap-8 bg-slate-100 p-4">
              <p className="">
                Lorem velit sint pariatur Lorem adipisicing ea ullamco. Aliquip
                pariatur laboris fugiat fugiat ea. Qui do in ullamco sint
                nostrud minim elit Lorem culpa.
              </p>
              <h3 className="font-medium text-lg">Lorem Velit</h3>
            </Link>
            <Link href="/" className="grid grid-cols-1 gap-8 bg-slate-100 p-4">
              <p className="">
                Lorem velit sint pariatur Lorem adipisicing ea ullamco. Aliquip
                pariatur laboris fugiat fugiat ea. Qui do in ullamco sint
                nostrud minim elit Lorem culpa.
              </p>
              <h3 className="font-medium text-lg">Lorem Velit</h3>
            </Link>
            <Link href="/" className="grid grid-cols-1 gap-8 bg-slate-100 p-4">
              <p className="">
                Lorem velit sint pariatur Lorem adipisicing ea ullamco. Aliquip
                pariatur laboris fugiat fugiat ea. Qui do in ullamco sint
                nostrud minim elit Lorem culpa.
              </p>
              <h3 className="font-medium text-lg">Lorem Velit</h3>
            </Link>
          </div>

          <Link
            className="mx-auto underline underline-offset-4"
            href="/projects"
          >
            View all projects
          </Link>
        </motion.section>
      </div>
    </Layout>
  );
}
