import { useMemo } from "react";
import styles from "./styles.module.css";

const Bar = ({ name, ticketCount, colour, height }) => {
  return (
    <>
      <div
        className={styles.bar}
        style={{ backgroundColor: colour, height: `${height}%` }}
      >
        <div className={styles.tooltip}>
          {name} - {ticketCount}
        </div>
      </div>
    </>
  );
};

const BarChart = ({ data }) => {
  const maxTicketCount = useMemo(() => {
    return Math.max(...data.map((item) => item.ticketCount));
  }, []);
  return (
    <div className={styles.chartContainer}>
      <div className={styles.chart}>
        {data.map((item) => {
          return (
            <Bar
              key={item.id}
              {...item}
              height={(item.ticketCount / maxTicketCount) * 100}
            />
          );
        })}
      </div>
      <div className={styles.xAxisLabel}>Departments</div>
      <div className={styles.yAxisLabel}>Ticket Count</div>
    </div>
  );
};

export default BarChart;
