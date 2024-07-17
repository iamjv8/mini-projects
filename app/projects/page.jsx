import Link from "next/link";
import { projects } from "./projects";
import styles from "./styles.module.css";
const ProjectCard = ({ name, url }) => {
  return (
    <div class="space-y-8 xl:row-span-2">
      <Link href={url}>
        <figure class="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5 flex justify-center hover:bg-cyan-500">
          <blockquote class="text-gray-900">
            <p className="text-lg font-bold ">{name}</p>
          </blockquote>
        </figure>
      </Link>
    </div>
  );
};

const Page = () => {
  return (
    <div class="relative isolate bg-cyan-400 pb-32 pt-24 sm:pt-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-xl text-center">
          <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mini Projects
          </p>
        </div>
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
          <div class="space-y-8 xl:contents xl:space-y-0">
            {projects.map((item, index) => {
              return (
                <ProjectCard
                  key={index}
                  name={item.name}
                  url={`/projects${item.url}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
