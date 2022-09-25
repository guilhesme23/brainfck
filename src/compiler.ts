import { getChar, changeValue } from "./utils";

export namespace BF {
  interface IHash {
    [index: string]: number;
  }

  export function tokenize(data: string): IHash {
    let loopStack: number[] = [];
    let table: IHash = {};
    for (let i = 0; i < data.length; i++) {
      let c = data[i];
      switch (c) {
        case "[":
          loopStack.push(i);
          break;
        case "]":
          let opening = loopStack.pop();
          if (opening === undefined) {
            throw new SyntaxError("Unexpected token: ']'");
          } else {
            table[opening] = i;
            table[i] = opening;
          }
          break;
        default:
          break;
      }
    }
    return table;
  }

  export function evaluate(data: string, tapeSize: number = 5000) {
    const limit = 256;
    const tape = new Array(tapeSize).fill(0);
    let loopTable = tokenize(data);
    let cursor = 0;
    for (let i = 0; i < data.length; i++) {
      let c = data[i];
      switch (c) {
        case ">":
          cursor = changeValue(cursor + 1, tapeSize);
          break;
        case "<":
          cursor = changeValue(cursor - 1, tapeSize);
          break;
        case "+":
          tape[cursor] = changeValue(tape[cursor] + 1, limit);
          break;
        case "-":
          tape[cursor] = changeValue(tape[cursor] - 1, limit);
          break;
        case "[":
          if (tape[cursor] === 0) {
            i = loopTable[i];
          }
          break;
        case "]":
          if (tape[cursor] > 0) {
            i = loopTable[i];
          }
          break;
        case ".":
          let char = String.fromCharCode(tape[cursor]);
          process.stdout.write(char);
          break;
        case ",":
          let value = getChar().charCodeAt(0);
          tape[cursor] = value;
          break;
        default:
          break;
      }
    }
    console.log("");
  }
}
