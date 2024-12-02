import { Providers } from "../../redux/Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("children", children);
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
