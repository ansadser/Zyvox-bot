export function getText(msg){const m=msg?.message||{};return m.conversation||m.extendedTextMessage?.text||m.imageMessage?.caption||m.videoMessage?.caption||m.documentMessage?.caption||"";}
export function senderJid(msg){return msg?.key?.participant||msg?.key?.remoteJid||"";}
export function isGroup(jid){return String(jid||"").endsWith("@g.us");}
export function parseCommand(text,prefix="."){const t=String(text||"").trim();if(!t.startsWith(prefix))return null;const a=t.slice(prefix.length).trim().split(/\\s+/);const name=(a.shift()||"").toLowerCase();return {name,args:a,body:a.join(" ")};}