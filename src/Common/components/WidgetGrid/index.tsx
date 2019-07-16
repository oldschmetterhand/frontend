import React from "react";
import WidgetCard from "./WidgetCard";
//import WidgetControl from "./WidgetControl";
import UserInfoBox from "../UserInfoBox";
import styles from "./styles.module.scss";
import { joinClasses } from "Common/utils/joinClasses";

const WidgetGrid: React.FC = () => {
  return (
    <>
      <div className={joinClasses("columns", styles.widgetGrid)}>
        {/* <div className="column is-1">
          <WidgetControl></WidgetControl>
        </div> */}
        <div className="column" style={{ width: "5000px" }}>
          <div className="columns is-multiline is-mobile">
            <WidgetCard classes={["is-4"]}>
              <UserInfoBox email="test" name="test" />
            </WidgetCard>
            <WidgetCard classes={["is-8"]} visible={false} orderNumber={0}></WidgetCard>
            <WidgetCard classes={["is-2"]} backgrColor="tomato" orderNumber={1}></WidgetCard>
            <WidgetCard classes={["is-5"]} orderNumber={2}></WidgetCard>
            <WidgetCard classes={["is-5"]} orderNumber={3} backgrColor="orange"></WidgetCard>
            <WidgetCard classes={["is-3"]} orderNumber={4}></WidgetCard>
            <WidgetCard classes={["is-3"]} orderNumber={5}></WidgetCard>
            <WidgetCard classes={["is-3"]} orderNumber={6}></WidgetCard>
            <WidgetCard classes={["is-3"]} backgrColor="lightgreen" orderNumber={7}></WidgetCard>
            <WidgetCard
              classes={["is-8"]}
              backgrColor="lightgreen"
              visible={false}
              orderNumber={8}
            ></WidgetCard>
            <WidgetCard classes={["is-4"]} backgrColor="lightgreen" orderNumber={9}></WidgetCard>
            <WidgetCard classes={["is-12"]} orderNumber={10}></WidgetCard>
            <WidgetCard classes={["is-12"]} visible={false} orderNumber={11}></WidgetCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default WidgetGrid;