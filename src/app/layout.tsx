import "./globals.css";
import ClientLayout from "../../components/ClientLayout";

export const metadata = {
  title: "Sami Melhem Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-white">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
