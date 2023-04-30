import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  showContact?: boolean;
};

export default function Footer(props: Props) {
  const { showContact } = props;

  return (
    <footer className="grid grid-cols-1 gap-4">
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 gap-16"
      >
        {showContact && (
          <div className="grid grid-cols-1 mx-auto max-w-sm gap-4">
            <p className="text-center text-lg font-medium">
              Don&apos;t hesitate to reach out! Let&apos;s see if we can help
              each other out.
            </p>
            <button className="px-4 py-2 rounded-sm mx-auto text-white bg-blue-500">
              Contact me
            </button>
          </div>
        )}
        <div className="grid grid-rows-3 sm:grid-rows-2 grid-flow-col gap-x-8 m-auto">
          <Link href="resources" target="_blank">
            Resources
          </Link>
          <Link href="tools" target="_blank">
            Tools
          </Link>
          <Link href="resume.levischouten.net" target="_blank">
            Resume
          </Link>
          <Link
            href="https://www.instagram.com/levischouten__/"
            target="_blank"
          >
            Instagram
          </Link>
          <Link href="https://twitter.com/levischoute" target="_blank">
            Twitter
          </Link>
          <Link
            href="https://www.linkedin.com/in/levi-schouten-3094181a2/"
            target="_blank"
          >
            Linkedin
          </Link>
          <Link href="https://github.com/levischouten" target="_blank">
            Github
          </Link>
          <Link href="https://gitlab.com/levischoute" target="_blank">
            Gitlab
          </Link>
        </div>
      </motion.div>
      <hr className="m-auto w-2/3 border-slate-300" />
      <p className="mx-auto text-slate-500 text-sm">
        Copyright © Levi Schouten
      </p>
    </footer>
  );
}
