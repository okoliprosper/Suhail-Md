const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348119512263";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_09_06_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjksXG4gICAgICAgIDI2LFxuICAgICAgICAxNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyNDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgODUsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDcsXG4gICAgICAgIDQzLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTksXG4gICAgICAgIDc5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDkyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA5MixcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTQ3LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICAwLFxuICAgICAgICAxNTksXG4gICAgICAgIDIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTM1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMixcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTE4LFxuICAgICAgICA5MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDExMixcbiAgICAgICAgMjI0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDksXG4gICAgICAgIDc3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTkyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzksXG4gICAgICAgIDcxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDY0LFxuICAgICAgICA2NSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjExLFxuICAgICAgICAzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDQxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgODJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDQwLFxuICAgICAgICA3NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMxLFxuICAgICAgICAxNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQ1LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1cTQ3cnQ1blBwZ0N3Y1BrSWlwQ1R5a1RTdnZ4b1pLVnByVWNKU0orVVQ4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlTVVkZXd5ZVR4LTVnTElxN09VWEtBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU3MjM0MGEyLTE2YzctNDZkNC1hYmJmLWQ5MmM2OTBhNDA5ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTYsXG4gICAgICAzMSxcbiAgICAgIDEzMCxcbiAgICAgIDQ5LFxuICAgICAgMTMwLFxuICAgICAgMzUsXG4gICAgICAxMTUsXG4gICAgICAxMTEsXG4gICAgICAxNzAsXG4gICAgICAxNjEsXG4gICAgICAyMzYsXG4gICAgICAyMDEsXG4gICAgICAxNTcsXG4gICAgICA4OCxcbiAgICAgIDg2LFxuICAgICAgOTcsXG4gICAgICAxODksXG4gICAgICA2LFxuICAgICAgMjA3LFxuICAgICAgMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjYsXG4gICAgICAyMDAsXG4gICAgICAxNjEsXG4gICAgICAyNDEsXG4gICAgICAxNDQsXG4gICAgICA5MixcbiAgICAgIDQyLFxuICAgICAgMjQsXG4gICAgICAyMDksXG4gICAgICAxNjQsXG4gICAgICAxMzYsXG4gICAgICAxODAsXG4gICAgICA2LFxuICAgICAgODQsXG4gICAgICAxNzQsXG4gICAgICAyMDYsXG4gICAgICAxNjgsXG4gICAgICAxODMsXG4gICAgICAyNCxcbiAgICAgIDEyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBRUhKUzlCVFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODExOTUxMjI2Mzo0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU0RHTE9CQUxcIixcbiAgICBcImxpZFwiOiBcIjExODY5NTg2NzIwMzYzMjo0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ092R3hMZ0ZFUGFmMTdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwidjlPc1gzbCtVYTBrQll3bzBEdnhDR2haclE4V3c3N2ZlRjJKeWVOYy9rND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJPaGVMUnBFMzlKMSs4Wk1nL2RuRHVvTEZnbjBTOGt1a0dxcjZNUkllSE5YY1RMK0g4WU1MQm1zMUFKNFNHRzBoNGdZWlBHY2ViYnZ6dnJwYU5pcFdCUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCI5bVZjU1AycHU2UDk4anh4QVhrTlNpaDdSNzNwc01UL1UvTGtiOE1mWVJZVzk3akF4RktoS3k2QUd3ZlNib0RNdk1ZSFprV3lkQklsek83aUhxQUREZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTE5NTEyMjYzOjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg5OTY5ODZcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
