-- CreateTable
CREATE TABLE "ops" (
    "id" TEXT NOT NULL,
    "orderNumber" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "productQuantity" INTEGER NOT NULL,
    "productPrice" DECIMAL(65,30) NOT NULL,
    "deliveryLocation" TEXT NOT NULL,

    CONSTRAINT "ops_pkey" PRIMARY KEY ("id")
);
