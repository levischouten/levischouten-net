import Image from "next/image";
import Link from "next/link";

import profileImage from "@/assets/me.jpeg";
import GithubIcon from "@/assets/github.svg";
import TwitterIcon from "@/assets/twitter.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import Head from "next/head";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  introText?: string;
  showBanner?: boolean;
};

export default function Header(props: Props) {
  const { title, showBanner, introText } = props;

  const router = useRouter();

  return (
    <>
      <Head>
        <title>{title || "Levi Schouten"}</title>
        <meta
          name="description"
          content="Experienced Full-Stack Software Developer. Explore my portfolio and
          achievements in software development and technology. Let's
          collaborate on innovative solutions."
        />
      </Head>
      <header className="grid grid-cols-1 gap-24">
        <div className="flex sm:justify-end justify-center">
          <nav className="flex gap-4">
            <Link
              className={router.pathname === "/" ? "font-bold" : ""}
              href="/"
            >
              Home
            </Link>
            <Link
              className={router.pathname === "/blogs" ? "font-bold" : ""}
              href="/blogs"
            >
              Blogs
            </Link>
            <Link
              className={router.pathname === "/contact" ? "font-bold" : ""}
              href="/contact"
            >
              Contact
            </Link>
          </nav>
        </div>

        {showBanner && (
          <div className="grid grid-cols-1 gap-12 mx-auto">
            <motion.div
              initial={{ translateY: "-10px", opacity: 0 }}
              animate={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              <div className="flex gap-4 items-center">
                <Image
                  src={profileImage}
                  alt="Picture of me"
                  width={100}
                  height={100}
                  className="rounded-full"
                />
                <div>
                  <h1 className="text-3xl font-semibold mb-2 text-black">
                    Levi Schouten
                  </h1>
                  <div className="flex gap-4">
                    <Link
                      href="https://twitter.com/levischoute"
                      target="_blank"
                    >
                      <Image
                        src={TwitterIcon}
                        alt="Twitter icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/levischouten__/"
                      target="_blank"
                    >
                      <Image
                        src={InstagramIcon}
                        alt="Instagram icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/levi-schouten-3094181a2/"
                      target="_blank"
                    >
                      <Image
                        src={LinkedinIcon}
                        alt="Linkedin icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                    <Link
                      href="https://github.com/levischouten"
                      target="_blank"
                    >
                      <Image
                        src={GithubIcon}
                        alt="Github icon"
                        width={20}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <p className="max-w-sm flex items-center text-slate-900">
                {introText}
              </p>
            </motion.div>

            {/* <hr className="m-auto w-2/3 border-slate-300" /> */}
          </div>
        )}
      </header>
    </>
  );
}
