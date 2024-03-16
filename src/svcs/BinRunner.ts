import { type Opts } from "../types";

export default class BinExeRunner {
  constructor(private opts: Opts & { input: string }) {}

  async runBin() {}
}
