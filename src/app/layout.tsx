import './globals.css';
import Header from '@/components/layouts/header/Header';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="bg-white text-[#040000]">
        <Header />
        {children}
      </body>
    </html>
  );
}
