import { Config } from "./src/config";

export const defaultConfig: Config = {
  url: "https://www.nike.com/kr/",
  match: "https://www.nike.com/kr/**",
  selector: `div#__next`,
  maxPagesToCrawl: 50,
  outputFileName: "output.json",
  maxTokens: 2000000,
};
