import { DashSearchContainer, DashSearchIcon, DashSearchInput } from './billsElements';
export default function DashSearch() {
    return (
        <DashSearchContainer>
            <DashSearchIcon
                src='/img/search.svg'
            />
            <DashSearchInput/>
        </DashSearchContainer>
    );
}