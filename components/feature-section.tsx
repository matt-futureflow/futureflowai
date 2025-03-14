import { cn } from "@/lib/utils";
import {
  Search,
  PenTool,
  Code,
  Rocket,
} from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Discovery",
      description: "Analyse current lead workflows.",
      icon: <Search />,
    },
    {
      title: "Design",
      description: "Build customised agents and automations.",
      icon: <PenTool />,
    },
    {
      title: "Development",
      description: "Begin testing agent conversations and workflow automations.",
      icon: <Code />,
    },
    {
      title: "Launch",
      description: "Deploy agent, conduct live testing, and provide ongoing support.",
      icon: <Rocket />,
    },
  ];

  return (
    <div className="bg-gradient-to-r from-[#003B20] to-black  ">
        <h2 className="text-3xl sm:text-5xl text-white font-semibold leading-tight
        text-center py-10 ">How Does This <span className="text-[#00FF9D]">Work</span></h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-4 relative z-10 pb-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col  lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && " dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-emerald-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 text-2xl sm:text-3xl inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};