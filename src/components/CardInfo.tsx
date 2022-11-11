import React from "react";
import PropTypes from "prop-types";
import styles from "./CardInfo.module.scss";
import energy from "../assets/energy.svg";
import chicken from "../assets/chicken.svg";
import apple from "../assets/apple.svg";
import cheeseburger from "../assets/cheeseburger.svg";

/**
 * @param {string} quantity
 * @param {string} type
 * */
//@ts-ignore
const CardInfo = ({ quantity, type }) => {
  /**
   * @param {string} type
   * @return {string}
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
   * @param {string} type
   * @return {string}
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
      <div className={styles.card_picture} style={{ backgroundColor: getColor(type) }}>
        <img src={getSVG(type)} alt={type} />
      </div>
      <div className={styles.card_content}>
        <p className={styles.quantity}>{quantity}</p>
        <p className={styles.molecule}>{type}</p>
      </div>
    </div>
  );
};

CardInfo.propTypes = {
  quantity: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CardInfo;
