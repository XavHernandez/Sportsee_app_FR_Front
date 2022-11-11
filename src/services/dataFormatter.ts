import type { isUser } from "../entities/User";

export class DataFormatter {
  useMockData: boolean;

  /** @param {boolean} useMockData */
  constructor(useMockData: boolean) {
    this.useMockData = useMockData;
  }

  /** @return {isUser} */
  getFormattedUserData(data?: any): isUser {
    return this.useMockData ? { name: "Thomas" } : { name: data.userInfos.firstName };
  }

  /** @return {isCardInfo} */
  getFormattedCardsInfos(data?: any): any[] {
    if (this.useMockData) {
      return [
        { quantity: "1,930kCal", type: "Calories" },
        { quantity: "155g", type: "Protéines" },
        { quantity: "290g", type: "Glucides" },
        { quantity: "50g", type: "Lipides" },
      ];
    }
    return [
      { quantity: `${data.keyData.calorieCount}kCal`, type: "Calories" },
      { quantity: `${data.keyData.proteinCount}g`, type: "Protéines" },
      { quantity: `${data.keyData.carbohydrateCount}g`, type: "Glucides" },
      { quantity: `${data.keyData.lipidCount}g`, type: "Lipides" },
    ];
  }

  /** @return {isActivityData} */
  getFormattedActivityData(data?: any): any[] {
    if (this.useMockData) {
      return [
        { name: "1", weight: "69", calories: "170" },
        { name: "2", weight: "72", calories: "150" },
        { name: "3", weight: "70", calories: "140" },
        { name: "4", weight: "78", calories: "180" },
        { name: "5", weight: "73", calories: "160" },
        { name: "6", weight: "73", calories: "140" },
        { name: "7", weight: "79", calories: "155" },
        { name: "8", weight: "72", calories: "180" },
        { name: "9", weight: "77", calories: "172" },
        { name: "10", weight: "70", calories: "140" },
      ];
    }
    const graphData: any = [];
    data.sessions.forEach((session: any) => {
      graphData.push({
        name: `${session.day}`,
        weight: `${session.kilogram}`,
        calories: `${session.calories}`,
      });
    });
    return graphData as any[];
  }

  /** @return {isSessionsData} */
  getFormattedSessionsData(data?: any): any[] {
    if (this.useMockData) {
      return [
        { name: "L", session: "10" },
        { name: "M", session: "5" },
        { name: "M", session: "7" },
        { name: "J", session: "8" },
        { name: "V", session: "11" },
        { name: "S", session: "8" },
        { name: "D", session: "7" },
      ];
    }
    const graphData: any = [];
    data.sessions.forEach((session: any) => {
      graphData.push({
        name: `${session.day}`,
        session: `${session.sessionLength}`,
      });
    });
    return graphData as any[];
  }

  /** @return {isPerformanceData} */
  getFormattedPerformanceData(data?: any): any[] {
    if (this.useMockData) {
      return [
        { subject: "Intensité", performance: 10, fullMark: 15 },
        { subject: "Cardio", performance: 5, fullMark: 15 },
        { subject: "Energie", performance: 7, fullMark: 15 },
        { subject: "Endurance", performance: 8, fullMark: 15 },
        { subject: "Force", performance: 11, fullMark: 15 },
        { subject: "Vitesse", performance: 8, fullMark: 15 },
      ];
    }
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
    return graphData as any[];
  }

  /** @return {isScoreData} */
  getFormattedScoreData(data?: any): any[] {
    if (this.useMockData) {
      return [{ name: "objectif", score: "12", fill: "var(--primary)" }];
    }
    return [
      {
        name: "objectif",
        score: `${(data.todayScore ?? data.score) * 100}`,
        fill: "var(--primary)",
      },
    ];
  }
}
