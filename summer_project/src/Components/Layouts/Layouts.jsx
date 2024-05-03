import { TopNavFix } from "./TopNavFix";
import { SidebarFix } from "./SidebarFix";
export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <TopNavFix />
        <div className="-translate-y-10">
          <SidebarFix />
        </div>
      </div>
      {children}
    </>
  );
}
