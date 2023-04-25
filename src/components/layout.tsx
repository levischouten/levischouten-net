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
    <div className="grid grid-rows-[min-content_1fr_min-content] grid-cols-1 gap-16 mx-auto max-w-4xl px-12 py-8 h-full min-h-screen text-slate-700">
      <Header title={title} showBanner={showBanner} introText={introText} />
      <main>{children}</main>
      <Footer showContact={showContact} />
    </div>
  );
}
