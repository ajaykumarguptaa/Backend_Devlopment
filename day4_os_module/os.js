import { console } from 'inspector'
import os from 'os'


//! 1 and 2 get os  platform user info
// console.log("os platform: ",os.platform())
// console.log("User Info: ",os.userInfo())

//! 3 Get the  os CPU info...

//  console.log("Cpu core info: ",os.cpus())

 //! 4 get the free memory 

 console.log("Free memory: ",os.freemem(),"bytes")

 //!
 // Import Node.js built-in OS module
import os from 'os';

// ------------------- WINDOWS SYSTEM INFORMATION -------------------

// Machine's network name
console.log("💻 Hostname:", os.hostname());

// OS type will show "Windows_NT" on Windows
console.log("🖥️ OS Type:", os.type());

// Windows version release (e.g., 10.0.19045)
console.log("📦 OS Release:", os.release());

// Full OS version string (Windows 10, 11, etc.)
console.log("📝 OS Version:", os.version());

// CPU architecture (x64, arm64)
console.log("🔧 CPU Architecture:", os.arch());

// CPU endianness (LE = Little Endian, common in Windows)
console.log("🧠 CPU Endianness:", os.endianness());

// ------------------- MEMORY -------------------
console.log("\n📊 Memory Information:");
console.log("   Total Memory:", (os.totalmem() / (1024 ** 3)).toFixed(2), "GB");
console.log("   Free Memory:", (os.freemem() / (1024 ** 3)).toFixed(2), "GB");

// ------------------- UPTIME -------------------
console.log("\n⏳ System Uptime:");
console.log("   Hours:", (os.uptime() / 3600).toFixed(2));

// ------------------- CPU INFORMATION -------------------
console.log("\n⚙️ CPU Information:");
os.cpus().forEach((cpu, index) => {
  console.log(`   Core ${index + 1}:`, cpu.model, `| ${cpu.speed} MHz`);
});

// ------------------- USER INFORMATION -------------------
console.log("\n👤 User Information:");
console.log("   Username:", os.userInfo().username);
console.log("   Home Directory:", os.homedir());

// ------------------- PATHS -------------------
console.log("\n📂 Path Information:");
console.log("   Temp Directory:", os.tmpdir());

// ------------------- NETWORK -------------------
console.log("\n🌐 Network Interfaces:");
console.log(os.networkInterfaces());

// ------------------- CONSTANTS -------------------
console.log("\n📌 OS Constants:");
console.log(os.constants);
