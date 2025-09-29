import QRCodeSchema from "../../prompt-schemas/qrcode-schema.js";
import prompt from "prompt";
import handle from "./handle.js"

async function createQRCode() {
    prompt.get(QRCodeSchema, handle)
}

export default createQRCode