import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import VantaNet from "../../components/VantaNet";

export const metadata = {
  title: "Sami Melhem Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white">
        <VantaNet />
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
