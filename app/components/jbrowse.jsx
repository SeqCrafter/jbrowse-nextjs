"use client";

import React, { useState, useEffect } from "react";
import "@fontsource/roboto";
import {
  createViewState,
  JBrowseLinearGenomeView,
} from "@jbrowse/react-linear-genome-view2";
import UCSC from "jbrowse-plugin-ucsc";
import { config } from "../config";

export default function JBrowseView() {
  const [viewState, setViewState] = useState(null);

  useEffect(() => {
    // 只在客户端初始化 viewState
    const state = createViewState({
      ...config,
      plugins: [UCSC],
      location: "chr1:12185755..12191809",
    });
    setViewState(state);
  }, []);

  // 在 viewState 初始化之前显示加载提示
  if (!viewState) {
    return <div className="px-20 pt-2">
    <div className="flex justify-center">
      <span className="skeleton skeleton-text text-2xl">JBrowse is loading...</span>
    </div>
    <div className="skeleton h-lvh w-full"></div>
  </div>;
  }
  
  return <JBrowseLinearGenomeView viewState={viewState} />;
}
