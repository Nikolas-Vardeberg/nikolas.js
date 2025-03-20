import { init } from "./framework";
import { p } from "./framework/element";


const firstName = "Nikolas";
const lastName = "Vardeberg";

init("#app", p`Hello ${firstName} ${lastName}`);