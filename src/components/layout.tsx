import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { PropsWithChildren } from "react";


export const Layout = ({children}: PropsWithChildren) => {
    return(
        <div className="min-h-full min-w-full">
            <Navbar/>
                <main>
                    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 gap-4">
                        {children}
                    </div>
                </main>
            <Footer/>
        </div>
    )
}