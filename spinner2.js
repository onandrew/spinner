const spinner = function(){
  const circle = '|/-\\|/-\\|';
  for (let x = 0; x < circle.length; x++) {
    setTimeout(() => {
      process.stdout.write('\r' + circle[x]+'    ');
    }, 100 + (200 * x));
  }
}
spinner();