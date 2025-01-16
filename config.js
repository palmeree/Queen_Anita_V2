//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "233246377696";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0RnbWEyZk5aMWYzUW9GUUxSb3ZqWHJJZ2FaVWdPdk05OVRhL2Jia09tST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZDRHSlpLbUc2eUtJbXczNVc4ZHJmRUtPcXRwbk9UemxSMVI1NCtkUUNDdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFRml0cVducG1ON0U1QytONDR4M2hHa2c4WmU1YUd4MEdSbTh6NGtVWjA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTMy9DTW9sdmw3UEsyVFdMM0w4QmZCOHl4enNycHlXL0QyOGlmcWowb0hjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1BSlROMGgwYlZhRXc3R1cvNVFvdE9oTGNOajhEbGVpUWlhUkpObnFvWEE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhwRnNweDA5bHNLTFdCYThUVVdBL29zQjBTTmw3UjNtSkV1VzFwN1dJMGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY00xRUZQTnY3dzZydU1qYkZuTDhPTWZDaFRiQkJFSmJOMDFrV09RUDdYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL2NpRGZNZDFhSkR1UGdBVzFhNnZZVXg5V1NFaTJvcGtIYmJVcmZiaDUyMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlI3eWZlZmdUd013c1BsN3Q4WE5KOWFpK3hvamM4cnoxc1pWWjBvMEpPcjhNdytFdDVMWHRYbnFjanZ1YlhKelpxUTZSMWxseTN1Z05WT09tVTNBQ0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjU0LCJhZHZTZWNyZXRLZXkiOiJKUWZzVzI4MzRFRndSTTdvK0xIMVI2WCtUdDEvcGZCVTYzRzlSY01NRUJVPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ0ZC0yTjR0MlRGcXdwdUxER19jVGF3IiwicGhvbmVJZCI6ImRmMzY5MzEzLTU1YmQtNDA3OC1iOTdjLWIzOWJkOWU3ZGRhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqVXFOR2RtcVhEZnJ1V3Y5Y1hOcWdHb2hXY0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU1VvdkM2a3M0ZnFLUXJCVzRmR1dTLzlhVG1VPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkM5UVNaWTRCIiwibWUiOnsiaWQiOiIyMzMyNDYzNzc2OTY6MTVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSk9SRFkgUEFMTUVSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQN1d2VXdRcXNtT3ZBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrdDVaMWlWazVqUXZ0QWxnUTNxZENibW5nZUlQMTFwdlBJa3NFN1lGeWg0PSIsImFjY291bnRTaWduYXR1cmUiOiJhemxUZDV4K2Z6RVc3VGc2QWFZK0lBVXViQmJ0eGd6bVpzcllBMzdRaVloUFNEWFNkNXkydGdEU2thUXZkbmIwaVQwYlZzWUJIOHhoQnNWbzZQb1ZCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQVAzaWdaSTlxZFRpeFI2MVhzVy9CR1JLajFLY1JpVzgrWjlxUEhadHgrN0lINWhpV1FSTUVaNkQ1Y1JWM1o5K3RYd0tEdmZjVFlVS2EzaWVzaDllQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyNDYzNzc2OTY6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkxlV2RZbFpPWTBMN1FKWUVONm5RbTVwNEhpRDlkYWJ6eUpMQk8yQmNvZSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjY4MDYzMywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIVkYifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
