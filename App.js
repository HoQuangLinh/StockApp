import {
  setStatusBarNetworkActivityIndicatorVisible,
  StatusBar,
} from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BT_set from "./test";
import Screen from "./Screen";
import StockButton from "./StockButton";

export default function App() {
  const [name, setName] = useState();
  const [stock, setStock] = useState();
  const handleData = (stockName) => {
    setName(stockName);
    return fetch(
      `https://l7-stock-api.herokuapp.com/stock/${stockName.toLowerCase()}`
    )
      .then((response) => response.json())
      .then((data) => {
        setStock(data[0]);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <Screen name={name} stock={stock} />
      <View style={styles.row}>
        <StockButton name="SET" onPress={(name) => handleData(name)} />
        <StockButton name="APPL" onPress={(name) => handleData(name)} />
        <StockButton name="GOOG" onPress={(name) => handleData(name)} />
      </View>
      <View style={styles.row}>
        <StockButton name="MSFT" onPress={(name) => handleData(name)} />
        <StockButton name="FB" onPress={(name) => handleData(name)} />
        <StockButton name="BABA" onPress={(name) => handleData(name)} />
      </View>
      <View style={styles.row}>
        <StockButton name="TSEC" onPress={(name) => handleData(name)} />
        <StockButton name="S&P" onPress={(name) => handleData(name)} />
        <StockButton name="NIKKEY" onPress={(name) => handleData(name)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: 'center',
    justifyContent: "center",
    marginBottom: 50,
  },
  column: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "center",
  },
  row: {
    //flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
