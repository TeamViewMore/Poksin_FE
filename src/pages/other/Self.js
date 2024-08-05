import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../styles/other/SelfStyle";

function Self() {
    const [checkedItems, setCheckedItems] = useState({});
    const navigate = useNavigate();

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setCheckedItems({
            ...checkedItems,
            [name]: checked,
        });
    };

    const handleSubmit = () => {
        const checkedCount = Object.values(checkedItems).filter(Boolean).length;
        console.log("Checked Count:", checkedCount); // 디버깅을 위해 추가
        navigate("/self/result", { state: { checkedCount } });
    };

    return (
        <>
            <S.Self>
                <S.Question>
                    현재 겪고 있는 데이트 경험을 생각해보고,
                    <br />
                    상대가 한 행동과 일치할 경우 선택해주세요.
                </S.Question>
                <br />

                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item1" onChange={handleCheckboxChange} /> 큰 소리로 호통을
                        친다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item2" onChange={handleCheckboxChange} />
                        하루 종일 많은 양의 전화와 문자를 한다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item3" onChange={handleCheckboxChange} />
                        통화내역이나 문자 등 휴대전화를 체크한다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item4" onChange={handleCheckboxChange} /> 옷차림이나
                        헤어스타일 등을 <br />
                        자기가 좋아하는 것으로 하게 한다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item5" onChange={handleCheckboxChange} /> 다른 사람들을
                        만나는 것을 싫어한다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item6" onChange={handleCheckboxChange} />
                        날마다 만나자고 하거나 <br />
                        기다리지 말라는 데도 기다린다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item7" onChange={handleCheckboxChange} />
                        만날 때마다 스킨쉽이나 성관계를 요구한다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item8" onChange={handleCheckboxChange} /> 내 과거를
                        끈질기게 캐묻는다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item9" onChange={handleCheckboxChange} />
                        헤어지면 죽어버리겠다고 한다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item10" onChange={handleCheckboxChange} /> 둘이 있을 때는
                        폭력적이지만
                        <br />
                        다른 사람과 있으면 태도가 달라진다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item11" onChange={handleCheckboxChange} /> 싸우다가 외진
                        길에 나를 버려두고 간 적이 있다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.AnswerBox>
                    <S.CheckBox>
                        <S.CheckCustom type="checkbox" name="item12" onChange={handleCheckboxChange} /> 문을 발로 차거나
                        물건을 던진다.
                    </S.CheckBox>
                </S.AnswerBox>
                <br />
                <S.ButtonBox>
                    <S.Button onClick={handleSubmit}>결과 보기</S.Button>
                </S.ButtonBox>
                <br />
            </S.Self>
        </>
    );
}

export default Self;
