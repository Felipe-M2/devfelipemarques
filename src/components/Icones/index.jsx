import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div 
      style={{width: "500px"}}
      className="relative flex h-full w-full max-w-[400px] items-center justify-center overflow-hidden rounded-lg border bg-background px-10 pb-10 pt-4 "
    >
      <IconCloud 
        iconSlugs={slugs} 
        maxSpeed={0.08}
      />
    </div>
  );
}
