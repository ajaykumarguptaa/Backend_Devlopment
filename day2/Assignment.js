// TODO:  Assignment.......

//! OBJECTIVE
// * CREATE A PROGRAM USING NODE-JS EVENTEMITTER THAT:

// ? LISTENS FOR MULTIPLE TYPES OF USER EVENTS (E.G LOGIN , LOGOUT , PURCHASE , AND PROFILE UPDATE)
// ? TRACKS HOW MANY TIMES EACH EVENT IS EMITTED.
// ? LOGS A SUMMARY OF ALL EVENTS OCCURRENCES WHEN A SPECIAL SUMMARY EVENT IS TRIGGERED

//! REQUIREMENT

// ? create at least four custom events
// ? emit these events multiple times with different arguments ( e.g username , item purchased)
// ? tracks and store the count of each event type.
// ? define a summary events that logs a detailed report of how many times each event was triggered

import EventEmitter from "events";
import fs from "fs";

const userEmitter = new EventEmitter();

const eventCounts = {
  login: 0,
  logout: 0,
  purchase: 0,
  profileupdate: 0,
};

const LogFile = "evaent.json";

if (fs.existsSync(LogFile)) {
  const data = fs.readFileSync(LogFile, "utf-8");
  Object.assign(eventCounts, JSON.parse(data));
}

function saveCounts() {
  fs.writeFileSync(LogFile, JSON.stringify(eventCounts, null, 2));
}

userEmitter.on("Login", (Username) => {
  eventCounts.login++;
  console.log(
    `${Username} is Logged In Successfully 🤜 number of Times they Emmited `
  );
  saveCounts();
});

userEmitter.on("LOGOUT", (Username) => {
  eventCounts.logout++;
  console.log(
    `${Username} is LoggOut  Successfully ❌ number of Times they Emmited `
  );
  saveCounts();
});

userEmitter.on("PURCHASE", (Username, item) => {
  eventCounts.purchase++;
  console.log(
    `${Username} Purchesed item ${item}  number of Times they Emmited `
  );
  saveCounts();
});

userEmitter.on("PROFILEUPDATE", (Username, field) => {
  eventCounts.profileupdate++;
  console.log(
    `${Username} updated their profile field: ${field}  number of Times they Emmited`
  );
  saveCounts();
});

//* emit event with different argument
userEmitter.on("SUMMARY", () => {
  console.log("\n Event Summary:-");
  console.log(`logins: ${eventCounts.login}`);
  console.log(`logout: ${eventCounts.logout}`);
  console.log(`puchase: ${eventCounts.purchase}`);
  console.log(`profileupdate: ${eventCounts.profileupdate}`);
});

userEmitter.emit("Login", "ajay");
userEmitter.emit("LOGOUT", "ajay");
userEmitter.emit("PURCHASE", "ajay", "MacBook-pro");
userEmitter.emit("PROFILEUPDATE", "ajay", "Email Address");
userEmitter.emit("SUMMARY");

// how many times each event emitted......
