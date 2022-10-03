import React, { FC } from 'react';
import Header from "./header";

type LayoutProps = {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <Header />
            <main>{children}</main>
        </div>
    )
}

export default Layout;