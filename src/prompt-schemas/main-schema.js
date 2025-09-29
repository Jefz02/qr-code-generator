import chalk from "chalk";

const mainSchema = [
    {
        name: "select",
        description: chalk.black.bgWhite.bold(" Escolha a ferramenta (1 - QrCode) ou (2 - Password) "),
        pattern: /^[1,2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        required: true
    }
];

export default mainSchema