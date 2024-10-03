import prismaClient from "../../prisma";

interface DeleteProdutoProps{
    id: string;
}

class DeleteProdutoService{

    async execute({id}: DeleteProdutoProps){
        
        if(!id){
            throw new Error("Delete ivalido")
        }

        const findProduto = await prismaClient.produto.findFirst({
            where:{
                id: id
            }
        })

        if(!findProduto){
            throw new Error("Cliente não existe")
        }
        
        await prismaClient.produto.delete({
            where:{
                id: findProduto.id
            }
        })

        return{message: "Deletado com sucesso!"}

    }

}

export{DeleteProdutoService}
