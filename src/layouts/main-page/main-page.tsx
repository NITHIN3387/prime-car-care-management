import { cn } from "@/lib/cn";
import { MainPageProps } from "./main-page.types";

export default function MainPageLayout({ className, children, title }: MainPageProps) {
  return (
    <>
      <h1 className="border-l-4 border-primary pl-2 leading-none">
        <span className="text-primary">{title.slice(0, 1).toUpperCase()}</span>
        {title.slice(1).toUpperCase()}
      </h1>
      <section className={cn(["mt-6 overflow-x-hidden overflow-y-scroll", className])}>{children}</section>
    </>
  );
}
