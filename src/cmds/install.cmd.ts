import { program } from "commander";
import installBinExe from "../modules/installBinExe";
import parseDestination from "../modules/parseDestination";

program.command("install <destination>").action(async (destination: string) => {
  await installBinExe({
    ...parseDestination(destination),
  });
});
