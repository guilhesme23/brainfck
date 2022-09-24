function changeValue(value: number, limit: number): number {
  let result = value%limit
  if (result<0) {
    return result+limit
  } else {
    return result
  }
}

function evaluate(data: string) {
  const tapeSize = 10
  const limit = 256
  const tape = new Array(tapeSize).fill(0)
  let cursor = 0
  for (const c of data) {
    switch (c) {
      case '>':
        cursor = changeValue(cursor+1, tapeSize)
        break;
      case '<':
        cursor = changeValue(cursor-1, tapeSize)
        break;
      case '+':
        tape[cursor] = changeValue(tape[cursor]+1, limit)
        break;
      case '-':
        tape[cursor] = changeValue(tape[cursor]-1, limit)
      default:
        break;
    }
  }

  console.log(tape)
}


evaluate("+++>>+++>>+++++--<++>>--isso aqui ele não conta");