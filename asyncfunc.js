/*
 
  Write an asynchronous function that accepts a message 
  string and a delay time in milliseconds. 
  The function should log the message to the console after 
  the specified delay time.
*/
async function logWithDelay(message, delayTime) {
  await new Promise((resolve) => setTimeout(resolve, delayTime));
  console.log(message);
}

logWithDelay("Function called", 5000);

/*
  You have an array of user IDs and a function getUserData(id) that 
  returns a Promise with user data when given a user ID. 
  Write an asynchronous function that fetches and logs the 
  data for each user ID one by one, in sequence.
*/
const userIds = [1, 2, 3, 4, 5];

async function getUserData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const userData = {
        id: id,
        name: `name of user ${id}`,
        email: `user${id}.gmail`,
      };

      // resolve the promise
      resolve(userData);
    }, 2000);
  });
}

async function displayUserData(arrayOfIds) {
  for (let i = 0; i < arrayOfIds.length; i++) {
    const data = await getUserData(arrayOfIds[i]);

    console.log(data);
  }
}

displayUserData(userIds);

/*
  You have an asynchronous function performTask() that returns a Promise. 
  The Promise resolves if the task is successful and rejects if there's an error. 
  Write a function that calls performTask() and logs a custom success message 
  if the task is successful, and a custom error message if there's an error.
 */
  async function performTask(number) {
    return new Promise((resolve, reject) => {
      if (number === 2) {
        resolve("Success: Number is equal to 2");
      } else {
        reject("Error: Number is not equal to 2");
      }
    });
  }
  
  async function runTask() {
    // try {
    //   await performTask();
    //   console.log("successful");
    // } catch (error) {
    //   console.log("An error occured: ", error);
    // }
  
    await performTask(2)
      .then((result) => {
        console.log("Running task successful", result);
      })
      .catch((error) => {
        console.log("An error occured: ", error);
      })
      .finally(() => {
        console.log("I am done running");
      });
  }
  
  runTask();
