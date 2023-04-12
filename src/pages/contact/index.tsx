import Layout from "@/components/layout";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <Layout title="Contact" showBanner>
      <motion.form
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-4 p-8"
      >
        <input
          className="border-slate-500 border-2 p-4 rounded-md"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
        />

        <input
          className="border-slate-500 border-2 p-4 rounded-md"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
        />

        <textarea
          className="border-slate-500 border-2 p-4 rounded-md"
          id="message"
          name="message"
          placeholder="What would you like to talk about?"
          rows={4}
        />

        <button
          className="px-8 py-4 bg-blue-500 text-white rounded-md"
          type="submit"
          onClick={(e) => e.preventDefault()}
        >
          Send
        </button>
      </motion.form>
    </Layout>
  );
}
