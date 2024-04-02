-- CreateTable
CREATE TABLE "orders" (
    "id" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "price_unit" DECIMAL(65,30) NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);
