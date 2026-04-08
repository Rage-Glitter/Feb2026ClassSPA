function randomFinish(label) {
  const randomTime = Math.random() * 1000;

  setTimeout(
    () => console.log(`${label} is done after ${randomTime} seconds!`),
    randomTime
  );
}

randomFinish("function 1");
randomFinish("function 2");
randomFinish("function 3");

// Scenario A
// The functions will always fire in order, i.e. the functions will wait until the previous function is "done" before it itself in invoked

// Scenario B
// All three functions fire as soon as the script reads the invocation, i.e. the functions do not wait until the previous function is finished running