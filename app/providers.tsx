"use client"
import { ThemeProvider } from "next-themes"

export const Providers = ({ children }) => {
    return (
        <ThemeProvider attribute="class">
            {children}
        </ThemeProvider>
    )
}
