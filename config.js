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
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUdEKzUreXJIR3dhOGZIaXljT3BrTjd6Sk15c1YvMFZkeW12UjR2N0dFVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmRhTUVGYVBvTlVGbjVwK2FLODZoUG9TKzJXeXkvWWJLYmZmWGZJc00xQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQi9vVUlia2tKUnNLMHFRK2VmS0hoT0lCRHdCUzlPTEd2QUlaV1FWZDFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKc2dxYUh2bjlKZmJJRHY0dUlGM0RFM2cySkpiZDViNXFXbDFRazlpSmdNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdPY3FVcFRnZVNaazRXRkNoelRrRktNZGhmVVh5Mzc0dnBncWpmTUhPMWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZkWGFQdkZxdDh5V2xBNkZsNXM3d1Y0UVlTRmdpeFROUGpOVXo1WFJZRTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUZyd3l2T3lKTUFGeEQwZTZsUkhOWFVCejM5MTUrMXpqSzhqUi9VeDNubz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVpabkUzZExRL21GYXFaRk12VlZqMkRxclFHVVVOSks5TDB0Q29XbGIwZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZyTDd5ZTltOUxXRFRYbStrWm1WYkxFOVpiQmprQUY4cTRpMnRFMmVHek90bTFMbkJ5ZWloWnVadmE1emtnMVg1MlBTQmhOY3g1S1Q1WVpRbkU0N2dnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTcwLCJhZHZTZWNyZXRLZXkiOiI5T0pKZi9yUm9zMXJGUHlNMXJyWTgxUmZ5R281c21ZMUVhRTY3anI2NU1BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvbWhKSnpwUlFILXZsRmJfWXpmMzFBIiwicGhvbmVJZCI6ImM5ZDU3ZjA4LWI5YTctNGU5OS1iYzc4LWU2NjMwMzI1NDYxYiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyRExiaGRhc3M4ekM0dHFScVo2dmtsVEk5c3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQVczdENlUGlaV0lwb0FCc3ZVb0V6WDlsOFhRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdHUk1DWVpFIiwibWUiOnsiaWQiOiIyMzMyNDYzNzc2OTY6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiSk9SRFkgUEFMTUVSIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQM1d2VXdRbWY2THZBWVlBU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJrdDVaMWlWazVqUXZ0QWxnUTNxZENibW5nZUlQMTFwdlBJa3NFN1lGeWg0PSIsImFjY291bnRTaWduYXR1cmUiOiJiNStmK1RTaDE2RGNvcmdXaTMraVJlL1ZaUXlhbzN0SzNwOXhoYldDamQrdkR3eDNPeTZoNllJL0FyMkplZmNjWWJINzg1ZWlFTy9nR2hPeXFLYWpCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibXNMQzlPZXB5d1lhTXJ4SmhQVVYyTWt0Z29QMmV0Y2xBbU5lbFVxYk5KdFZ5VGtSWFdTZkRBSUtyWUlUbmVvOHB1V2F3ZGEwWnJHcmx1ZjlNM05saUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzMyNDYzNzc2OTY6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWkxlV2RZbFpPWTBMN1FKWUVONm5RbTVwNEhpRDlkYWJ6eUpMQk8yQmNvZSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjYzODI0NywibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIVkYifQ=="
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
