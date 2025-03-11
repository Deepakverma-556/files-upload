import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Upload Files",
  description:
    "Our accelerator allows you to upload, read, and process multiple file types (e.g., Python, JAR, ZIP), extracting key data like classes, methods, and structure for easy review.",
  openGraph: {
    title: "Upload Files",
    description:
      "Our accelerator allows you to upload, read, and process multiple file types (e.g., Python, JAR, ZIP), extracting key data like classes, methods, and structure for easy review.",
    images: [
      {
        width: 800,
        height: 600,
        url: "/meta-img.png",
        alt: "meta-img",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
