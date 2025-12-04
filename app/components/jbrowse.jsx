"use client";

import React, { useState, useEffect } from "react";
import "@fontsource/roboto";
import {
  createViewState,
  JBrowseLinearGenomeView,
} from "@jbrowse/react-linear-genome-view2";
import { config } from "../config";

export default function JBrowseView() {
  const [viewState, setViewState] = useState(null);
  useEffect(() => {
    // 只在客户端初始化 viewState
    const state = createViewState({
      ...config,
    });
    setViewState(state);
  }, []);

  // 在 viewState 初始化之前显示加载提示
  if (!viewState) {
    return <div className="flex justify-center items-center h-screen">
    <div className="text-2xl font-bold"> Jbrowse is loading...</div>
  </div>;
  }
  return <JBrowseLinearGenomeView viewState={viewState} />;
}
