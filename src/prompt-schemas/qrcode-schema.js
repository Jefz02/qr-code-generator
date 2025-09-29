import chalk from "chalk";

const QRCodeSchema = [
    {
        name: "content",
        description: chalk.black.bgWhite.bold(" Digite o texto/url para gerar o QRCode "),
    },
    {
        name: "type",
        description: chalk.yellow.bold(" Escolha entre o tipo de QRCode (1 - Normal) ou (2 - Terminal)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.italic.bold("Escolha entre 1 e 2"),
        required: true
    }
];

export default QRCodeSchema