import { MainPageProps } from "./main-page.types";

export default function MainPageLayout({ children, title }: MainPageProps) {
  return (
    <>
      <h1 className="border-l-4 border-primary pl-2 leading-none">
        <span className="text-primary">{title.slice(0, 1).toUpperCase()}</span>
        {title.slice(1).toUpperCase()}
      </h1>
      <section className="mt-6">{children}</section>
    </>
  );
}
