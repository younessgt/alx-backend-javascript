process.stdout.write('Welcome to Holberton School, what is your name?\n');
/*
const writefunc = () => {
  process.stdin.on('data', (data) => {
    const name = data.toString().trim();
    process.stdout.write(`Your name is: ${name}\n`);
    process.exit();
  });
};
if (process.stdin.isTTY) {
  writefunc();
} else {
  writefunc();
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
*/

process.stdin.on('readable', () => {
  const chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
