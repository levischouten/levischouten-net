import Image from "next/image";
import Link from "next/link";

import profileImage from "@/assets/me.jpeg";
import GithubIcon from "@/assets/github.svg";
import TwitterIcon from "@/assets/twitter.svg";
import InstagramIcon from "@/assets/instagram.svg";
import LinkedinIcon from "@/assets/linkedin.svg";
import Head from "next/head";

export default function Header() {
  return (
    <>
      <Head>
        <title>Levi Schouten</title>
      </Head>
      <header className="grid grid-cols-1 gap-24">
        <div className="flex justify-end">
          <nav className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div className="grid grid-cols-2">
            <div className="flex gap-4 items-center">
              <Image
                src={profileImage}
                alt="Picture of me"
                width={100}
                height={100}
                className="rounded-full"
              />
              <div>
                <h1 className="text-3xl font-semibold mb-2">Levi Schouten</h1>
                <div className="flex gap-4">
                  <Image
                    src={TwitterIcon}
                    alt="Twitter icon"
                    width={20}
                    height={20}
                  />
                  <Image
                    src={InstagramIcon}
                    alt="Instagram icon"
                    width={20}
                    height={20}
                  />
                  <Image
                    src={LinkedinIcon}
                    alt="Linkedin icon"
                    width={20}
                    height={20}
                  />
                  <Image
                    src={GithubIcon}
                    alt="Github icon"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
            </div>
            <p className="max-w-sm flex items-center">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              sicing elit. Quisquam
            </p>
          </div>

          <hr className="m-auto w-2/3 border-slate-300" />
        </div>
      </header>
    </>
  );
}
