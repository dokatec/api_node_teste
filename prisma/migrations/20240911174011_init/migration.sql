-- CreateTable
CREATE TABLE "Produtos" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome_produto" TEXT,
    "valor" DECIMAL NOT NULL,
    "quantidade_vendida_ano" INTEGER NOT NULL
);
