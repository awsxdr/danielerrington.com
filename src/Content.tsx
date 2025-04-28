import { About } from "./About"
import { Experience } from "./Experience"

export const Content = () => {
    return (
        <main className="flex justify-center w-full pt-5 pb-32 px-5">
            <div className="max-w-[800px] w-full flex flex-col gap-10">
                <About />
                <Experience />
            </div>
        </main>
    )
}