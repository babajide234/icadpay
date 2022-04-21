import { DashListContainer, DashListimg, DashListsContent } from './billsElements';
export default function DashList() {
    return (
        <DashListContainer>
            <DashListsContent>
                <li className="">
                    <DashListimg
                        src='/img/dstvrec1.svg'
                    />
                    <div className="listnames">
                        <h4 className="">DSTV box office </h4>
                        <h5>DSTV Kenya</h5>
                    </div>
                </li>
                <li className="">
                    <DashListimg
                        src='/img/dstvrec2.svg'
                    />
                    <div className="listnames">
                        <h4 className="">DSTV box office </h4>
                        <h5>DSTV Kenya</h5>
                    </div>
                </li>
            </DashListsContent>
        </DashListContainer>
    );
}