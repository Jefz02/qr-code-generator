import prompt from "prompt";
import mainSchema from "./prompt-schemas/main-schema.js";
import createQRCode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";

async function main () {
    prompt.get(mainSchema, async (err, choice) => {

        console.log(err)
        
        if (choice.select == 1) await createQRCode();
        if (choice.select == 2) await createPassword();
    });

    prompt.start();
}

main();