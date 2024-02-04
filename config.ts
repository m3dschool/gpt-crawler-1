import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.nethru.co.kr/",
  match: "https://www.nethru.co.kr/**",
  maxPagesToCrawl: 500,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
