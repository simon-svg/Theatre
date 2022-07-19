import React from 'react';
import Header from "../Components/commons/all/Header";
import Footer from "../Components/commons/all/Footer";

const Page = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default Page;
