import { program } from "commander";
import parseDestination from "../modules/parseDestination";
import runBinExe from "../modules/runBinExe";

program
  .command("run <destination> <input>")
  .action(async (destination: string, input: string) => {
    await runBinExe({
      ...parseDestination(destination),
      input,
    });
  });
