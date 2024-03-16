import { program } from "commander";
import pkg from "../package.json";
import "./cmds/install.cmd";
import "./cmds/run.cmd";
import "./cmds/uninstall.cmd";

program
  .name(pkg.name)
  .description(pkg.description)
  .version(pkg.version)
  .parse();
