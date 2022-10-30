import type { isUser } from "../entities/User";
import type { isCardInfo } from "../entities/CardInfo";
import type { isBarChartData } from "../entities/BarChartData";

export class DataFormatter {
  /** @return isUser interface */
  getFormattedUserData(): isUser {
    return { name: "Thomas" };
  }

  /** @return isCardInfo interface */
  getFormattedCardsInfos(): isCardInfo[] {
    return [
      { quantity: "1,930kCal", type: "Calories" },
      { quantity: "155g", type: "Protéines" },
      { quantity: "290g", type: "Glucides" },
      { quantity: "50g", type: "Lipides" },
    ];
  }

  /** @return isBarChartData interface */
  getFormattedBarChartData(): isBarChartData[] {
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
}
