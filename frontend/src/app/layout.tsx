import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import '@rainbow-me/rainbowkit/styles.css';

const inter = Inter({ subsets: ["latin"] });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata = {
  title: "CryptoDevsDAO",
  description: "CryptoDevsDAO for holder of CryptoDevs NFTs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Providers >{children}</Providers></body>
    </html>
  );
}

