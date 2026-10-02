import {COMMANDS} from "./registry.js";
export function getCommand(name){return COMMANDS[name];}
export function commandList(){return Object.entries(COMMANDS);}
export function buildMenu(prefix="."){let out=["*ZYVOX COMMAND MENU*","Prefix: "+prefix];for(const [cat,items] of Object.entries(COMMANDS)){out.push("", "*"+cat+"*");for(const [n,d] of Object.entries(items))out.push("• "+prefix+n+" — "+d);}return out.join("\\n");}