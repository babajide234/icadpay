import { Container } from "../Layout/layoutElement";
import { Cat, Catimg, PopularContainer, PopularMain, PopularMainCat } from "./billsElements";

export default function Popular() {
    return (
        <PopularContainer>
            <Container>
                <PopularMain>
                    <h2 className="">Popular </h2>
                    <PopularMainCat>
                        <Cat>
                            <Catimg
                                src="/img/mtn.svg"
                            />
                            <h3 className="">MTN</h3>
                        </Cat>
                        <Cat>
                            <Catimg
                                src="/img/airtel.svg"
                            />
                            <h3 className="">Airtel </h3>
                        </Cat>
                        <Cat>
                            <Catimg
                                src="/img/9mobile.svg"
                            />
                            <h3 className="">9mobile</h3>
                        </Cat>
                        <Cat>
                            <Catimg
                                src="/img/glo.svg"
                            />
                            <h3 className="">Glo</h3>
                        </Cat>
                        <Cat>
                            <Catimg
                                src="/img/dstv.svg"
                            />
                            <h3 className="">DSTV </h3>
                        </Cat>
                        <Cat>
                            <Catimg
                                src="/img/gotv.svg"
                            />
                            <h3 className="">GOTV</h3>
                        </Cat>
                        <Cat>
                            <Catimg
                                src="/img/phcn.svg"
                            />
                            <h3 className="">PHCN</h3>
                        </Cat>
                        <Cat>
                            <Catimg
                                src="/img/eedc.svg"
                            />
                            <h3 className="">EKEDC</h3>
                        </Cat>
                    </PopularMainCat>
                </PopularMain>
            </Container>
        </PopularContainer>
    );
}