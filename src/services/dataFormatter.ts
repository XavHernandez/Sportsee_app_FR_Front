import type { isUser } from "../entities/User";
import type { isCardInfo } from "../entities/CardInfo";

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
}
