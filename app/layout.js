import { Lato } from "next/font/google";
import "./globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL('https://danielc.rocks'),
  title: "Daniel Chen",
  description: "Daniel's Homepage",
  openGraph: {
    title: "Daniel Chen",
    description: "Daniel's Homepage",
    type: "website",
    locale: "en_US",
    siteName: "Daniel Chen",
    images: [
      {
        url: "/profile.png",
        width: 400,
        height: 400,
        alt: "Daniel Chen",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Daniel Chen",
    description: "Daniel's Homepage",
    images: ["/profile.png"],
  },
};

export const viewport = {
  themeColor: "#f9f6f0",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} antialiased`}
      >
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
