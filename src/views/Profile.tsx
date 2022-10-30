import type { isUser } from "../entities/User";
import type { isCardInfo } from "../entities/CardInfo";
import React, { useState, useEffect } from "react";
import { DataFormatter } from "../services/dataFormatter";
import CardInfo from "../components/CardInfo";
import styles from "./Profile.module.scss";

const Profile: React.FunctionComponent = () => {
  const [user, setUser] = useState<isUser>();
  const [infos, setInfos] = useState<isCardInfo[]>();

  useEffect(() => {
    const dataFormatter = new DataFormatter();
    setUser(dataFormatter.getFormattedUserData());
    setInfos(dataFormatter.getFormattedCardsInfos());
  }, []);

  return (
    <React.Fragment>
      <section className={styles.user}>
        <h2 className={styles.user_greeting}>
          Bonjour<span>{user?.name}</span>
        </h2>
        <p className={styles.user_status}>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </section>
      <section className={styles.data}>
        <div className={styles.data_graphs}></div>
        <div className={styles.data_cards}>
          {infos?.map((info) => {
            return <CardInfo quantity={info.quantity} type={info.type} />;
          })}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Profile;
