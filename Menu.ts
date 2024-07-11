import readlinesync = require("readline-sync");
import { colors } from "./src/util/Colors";
import { Produto } from "./src/model/Produto";


export function main() {

    //a variavel opcao percorre todo o menu
    let opcao: number;



    while (true) {


        console.log(colors.bg.black, colors.fg.yellow,
            "*****************************************************");
        console.log("                                                     ");
        console.log("                PRODUTOS POO!                        ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Produto                        ");
        console.log("            2 - Listar todos os Produtos             ");
        console.log("            3 - Consultar Produto por id             ");
        console.log("            4 - Atualizar Produto                    ");
        console.log("            5 - Apagar Produto                       ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                      ",
            colors.reset);

        console.log("Insira a opcao desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao == 6) {


            console.log(colors.fg.greenstrong,
                "\nFicamos felizes em ajuda-lo..")
            sobre();
            console.log(colors.reset, "");
            process.exit(0);
        }

        switch (opcao) {
            case 1:
                console.log("\nCriar Produto");

                keyPress()
                break;
            case 2:
                console.log("\nListar todos os Produtos");

                keyPress()
                break;
            case 3:
                console.log("\nConsultar Produto por id");

                keyPress()
                break;
            case 4:
                console.log("\nAtualizar Produto");

                keyPress()
                break;
            case 5:
                console.log("\nApagar um Produto ");

                keyPress()
                break;
            default:
                console.log("\n Esta oopcao esta invalida!");

                keyPress()
                break;
        }
    }
}

export function sobre(): void {
    console.log("\n><><><><><><><><><><><><><><><><><><><><><><><><><><>");
    console.log("Projeto Desenvolvido por: Everrton Pinheiro Sales Figueiredo ");
    console.log("Generation Brasil - everton.figueiredo@genstudents.org");
    console.log("https://github.com/Evertonpsf");
    console.log("><><><><><><><><><><><><><><><><><><><><><><><><><><><");
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();