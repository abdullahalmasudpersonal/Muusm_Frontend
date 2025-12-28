import Footer from "@/components/navigation/Footer";
import Navber from "@/components/navigation/Navber";
import { Box } from "@mui/material";
import React from "react";


const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div style={{margin:'0'}}>
            <Navber />
            <Box> {children}</Box>
            <Footer />
        </div>
    );
};

export default CommonLayout;