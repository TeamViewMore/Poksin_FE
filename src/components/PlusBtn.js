import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as P from "../styles/components/PlusBtnStyle";
import Upload from "../img/upload.png";

function PlusBtn() {
    const navigate = useNavigate();

    const goToUploadForm = (path) => {
        navigate("/upload");
    };

    return (
        <>
            <P.PlusBtn onClick={goToUploadForm}>
                <img src={Upload}></img>
            </P.PlusBtn>
        </>
    );
}

export default PlusBtn;
