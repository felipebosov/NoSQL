import {FastifyRequest, FastifyReply} from 'fastify';
import { ListProdutoService } from '../../services/Produto/ListProdutoService';

class ListProdutoController{

    async handle(request: FastifyRequest, reply: FastifyReply){
        const listProdutoService = new ListProdutoService();

        const produto = await listProdutoService.execute();

        reply.send(produto)

    }

}

export{ ListProdutoController }