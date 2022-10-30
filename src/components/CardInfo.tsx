import type { isCardInfo } from "../entities/CardInfo";
import React from "react";
import styles from "./CardInfo.module.scss";
import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";

//** @params isCardInfo interface */
const CardInfo: React.FunctionComponent<isCardInfo> = (props: isCardInfo) => {
  /**
   * @params string
   * @return string
   */
  function getColor(type: string): string {
    let color: string;
    if (type == "Calories") return (color = "var(--calories)");
    if (type == "Protéines") return (color = "var(--proteines)");
    if (type == "Glucides") return (color = "var(--glucides");
    if (type == "Lipides") return (color = "var(--lipides)");
    return (color = "black");
  }

  /**
   * @params string
   * @return string
   */
  function getSVG(type: string): string {
    let svg;
    if (type == "Calories") return (svg = energy);
    if (type == "Protéines") return (svg = chicken);
    if (type == "Glucides") return (svg = apple);
    if (type == "Lipides") return (svg = cheeseburger);
    return (svg = energy);
  }

  return (
    <div className={styles.card}>
      <div className={styles.card_picture} style={{ backgroundColor: getColor(props.type) }}>
        <img src={getSVG(props.type)} alt={props.type} />
      </div>
      <div className={styles.card_content}>
        <p className={styles.quantity}>{props.quantity}</p>
        <p className={styles.molecule}>{props.type}</p>
      </div>
    </div>
  );
};

export default CardInfo;
