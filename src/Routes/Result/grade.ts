import nopoint from "../../img/nopoint.gif";
import nopoint2 from "../../img/nopoint2.gif";
import bad from "../../img/bad.gif";
import bad2 from "../../img/bad2.gif";
import good from "../../img/good.gif";
import good2 from "../../img/good2.gif";
import great from "../../img/great.gif";
import great2 from "../../img/great2.gif";
import perfect from "../../img/perfect.gif";
import perfect2 from "../../img/perfect2.gif";

export const grade = [
  {
    score: 0,
    url: Math.random() > 0.5 ? nopoint : nopoint2,
    message: "네? 잘못 누른거죠?"
  },
  {
    score: 3,
    url: Math.random() > 0.5 ? bad : bad2,
    message: "하위 30%, 못 본 걸로 할게요. 평균은 넘겨보자고요."
  },
  {
    score: 7,
    url: Math.random() > 0.5 ? good : good2,
    message: "상위 30%, 괜찮은 점수네요"
  },
  {
    score: 12,
    url: Math.random() > 0.5 ? great : great2,
    message: "상위 10%, 구글링의 달인이시네요!"
  },
  {
    score: 20,
    url: Math.random() > 0.5 ? perfect : perfect2,
    message: "상위 1%, 대단해요! 인터넷 짬밥 좀 드셨군요! 현실을 살아주세요."
  }
];
