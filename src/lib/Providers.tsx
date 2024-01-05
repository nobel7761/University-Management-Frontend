"use client";

import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;

//this is a wrapper higher order function where we will pass the main component of this application as a children so that all the providers can pass through this. for better understand watch this video https://web.programming-hero.com/level2-batch-1/video/level2-batch-1-49-1_-initialize-our-project-with-next-js-and-redux
