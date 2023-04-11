import Footer from "./footer";
import Header from "./header";

type Props = {
  children?: React.ReactNode;
};

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div className="m-auto h-screen max-w-4xl  px-8 py-4">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
