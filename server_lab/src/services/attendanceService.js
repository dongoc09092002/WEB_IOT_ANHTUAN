const { Attendances } = require("../models");
const { Users } = require("../models");
//config mqtt
// const mqtt = require("mqtt");
// let client = mqtt.connect("mqtt://broker.hivemq.com");
// let response_mqtt_client;
// client.subscribe("DIEM_DANH_RESPONSE");

// client.on("connect", () => {
//   console.log("MQTT connected");
// });
// client.on("error", (error) => {
//   console.error("MQTT client error:", error);
// });

const createAttendance = async (req, res) => {
  const { userName, userCode, userImage } = req.body;
  if (!userName || !userCode || !userImage) {
    return res.json({
      errCode: 1,
      message: "Dont enought information",
    });
  }
  try {
    const checkUser = await Users.findOne({
      where: { userCode: userCode, userName: userName },
    });
    if (!checkUser) {
      return res.json({
        errCode: 1,
        message: "Error,Check the information again",
      });
    } else {
      // Tạo một promise để đợi phản hồi
      const waitForResponse = new Promise((resolve, reject) => {
        client.publish("DIEM_DANH", `${userImage}_${userName}_${userCode}`);

        setTimeout(() => {
          reject(new Error("Timeout waiting for response"));
        }, 3000); // Timeout sau 2 giây

        client.on("message", (topic, message) => {
          if (topic === "DIEM_DANH_RESPONSE") {
            const response = message.toString();
            resolve(response);
          }
        });
      });

      try {
        const response = await waitForResponse;
        return res.json({ message: "Received MQTT response", response });
      } catch (error) {
        return res.json({
          message: "No MQTT response within the timeout",
          error: error.message,
        });
      }
    }
  } catch (error) {
    return res.json({
      errCode: -1,
      message: "err server",
      data: error,
    });
  }
};
const test = (req, res) => {
  client.on("connect", () => {
    client.publish("DIEM_DANH", "DOVANNGOC_20203520ádasdf");
    while (!response_mqtt_client) {}
    return res.json(response_mqtt_client);
  });
  return res.json("kk");
};
module.exports = {
  createAttendance,
  test,
};
