import { type Opts } from "../types";
import GitHub from "../modules/GitHub";
import isForLinux from "../modules/isForLinux";
import strToUint8Arr from "../utils/strToUint8Arr";

export default class BinExeInstaller {
  constructor(private opts: Opts) {}

  async installBin() {
    const baseRepoContents = await GitHub.getRepoContents({
      ...this.opts,
      path: "bin",
    });

    baseRepoContents.forEach(async (baseRepoContent) => {
      const repoContent = await GitHub.getRepoContent({
        ...this.opts,
        path: baseRepoContent.path,
      });

      if (isForLinux(strToUint8Arr(atob(repoContent.content)))) {
        console.log("yay");
      }
    });
  }
}
