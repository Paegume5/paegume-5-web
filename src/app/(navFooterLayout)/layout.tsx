import Footer from "@components/Footer";
import NavBar from "@components/NavBar";
import GetInvolved from "@components/sections/GetInvolved";

export default function defaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavBar />
      {children}
      <GetInvolved />
      <Footer />
    </div>
  );
}
