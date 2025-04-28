import { PropsWithChildren } from "react";

export const SectionHeader = ({ children }: PropsWithChildren) => {
    return (
        <h1 className="text-4xl text-cyan-600">
            { children }
        </h1>
    )
}