import { program } from "commander";
import BinExeRunner from "../services/BinExeRunner";
import parseDestination from "../services/parseDestination";

program
  .command("run <destination> <input>")
  .action(async (destination: string, input: string) => {
    await new BinExeRunner({
      ...parseDestination(destination),
      input,
    }).runBinExe();
  });
