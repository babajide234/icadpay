import { SidebarContainer } from "./billsElements";
import DashList from "./DashList";
import DashSearch from './Dashsearch';

export default function Sidebar() {
    return (
        <SidebarContainer>
            <DashSearch/>
            <DashList/>
        </SidebarContainer>
    );
}