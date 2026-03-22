import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";
import FloatingOrbs from "./FloatingOrbs";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-background text-foreground cursor-none lowercase">
            <CustomCursor />
            <FloatingOrbs />
            <div className="antigravity-grid fixed inset-0 pointer-events-none z-[1]" />

            <Header />
            <main className="relative z-10">{children}</main>
            <Footer />
        </div>
    );
}
