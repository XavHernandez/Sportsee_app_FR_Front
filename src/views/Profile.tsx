import type { isUser } from "../entities/User";
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
  const [isError, setIsError] = useState<string>("");
  const [user, setUser] = useState<isUser>();
  const [infos, setInfos] = useState<any[]>();
  const [activityData, setActivityData] = useState<any[]>();
  const [sessionsData, setSessionsData] = useState<any[]>();
  const [performanceData, setPerformanceData] = useState<any[]>();
  const [scoreData, setScoreData] = useState<any[]>();

  const dataFormatter = new DataFormatter(false);

  /**
   * @param {number} userID
   */
  const getFormattedDataFromAPI = async (userID: number) => {
    Promise.all([getUser(userID), getActivity(userID), getSessions(userID), getPerformance(userID)])
      .then((data) => {
        setUser(dataFormatter.getFormattedUserData(data[0]));
        setInfos(dataFormatter.getFormattedCardsInfos(data[0]));
        setActivityData(dataFormatter.getFormattedActivityData(data[1]));
        setSessionsData(dataFormatter.getFormattedSessionsData(data[2]));
        setScoreData(dataFormatter.getFormattedScoreData(data[0]));
        setPerformanceData(dataFormatter.getFormattedPerformanceData(data[3]));
      })
      .catch((err) => {
        setIsError(err.message);
      });
    setIsLoading(false);
  };

  useEffect(() => {
    getFormattedDataFromAPI(18);
  }, []);

  if (!isLoading && !isError) {
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
  } else if (isLoading) {
    return (
      <section className={styles.user}>
        <h2 className={styles.user_greeting}>Bonjour,</h2>
        <p className={styles.user_status}>Veuillez patienter ! Nous chargons vos informations...</p>
      </section>
    );
  } else {
    return (
      <section className={styles.user}>
        <h2 className={styles.user_greeting}>Attention,</h2>
        <p className={styles.user_status}>{isError}</p>
      </section>
    );
  }
};

export default Profile;
