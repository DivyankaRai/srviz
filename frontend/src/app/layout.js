import ToastProvider from "./components/ToastProvider";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}