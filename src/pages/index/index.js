import * as React from "react";
import { View, Text, Image } from "remax/wechat";
import classNames from "classnames";
import styles from "./index.css";

import Com from "../../components/demoCom";

export default () => {
  return (
    <View className={styles.app}>
      <Com className={styles.header2} />
    </View>
  );
};
