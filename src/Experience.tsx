import { ExperienceItem } from "./ExperienceItem"
import { SectionHeader } from "./SectionHeader"

export const Experience = () => {
    return (
        <div className="flex flex-col gap-8">
            <SectionHeader>Experience</SectionHeader>
            <ExperienceItem jobTitle="Senior Software Architect" company="SS&C Blue Prism" dates="October 2017 - Present">
                <p>
                    I currently work at SS&C Blue Prism, leading the architecture and development of the core product, which enables users to automate software processes to improve workplace efficiency. The product is used by businesses of all sizes worldwide.
                </p>
                <p>
                    In my role, I collaborate with four development teams to ensure that ongoing development aligns with future requirements and integrates seamlessly into the wider system architecture. I also regularly step in as a senior developer to provide additional capacity and expertise when needed.
                </p>
                <p>
                    During my time at the company, I have introduced automated testing practices into the development process, and championed development methodologies such as Test-Driven Development (TDD) and mob programming. I have been an active advocate for Agile practices, working closely with the Scrum Master team to promote Agile adoption both within development teams and across the wider business.
                </p>
                <p>
                    My ability to quickly deliver high-quality solutions has earned me a reputation as a go-to expert within the company. I am well-known for my technical expertise and my capacity to swiftly drive projects forward while maintaining a focus on scalable, sustainable solutions.
                </p>
            </ExperienceItem>
            <ExperienceItem jobTitle="Senior Software Engineer" company="Matrix Telematics" dates="November 2016 - September 2017">
                <p>
                    At Matrix, I led the development of a greenfield project delivering live booking and customer management services for garages and their customers, built on Microsoft’s Orleans virtual actor framework. In addition, I was responsible for maintaining the company’s existing real-time telematics software.
                </p>
                <p>
                    I collaborated with the chief architect to improve the adoption of Agile methodologies and introduced Test-Driven Development (TDD) practices within the development team. I also championed the use of functional programming techniques to enhance code quality and maintainability.
                </p>
            </ExperienceItem>
            <ExperienceItem jobTitle="Senior Software Engineer" company="Dnata NetFlights" dates="July 2014 - November 2016">
                <p>
                    As part of the back-end team at Netflights.com, I collaborated closely with the front-end team and internal stakeholders to ensure that features met business requirements and were suitable for all users. I also provided 24/7 support for critical services to ensure continuous operation.
                </p>
                <p>
                    A key project I led was the architecture of a secure web service API, enabling another company within the group to retrieve virtual credit cards from our systems. Given the sensitive nature of the data, security was the highest priority throughout the development process.
                </p>
            </ExperienceItem>
            <ExperienceItem jobTitle="Web Developer" company="Future of Sound Music" dates="2015 - 2016">
                <p>
                    Future of Sound was a local music school which was looking to take an online approach to selling lessons and allowing existing customers to manage their bookings. I was responsible for the full stack as well as providing support on subjects such as SEO.
                </p>
                <p>
                    The site had an Angular frontend which used a combination of ASP.NET and Umbraco for providing content and interactions.
                </p>
            </ExperienceItem>
            <ExperienceItem jobTitle="Software Developer, QA, and Support" company="Claro Software" dates="August 2009 - July 2014">
                <p>
                    At Claro Software, a company specializing in accessibility products, I took on various roles, starting in QA before transitioning into development, ultimately leading the development of the core product.
                </p>
                <p>
                    In my role on the core product, I conducted research into spell-checking techniques, colour blindness, and facial feature tracking. The findings from this research were used to enhance the existing product and inform the development of new products.
                </p>
            </ExperienceItem>
        </div>
    )
}