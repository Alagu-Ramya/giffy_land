import { CONFIG } from "./config";

export async function getFeatured(limit){
    await fetch(`${CONFIG.DOMAIN}/v2/search?q=excited&key=&limit=8&`);
};

