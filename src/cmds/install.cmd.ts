import { program } from "commander";
import BinExeInstaller from "../services/BinExeInstaller";
import parseDestination from "../services/parseDestination";

program.command("install <destination>").action(async (destination: string) => {
  await new BinExeInstaller({
    ...parseDestination(destination),
  }).installBinExe();
});
