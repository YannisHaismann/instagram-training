import React, { type ReactNode } from "react";
import Footer from "~/components/Footer";

export default function AuthLayout(props: { children: ReactNode }) {
  return (
    <div className="flex h-fit min-h-screen flex-col">
      <div className="flex grow flex-col items-stretch">{props.children}</div>
      <Footer />
    </div>
  );
}
