import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const find_produtos = async (request, response) => {
    const findAll_produtos = await prisma.produtos.findMany({});
    return response.json(findAll_produtos);
}

export const create_produtos = async (request, response) => {
    const { nome_produto, valor, quantidade_vendida_ano } = request.body;
    const create_produto = await prisma.produtos.create({
        data: {
            nome_produto,
            valor,
            quantidade_vendida_ano
        }
    })
    return response.json(create_produto);
}

export const find_produtos_op = async (request, response) => {
    const findAll_produtos = await prisma.produtos.findMany({
        where: {
            quantidade_vendida_ano: {
                gt: parseInt(request.params.qt)
            }
        }
    });
    return response.json(findAll_produtos);
}