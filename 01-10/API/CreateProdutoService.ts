import prismaClient from "../../prisma"

interface CreateProdutoProps{
    nome: string;
    descricao: string;
    preco: number;
    estoque: number;
    categoriaNome: string;
    categoriaDesc: string;
    cor: string;
    tamanho: string;
}

class CreateProdutoService {
    async execute({
        nome,
        descricao,
        preco,
        estoque,
        categoriaNome,
        categoriaDesc,
        cor,
        tamanho
    }: CreateProdutoProps) {
        // Verifica se todos os campos obrigatórios foram preenchidos
        if (!nome || !descricao || preco === undefined || estoque === undefined) {
            throw new Error("Preencha todos os campos obrigatórios");
        }

        // Criação do produto no banco de dados
        const produto = await prismaClient.produto.create({
            data: {
                nome,
                descricao,
                preco,
                estoque,
                categoriaNome, // Mantendo como campo direto
                categoriaDesc, // Mantendo como campo direto
                cor,
                tamanho,
            }
        });

        return produto;
    }
}

export{CreateProdutoService}
