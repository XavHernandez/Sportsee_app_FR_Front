import type { isUser } from "../entities/User";
import type { isCardInfo } from "../entities/CardInfo";
import type { isActivityData } from "../entities/ActivityData";
import type { isSessionsData } from "../entities/SessionsData";
import type { isPerformanceData } from "../entities/PerformanceData";
import type { isScoreData } from "../entities/ScoreData";

export class DataFormatter {
  /** @return {isUser} */
  getFormattedUserData(data: any): isUser {
    return { name: data.userInfos.firstName };
  }

  /** @return {isCardInfo} */
  getFormattedCardsInfos(data: any): isCardInfo[] {
    return [
      { quantity: `${data.keyData.calorieCount}kCal`, type: "Calories" },
      { quantity: `${data.keyData.proteinCount}g`, type: "Protéines" },
      { quantity: `${data.keyData.carbohydrateCount}g`, type: "Glucides" },
      { quantity: `${data.keyData.lipidCount}g`, type: "Lipides" },
    ];
  }

  /** @return {isActivityData} */
  getFormattedActivityData(data: any): isActivityData[] {
    const graphData: any = [];
    data.sessions.forEach((session: any) => {
      graphData.push({
        name: `${session.day}`,
        weight: `${session.kilogram}`,
        calories: `${session.calories}`,
      });
    });
    return graphData as isActivityData[];
  }

  /** @return {isSessionsData} */
  getFormattedSessionsData(data: any): isSessionsData[] {
    const graphData: any = [];
    data.sessions.forEach((session: any) => {
      graphData.push({
        name: `${session.day}`,
        session: `${session.sessionLength}`,
      });
    });
    return graphData as isSessionsData[];
  }

  /** @return {isPerformanceData} */
  getFormattedPerformanceData(data: any): isPerformanceData[] {
    const graphData: any = [];
    const kind = Object.entries(data.kind);
    for (let i = 0; i < kind.length; i++) {
      let performance = {
        subject: `${kind[i][1]}`,
        performance: data.data[i].value,
        fullMark: 240,
      };
      graphData.push(performance);
    }
    return graphData as isPerformanceData[];
  }

  /** @return {isScoreData} */
  getFormattedScoreData(data: any): isScoreData[] {
    return [
      {
        name: "objectif",
        score: `${(data.todayScore ?? data.score) * 100}`,
        fill: "var(--primary)",
      },
    ];
  }
}
