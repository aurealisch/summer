import { createWriteStream, existsSync, mkdirSync } from "fs";
import { get } from "http";
import GitHub, { type GitHubRepoContent } from "../modules/GitHub";
import isForLinux from "../modules/isForLinux";
import { type Opts } from "../types";
import strToUint8Arr from "../utils/strToUint8Arr";

export default class BinInstaller {
  constructor(private opts: Opts) {}

  async installBin() {
    const baseGitHubRepoContents = await GitHub.getRepoContents({
      ...this.opts,
      path: "bin",
    });

    baseGitHubRepoContents.forEach(async (baseGitHubRepoContent) => {
      const gitHubRepoContent = await GitHub.getRepoContent({
        ...this.opts,
        path: baseGitHubRepoContent.path,
      });

      if (!isForLinux(strToUint8Arr(atob(gitHubRepoContent.content)))) {
        throw Error(""); // TODO
      }

      await this.downloadBin(gitHubRepoContent);
    });
  }

  async downloadBin(gitHubRepoContent: GitHubRepoContent) {
    if (!existsSync(this.opts.owner)) mkdirSync(this.opts.owner);

    const file = createWriteStream(`./${this.opts.owner}/${this.opts.repo}`);

    get(gitHubRepoContent.download_url, (res) => {
      res.pipe(file);

      file.on("finish", () => {
        file.close();
      });
    });
  }
}
