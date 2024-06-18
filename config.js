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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349161072794";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_44_06_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA3OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDAsXG4gICAgICAgIDY3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMDksXG4gICAgICAgIDgyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTMxLFxuICAgICAgICA2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzUsXG4gICAgICAgIDIwLFxuICAgICAgICA2NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOCxcbiAgICAgICAgMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDUxLFxuICAgICAgICA1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjMwLFxuICAgICAgICA2NCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODgsXG4gICAgICAgIDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA0LFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDUsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0NyxcbiAgICAgICAgMTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4NCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1LFxuICAgICAgICA5OCxcbiAgICAgICAgNTEsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4NSxcbiAgICAgICAgNixcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE4LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3LFxuICAgICAgICAyMixcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDM1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDY2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMixcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2MixcbiAgICAgICAgNTIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjEzLFxuICAgICAgICA4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ2Y1JPa2xDNENISERjZWZ0ZzkwOEhNdG9KNHFKNmFhSCtsMUMycnJXM2xFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJla0VJajZWZ1NGLWhxMXR2Q2xPYW5RXCIsXG4gIFwicGhvbmVJZFwiOiBcIjExZDQwMmI3LTU0MGUtNGU2ZC1hYWJiLThiOTBjYTZiYjkyNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDYsXG4gICAgICAyMTcsXG4gICAgICAxODEsXG4gICAgICAyMjAsXG4gICAgICAxMjksXG4gICAgICAyNTIsXG4gICAgICAxNTgsXG4gICAgICA3NyxcbiAgICAgIDEsXG4gICAgICA4MyxcbiAgICAgIDE0OSxcbiAgICAgIDExNCxcbiAgICAgIDEzLFxuICAgICAgMTY5LFxuICAgICAgOTYsXG4gICAgICAyNTUsXG4gICAgICAxMjgsXG4gICAgICAxODUsXG4gICAgICAxMTcsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMTQ0LFxuICAgICAgMTMzLFxuICAgICAgMTEzLFxuICAgICAgMTU3LFxuICAgICAgMTQzLFxuICAgICAgMjIsXG4gICAgICAxNjEsXG4gICAgICAxNjIsXG4gICAgICAxNTQsXG4gICAgICAxNTYsXG4gICAgICAyMDAsXG4gICAgICAxMCxcbiAgICAgIDksXG4gICAgICAyMzQsXG4gICAgICAxNTEsXG4gICAgICA2NCxcbiAgICAgIDg3LFxuICAgICAgMjIwLFxuICAgICAgMTk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkNBQkY2RjRXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTYxMDcyNzk0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwMDkzMTc0ODI0OTgyNTo4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09PV3B4Z1F4dlhFc3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiMVJuQk92T1ZsYkV5R0Yrb2kzUW1uaEgvSzZtVThsYmV6NXdkRzIvSlIyZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJsVDB2SUhWWlFIQlFGVC9kcGZuV2oyU0pjR0hXditVaTB6QjJmZnNGSE5OTlFUK2Rtakk2NGxadFFLaXZjR0dhSXVwSXdrdUU5VGtiVUx1WmpKVUlDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJXM3NMNWhBa00zUlpMYVJXMzA3NlpKdCtaVmdiUWFnUXpuUk10VWpOQm1lcFBqSUxIZFJNeFhlK2d3dzBVWHlZWUJjbkc5SGhva0dHSTFxdUk2eWNBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MTYxMDcyNzk0OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTg2OTY2NTBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
