import { proxy } from "valtio";

const state = proxy({ backgroundFlipped: false });

export { state };
