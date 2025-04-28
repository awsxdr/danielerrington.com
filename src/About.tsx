import { SectionHeader } from "./SectionHeader"

export const About = () => {
    return (
        <div className="flex flex-col gap-5">
            <SectionHeader>About</SectionHeader>
            <p>
                I'm a software engineer and architect with 16 years of industry experience with extensive hobbyist coding before that. I am proficient in a wide range of programming languages and technologies, both modern and legacy. I am also a passionate advocate for good Agile practices and thrive in collaborative working environments.
            </p>
            <p>
                Currently I focus on automating Windows and web applications using a variety of accessibility and automation technologies. I am also involved in the effort to transform this into a SaaS offering.
            </p>
            <p>
                These are some of the technologies and techniques I've been working with more recently:
            </p>
            <ul className="list-disc pl-10">
                <li>.NET (C#/VB)</li>
                <li>TypeScript + React</li>
                <li>Electron</li>
                <li>C++</li>
                <li>TDD</li>
                <li>AWS (Bedrock, EKS, EC2, etc.)</li>
                <li>Chromium automation</li>
                <li>UI Automation  </li>
            </ul>
        </div>
    )
}