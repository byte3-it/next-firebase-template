import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./ui/breadcrumb";
import { cn } from "@/lib/utils";

export default function DefaultLayout({
  children,
  title,
  subtitle,
  centeredTitle,
  breadcrumb,
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  centeredTitle?: boolean;
  breadcrumb?: { label: string; href: string }[];
}) {
  return (
    <div className="grid mx-5 md:mx-20 my-5 md:my-10 ">
      <main className="flex flex-col gap-4">
        {breadcrumb && breadcrumb.length && (
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumb.map((item, idx) => (
                <div key={idx} className="flex flex-row gap-2 items-center">
                  <BreadcrumbSeparator />
                  <BreadcrumbItem key={item.label}>
                    <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                  </BreadcrumbItem>
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        )}
        {title && <h1 className={cn("text-3xl font-bold", centeredTitle && "text-center")}>{title}</h1>}
        {subtitle && <h2 className={cn("text-xl", centeredTitle && "text-center")}>{subtitle}</h2>}
        {children}
      </main>
    </div>
  );
}
