import { Logo, ToggleSidebar } from "@components"

export const SidebarHeader: React.FC = () => {
    // ---- return jsx ----
    return <div className="flex items-center justify-between">
        <Logo />
        <ToggleSidebar />
    </div>
}