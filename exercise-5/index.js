import helloWorld from "./helloWorld.js";
import ambilDataUser from "./ambilDataUser.js";
import ambilDataUserAsync from "./ambilDataUserAsync.js";

async function messages() {
  const msg = await helloWorld();
  console.log(msg);
}

messages();
ambilDataUser();
ambilDataUserAsync();
