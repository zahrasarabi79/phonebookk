// let btn = document.getElementById("btn");
// let txt = document.getElementById("name");
// let phone = document.getElementById("phone");
// let ulname = document.getElementById("ulname");
// let ulphone = document.getElementById("ulphone");

// btn.addEventListener("click", function () {
//   let list = document.createElement("li");
//   list.innerHTML = txt.value;
//   ulname.appendChild(list);
//   let listphone = document.createElement("li");
//   listphone.innerHTML = phone.value;
//   ulphone.appendChild(listphone);
// });

//node PB.jS

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter name : ", (answer1) => {
  rl.question("Please enter your phone : ", (answer2) => {
    const fs = require("fs");
    data = { name: answer1, phone: answer2 };
    file_path = "./myjsonfile.json";
    append_data(file_path, data);
    async function append_data(filename, data) {
      if (fs.existsSync(filename)) {
        read_data = await readFile(filename);
        // console.log(read_data[0]);
        if (read_data == false) {
          console.log("not able to read file");
        } else {
          let formData = fs.readFile("./myjsonfile.json", (err, data) => {});
          if (formData.entries(myjsonfile).length == 0) {
            read_data.push(data);
            dataWrittenStatus = await writeFile(filename, read_data);
            if (dataWrittenStatus == true) {
              console.log("data added successfully");
            } else {
              console.log("data adding failed");
            }
          } else {
            let idx;
            idx = read_data.findIndex((item) => item.name == answer1);
            let obj = read_data[idx];
            if (obj.phone !== answer2) {
              obj.phone = answer2;
              dataWrittenStatus = await writeFile(filename, read_data);
              if (dataWrittenStatus == true) {
                console.log("data added  and update successfully");
              } else {
                console.log("data adding failed");
              }
            } else {
              console.log("same");
            }
          }
        }
      } else {
        dataWrittenStatus = await writeFile(filename, [data]);
        if (dataWrittenStatus == true) {
          console.log("data added successfully");
        } else {
          console.log("data adding failed");
        }
      }
    }

    async function readFile(filePath) {
      try {
        const data = await fs.promises.readFile(filePath, "utf8");
        return JSON.parse(data);
      } catch (err) {
        return false;
      }
    }

    async function writeFile(filename, writedata) {
      try {
        await fs.promises.writeFile(
          filename,
          JSON.stringify(writedata, null, 4),
          "utf8"
        );
        return true;
      } catch (err) {
        return false;
      }
    }
    rl.close();
  });
});

// async function append_data(filename, data) {
//   if (fs.existsSync(filename)) {
//     read_data = await readFile(filename);
//     // console.log(read_data[0]);
//     if (read_data == false) {
//       console.log("not able to read file");
//     } else {
//       read_data.push(data);
//       dataWrittenStatus = await writeFile(filename, read_data);
//       if (dataWrittenStatus == true) {
//         console.log("data added successfully");
//       } else {
//         console.log("data adding failed");
//       }
//     }
//   } else {
//     dataWrittenStatus = await writeFile(filename, [data]);

//     if (dataWrittenStatus == true) {
//       console.log("data added successfully");
//     } else {
//       console.log("data adding failed");
//     }
//   }
// }

// async function updatedata(filename, data) {
//   read_data = await readFile(filename);
//   let idx;
//   idx = read_data.findIndex((item) => item.name == answer1);
//   let obj = read_data[idx];
//   if (obj.phone !== answer2) {
//     obj.phone = answer2;
//     dataWrittenStatus = await writeFile(filename, read_data);
//     if (dataWrittenStatus == true) {
//       console.log("data added  and update successfully");
//     } else {
//       console.log("data adding failed");
//     }
//   } else {
//     console.log("same");
//   }
// }
