/* eslint-disable */
import React from "react";
import { render } from "react-dom";
import { App } from "./App";
import "antd/dist/antd.css";
import "./index.css";
import leanCloudCreds  from './configs/leanCloudCreds';

const { appId, appKey, serverURLs } = leanCloudCreds;
AV.init({
  appId,
  appKey,
  serverURLs
});

render(
  <App />,
  document.getElementById('root')
);
