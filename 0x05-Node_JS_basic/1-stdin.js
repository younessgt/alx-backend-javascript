process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  if (!process.stdin.isTTY) {
    console.log(`Your name is: ${name}`);
    console.log('This important software is now closing');
  } else {
    console.log(`Your name is: ${name}`);
  }
  process.exit();
});
