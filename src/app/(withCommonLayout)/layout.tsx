import Footer from "@/components/navigation/Footer";
import Navber from "@/components/navigation/Navber";
import React from "react";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navber />
            {children}
            <Footer />
        </>
    );
};

export default CommonLayout;