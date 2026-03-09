import React from "react";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}){
    return(
        <>
        <h1>SIDERBAR TESTE DO LAYOUT</h1>
        {children}
        </>
    )

}