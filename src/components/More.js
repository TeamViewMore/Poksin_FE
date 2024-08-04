import React from "react";
import * as M from "../styles/components/MoreStyle";

function More({ menu, menu1, menu2, onMenuClick, evidenceId }) {
    return (
        <>
            {menu2 ? (
                <M.MoreDouble>
                    <M.Menu onClick={() => onMenuClick(menu1, evidenceId)}>{menu1}</M.Menu>
                    <M.Line />
                    <M.Menu onClick={() => onMenuClick(menu2, evidenceId)}>{menu2}</M.Menu>
                </M.MoreDouble>
            ) : (
                <M.More>
                    <M.Menu onClick={() => onMenuClick(menu)}>{menu}</M.Menu>
                </M.More>
            )}
        </>
    );
}

export default More;
