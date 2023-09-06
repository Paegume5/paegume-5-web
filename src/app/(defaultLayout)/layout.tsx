import Footer from "@components/Footer";
import NavBar from "@components/NavBar";

export default function defaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
