import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import FooterTwo from "@/components/FooterTwo";
import Header from "@/components/Header";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Golfers Fitness",
  description: "Golfers Fitness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        {children}
        <FooterTwo />
      </body>
    </html>
  );
}
