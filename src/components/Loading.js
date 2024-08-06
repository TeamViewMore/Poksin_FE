import * as L from "../styles/components/LoadingStyle";
import Lottie from "lottie-react";
import loadingLottie from "../assets/j3zqjmFOGV.json";

function Loading() {
    return (
        <L.LottieContainer>
            <Lottie animationData={loadingLottie} />
            <div>분석중입니다.</div>
        </L.LottieContainer>
    );
}

export default Loading;
