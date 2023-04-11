import Footer from "./footer";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div className="grid grid-rows-[auto_1fr_auto] grid-cols-1 gap-16 mx-auto max-w-4xl px-12 py-8 h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
