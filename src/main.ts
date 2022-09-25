#! /usr/bin/env node
import yargs from 'yargs'
import { BF } from "./compiler";
import fs from 'fs'

function main() {
  const usage = "\nUsage: bfck <file_path>\n";
  const argv = yargs.usage(usage).help(true).options({}).parseSync();

  if (argv._.length < 1) {
    yargs.showHelp()
  } else {
    let filepath = argv._[0]
    try {
      const data = fs.readFileSync(filepath, 'utf-8')
      BF.evaluate(data)
    } catch (error) {
      console.error(error)
    }
  }
}

main()
