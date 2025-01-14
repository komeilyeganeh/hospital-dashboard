import { SidebarHeader } from "./header/sidebar-header"
import { SidebarMenu } from "./menu/menu"

export const Sidebar: React.FC = () => {
    // ---- return jsx ----
    return <div className="h-full overflow-hidden w-64">
        <SidebarHeader />
        <SidebarMenu />
    </div>
}