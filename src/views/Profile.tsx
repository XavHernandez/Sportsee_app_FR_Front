import type { isUser } from "../entities/User";
import type { isCardInfo } from "../entities/CardInfo";
import type { isActivityData } from "../entities/ActivityData";
import type { isSessionsData } from "../entities/SessionsData";
import type { isPerformanceData } from "../entities/PerformanceData";
import type { isScoreData } from "../entities/ScoreData";
import React, { useState, useEffect } from "react";
import { DataFormatter } from "../services/dataFormatter";
import { getUser, getActivity, getSessions, getPerformance } from "../services/api";
import CardInfo from "../components/CardInfo";
import ActivityChart from "../components/ActivityChart";
import SessionsChart from "../components/SessionsChart";
import PerformanceChart from "../components/PerformanceChart";
import ScoreChart from "../components/ScoreChart";
import styles from "./Profile.module.scss";

const Profile: React.FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [user, setUser] = useState<isUser>();
  const [infos, setInfos] = useState<isCardInfo[]>();
  const [activityData, setActivityData] = useState<isActivityData[]>();
  const [sessionsData, setSessionsData] = useState<isSessionsData[]>();
  const [performanceData, setPerformanceData] = useState<isPerformanceData[]>();
  const [scoreData, setScoreData] = useState<isScoreData[]>();

  const dataFormatter = new DataFormatter();

  /**
   * @param {number} userID
   */
  const getFormattedDataFromAPI = async (userID: number) => {
    Promise.all([
      getUser(userID),
      getActivity(userID),
      getSessions(userID),
      getPerformance(userID),
    ]).then((data) => {
      setUser(dataFormatter.getFormattedUserData(data[0]));
      setInfos(dataFormatter.getFormattedCardsInfos(data[0]));
      setActivityData(dataFormatter.getFormattedActivityData(data[1]));
      setSessionsData(dataFormatter.getFormattedSessionsData(data[2]));
      setScoreData(dataFormatter.getFormattedScoreData(data[0]));
      setPerformanceData(dataFormatter.getFormattedPerformanceData(data[3]));
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getFormattedDataFromAPI(18);
  }, []);

  if (!isLoading) {
    return (
      <React.Fragment>
        <section className={styles.user}>
          <h2 className={styles.user_greeting}>
            Bonjour<span>{user?.name}</span>
          </h2>
          <p className={styles.user_status}>
            Félicitation ! Vous avez explosé vos objectifs hier 👏
          </p>
        </section>
        <section className={styles.data}>
          <div className={styles.data_graphs}>
            {activityData && <ActivityChart data={activityData} />}
            <div className={styles.multicharts}>
              <div className={styles.sessions}>
                {sessionsData && <SessionsChart data={sessionsData} />}
              </div>
              <div className={styles.performances}>
                {performanceData && <PerformanceChart data={performanceData} />}
              </div>
              <div className={styles.scores}>{scoreData && <ScoreChart data={scoreData} />}</div>
            </div>
          </div>
          <aside className={styles.data_cards}>
            {infos?.map((info) => {
              return <CardInfo quantity={info.quantity} type={info.type} key={info.type} />;
            })}
          </aside>
        </section>
      </React.Fragment>
    );
  } else {
    return (
      <section className={styles.user}>
        <h2 className={styles.user_greeting}>Bonjour,</h2>
        <p className={styles.user_status}>Veuillez patienter ! Nous chargons vos informations...</p>
      </section>
    );
  }
};

export default Profile;
