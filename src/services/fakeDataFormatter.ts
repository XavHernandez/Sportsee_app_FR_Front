import type { isUser } from "../entities/User";
import type { isCardInfo } from "../entities/CardInfo";
import type { isActivityData } from "../entities/ActivityData";
import type { isSessionsData } from "../entities/SessionsData";
import type { isPerformanceData } from "../entities/PerformanceData";
import type { isScoreData } from "../entities/ScoreData";

export class fakeDataFormatter {
  /** @return isUser type */
  getFormattedUserData(): isUser {
    return { name: "Thomas" };
  }

  /** @return isCardInfo type */
  getFormattedCardsInfos(): isCardInfo[] {
    return [
      { quantity: "1,930kCal", type: "Calories" },
      { quantity: "155g", type: "Protéines" },
      { quantity: "290g", type: "Glucides" },
      { quantity: "50g", type: "Lipides" },
    ];
  }

  /** @return isActivityData type */
  getFormattedActivityData(): isActivityData[] {
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

  /** @return isSessionsData type */
  getFormattedSessionsData(): isSessionsData[] {
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

  /** @return isPerformanceData type */
  getFormattedPerformanceData(): isPerformanceData[] {
    return [
      { subject: "Intensité", performance: "10", fullMark: "15" },
      { subject: "Cardio", performance: "5", fullMark: "15" },
      { subject: "Energie", performance: "7", fullMark: "15" },
      { subject: "Endurance", performance: "8", fullMark: "15" },
      { subject: "Force", performance: "11", fullMark: "15" },
      { subject: "Vitesse", performance: "8", fullMark: "15" },
    ];
  }

  /** @return isScoreData type */
  getFormattedScoreData(): isScoreData[] {
    return [{ name: "objectif", score: "12", fill: "var(--primary)" }];
  }
}
