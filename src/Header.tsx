import { Github, Linkedin } from "lucide-react";
import { ReactElement } from "react";

type HeaderIconProps = {
  icon: ReactElement;
  link: string;
}

export const HeaderIcon = ({ icon, link }: HeaderIconProps) => (
  <a href={link} target="_blank" className="hover:bg-cyan-600 p-1">
    {icon}
  </a>
);

export const Header = () => {
  return (
    <header className="bg-cyan-800 text-white flex justify-center w-full py-5 px-5">
      <div className="max-w-[800px] w-full flex flex-col">
        <div className="w-full flex">
          <div className="flex flex-col gap-2 grow justify-center">
            <h1 className="text-5xl font-bold">Daniel Errington</h1>
            <h2 className="text-xl">Highly experienced full-stack developer and architect</h2>
            <div className="flex gap-2 mt-3">
              <HeaderIcon icon={<Github/>} link="https://github.com/awsxdr" />
              <HeaderIcon icon={<Linkedin/>} link="https://www.linkedin.com/in/daniel-errington-6a83a479/" />
            </div>
          </div>
          <div className="w-32 h-full rounded-full overflow-none flex items-center hidden lg:inline">
            <img src="headshot.jpg" className="rounded-full" />
          </div>
        </div>
      </div>
    </header>
  );
}
