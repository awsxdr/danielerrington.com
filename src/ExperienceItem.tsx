import { PropsWithChildren } from "react";

type ExperienceItemProps = {
    jobTitle: string;
    company: string;
    dates: string;
}

export const ExperienceItem = ({ jobTitle, company, dates, children }: PropsWithChildren<ExperienceItemProps>) => {
    return (
        <div>
            <h2 className="flex gap-2 items-baseline">
                <span className="text-3xl text-cyan-600">{jobTitle}</span>
                <span className="text-xl text-cyan-400">{company}</span>
            </h2>
            <h5 className="text-sm text-gray-400">
                {dates}
            </h5>
            <div className="flex flex-col gap-5 pt-2">
                { children }
            </div>
        </div>
    );
}