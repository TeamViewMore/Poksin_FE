import React from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/components/PlusBtnStyle";
import Upload from "../img/upload.png";

function PlusBtn() {
    const navigate = useNavigate();

    const goToUploadForm = () => {
        navigate("/upload");
    };

    return (
        <>
            <P.PlusBtn onClick={goToUploadForm}>
                <img src={Upload} alt='업로드' ></img>
            </P.PlusBtn>
        </>
    );
}

export default PlusBtn;
