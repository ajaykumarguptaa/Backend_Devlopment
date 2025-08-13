// need two pakages inquirer.j for taking in put from user qr-image generate qr code
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([{ message: "Typing in Your URL:", name: "URL" }])
  .then((answers) => {
    console.log(answers);
    const url = answers.URL;
    let qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream("qr_img.svg"));
    // let svg_string = qr.imageSync("I love QR!", { type: "svg" });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.error(error);
    } else {
      // Something else went wrong
    }
  });

// import QRCode from "qrcode";
// import fs from "fs";

// // Certificate data to encode in QR
// const certificateData = {
//   id: "EXMR-20250804-LK07",
//   name: "Amrit kumar jha",
//   course: "SUMMER TRAINING on Data Analytics & Visualization",
//   duration: "6 Weeks",
//   email: "amrit.satghara@gmail.com",
//   status: "Complete",
//   completionDate: "09 Aug 2025"
// };

// // Convert object to JSON string
// const jsonData = JSON.stringify(certificateData);

// // Save to PNG file
// QRCode.toFile(
//   "certificate.png", // path to save
//   jsonData,
//   {
//     color: {
//       dark: "#000000", // QR dots color
//       light: "#FFFFFF", // QR background
//     },
//     width: 300, // Optional: change size
//   },
//   function (err) {
//     if (err) {
//       console.error("QR generation failed:", err);
//     } else {
//       console.log("✅ QR Code saved to ./qr/certificate.png");
//     }
//   }
// );
