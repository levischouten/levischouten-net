import Link from "next/link";

export default function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-8">
      <div className="grid grid-cols-1 mx-auto max-w-sm gap-4">
        <p className="text-center">
          Mollit incididunt ex proident amet velit fugiat magna occaecat et id
          aliquip tempor.
        </p>
        <button className="px-4 py-2 rounded-sm mx-auto text-white bg-blue-500">
          Contact me
        </button>
      </div>
      <hr className="m-auto w-2/3 border-slate-300" />
      <div className="grid grid-rows-2 grid-flow-col gap-x-8 m-auto">
        <Link href="resources">Resources</Link>
        <Link href="tools">Tools</Link>
        <Link href="resume">Resume</Link>
        <Link href="projects">Projects</Link>
        <Link href="instagram">Instagram</Link>
        <Link href="twitter">Twitter</Link>
        <Link href="linkedin">Linkedin</Link>
        <Link href="github">Github</Link>
        <Link href="gitlab">Gitlab</Link>
      </div>
    </footer>
  );
}
