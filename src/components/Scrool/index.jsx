import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function ScrollBasedVelocityDemo() {
  return (
    <VelocityScroll
      text="DESENVOLVEDOR DE SOFTWARE"
      default_velocity={5}
      className="font-display text-center text-2xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[5rem]"
    />
  );
}
