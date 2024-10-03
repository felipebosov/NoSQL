import { FastifyRequest, FastifyReply } from 'fastify';
import { CreateProdutoService } from '../../services/Produto/CreateProdutoService';

class CreateProdutoController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const {
            nome,
            descricao,
            preco,
            estoque,
            categoriaNome,
            categoriaDesc,
            cor,
            tamanho
        } = request.body as {
            nome: string;
            descricao: string;
            preco: number;
            estoque: number;
            categoriaNome: string;
            categoriaDesc: string;
            cor: string;
            tamanho: string;
        };

        const produtoService = new CreateProdutoService();

        try {
            const produto = await produtoService.execute({
                nome,
                descricao,
                preco,
                estoque,
                categoriaNome,
                categoriaDesc,
                cor,
                tamanho
            });

            reply.status(201).send(produto); // Enviando resposta com status 201 (Created)
        } catch (error) {
            const message = (error instanceof Error) ? error.message : 'Erro desconhecido';
            reply.status(400).send({ error: message }); // Enviando erro em caso de falha
        }
    }
}

export { CreateProdutoController };
