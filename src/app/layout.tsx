import "./globals.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Sami Melhem Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="pt-16 bg-white text-gray-900">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
