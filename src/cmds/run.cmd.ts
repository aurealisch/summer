import { program } from "commander";
import BinRunner from "../svcs/BinRunner";
import parseDest from "../svcs/parseDest";

program
  .command("run <dest> [input]")
  .action(async (dest: string, input: string) => {
    await new BinRunner({
      ...parseDest(dest),
      input,
    }).runBin();
  });
