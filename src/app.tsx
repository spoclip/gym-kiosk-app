import React from "react";
import KioskAppWebView from "./components/web-view";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <>
      <StatusBar hidden />
      <KioskAppWebView />
    </>
  );
}
