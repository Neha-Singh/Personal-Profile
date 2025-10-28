export const metadata = {
  title: "Neha | Senior Frontend Engineer",
  description: "Portfolio – React, Next.js & Node.js",
};

import "./styles/theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
