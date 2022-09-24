function evaluate(data: string) {
  const tapeSize = 10
  const tape = new Array(tapeSize).fill(0)
  let cursor = 0
  for (const c of data) {
    switch (c) {
      case '>':
        cursor = (cursor + 1) % tapeSize
        break;
      case '<':
        cursor = cursor - 1
        break;
      case '+':
        tape[cursor] += 1
        break;
      case '-':
        tape[cursor] -= 1
      default:
        break;
    }
  }

  console.log(tape)
}


evaluate("+++>>+++>>+++++--<++isso aqui ele não conta");