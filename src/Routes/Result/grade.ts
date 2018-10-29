import F1 from "../../img/grade/F1.gif";
import F2 from "../../img/grade/F2.gif";
import E1 from "../../img/grade/E1.gif";
import E2 from "../../img/grade/E2.gif";
import D1 from "../../img/grade/D1.gif";
import D2 from "../../img/grade/D2.gif";
import C1 from "../../img/grade/C1.gif";
import C2 from "../../img/grade/C2.gif";
import B1 from "../../img/grade/B1.gif";
import B2 from "../../img/grade/B2.gif";
import A1 from "../../img/grade/A1.gif";
import A2 from "../../img/grade/A2.gif";

export const grade = [
  {
    url: Math.random() > 0.5 ? F1 : F2,
    message: "네? 잘못 누른거죠?"
  },
  {
    url: Math.random() > 0.5 ? E1 : E2,
    message: "못 본 걸로 할게요. 평균은 넘겨보자고요."
  },
  {
    url: Math.random() > 0.5 ? D1 : D2,
    message: "괜찮은 점수네요"
  },
  {
    url: Math.random() > 0.5 ? C1 : C2,
    message: "네이버보다 구글을 많이 쓰시는 타입?"
  },
  {
    url: Math.random() > 0.5 ? B1 : B2,
    message: "구글링의 달인이시네요!"
  },
  {
    url: Math.random() > 0.5 ? A1 : A2,
    message: `대단해요! 인터넷 짬밥 좀 드셨군요!`
  }
];
