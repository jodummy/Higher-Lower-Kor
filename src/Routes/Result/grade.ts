import F1 from "../../img/grade/F1.gif";
import F2 from "../../img/grade/F2.gif";
import E1 from "../../img/grade/E1.gif";
import E2 from "../../img/grade/E2.gif";
import D1 from "../../img/grade/D1.gif";
import D2 from "../../img/grade/D2.gif";
import C1 from "../../img/grade/C1.gif";
import C2 from "../../img/grade/C2.gif";
import A1 from "../../img/grade/A1.gif";
import A2 from "../../img/grade/A2.gif";

export const grade = [
  {
    score: 0,
    url: Math.random() > 0.5 ? F1 : F2,
    message: "네? 잘못 누른거죠?"
  },
  {
    score: 3,
    url: Math.random() > 0.5 ? E1 : E2,
    message: "하위 30%, 못 본 걸로 할게요. 평균은 넘겨보자고요."
  },
  {
    score: 7,
    url: Math.random() > 0.5 ? D1 : D2,
    message: "상위 30%, 괜찮은 점수네요"
  },
  {
    score: 12,
    url: Math.random() > 0.5 ? C1 : C2,
    message: "상위 10%, 구글링의 달인이시네요!"
  },
  {
    score: 20,
    url: Math.random() > 0.5 ? A1 : A2,
    message: "상위 1%, 대단해요! 인터넷 짬밥 좀 드셨군요! 현실을 살아주세요."
  }
];
