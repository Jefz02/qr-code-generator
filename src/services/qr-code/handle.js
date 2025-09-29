import qr from "qrcode-terminal"
import chalk from "chalk"

async function handle (err, result) {
    if(err) {
        console.log(chalk.red.italic.bold("error on application"))
        return;
    }

    const isSmall = result.type == 2

    qr.generate(result.content, {small: isSmall}, (qrcode) => {
        console.log(chalk.green.italic.bold("QRCode gerado com sucesso:\n"))
        console.log(qrcode)
    })
}

export default handle