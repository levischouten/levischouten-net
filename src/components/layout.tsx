import { motion } from "framer-motion";
import Footer from "./footer";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
  title?: string;
  introText?: string;
  showBanner?: boolean;
  showContact?: boolean;
};

export default function Layout(props: Props) {
  const { children, title, showBanner, showContact, introText } = props;

  return (
    <div className="grid grid-rows-[min-content_1fr_min-content] grid-cols-1 gap-24 mx-auto max-w-4xl px-8 sm:px-12 py-8 h-full min-h-screen text-slate-700 font-sans font-medium tracking-wide relative">
      {showBanner && (
        <motion.div
          animate={{ translateX: [0, 30, 0], translateY: [0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
          className="absolute right-24 top-24 h-64 w-64 bg-gradient-to-r from-indigo-100 via-red-100 to-yellow-100 blur-3xl"
        />
      )}
      <Header title={title} showBanner={showBanner} introText={introText} />
      <main>{children}</main>
      <Footer showContact={showContact} />
    </div>
  );
}
