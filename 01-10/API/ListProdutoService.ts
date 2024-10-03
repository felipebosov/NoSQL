import prismaClient from "../../prisma"

class ListProdutoService{

    async execute(){

        const produto = await prismaClient.produto.findMany();

        return produto;

    }

}

export{ ListProdutoService }