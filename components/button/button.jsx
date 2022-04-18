import { ButtonDefault } from "./buttonElements";

export default function Button(props) {
    return (
        <ButtonDefault>
            {props.text}
        </ButtonDefault>
    );
}