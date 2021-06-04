const { taskOne, taskTwo } = require('./tasks');

async function main() {
  try {
    console.time('Measuring time');

    const valueOne = await taskOne();
    const valueTwo = await taskTwo();

    console.log('Task One returned: ', valueOne);
    console.log('Task Two returned: ', valueTwo);
    
    console.timeEnd('Measuring time');
  }
  catch (e) {
    console.log(e);
  }
}

main();