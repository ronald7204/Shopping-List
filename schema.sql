CREATE TABLE "simple_lst" (
    "id" INTEGER,
    "name" TEXT,
    "quantity" REAL,
    "units" TEXT,
    "purchased" NOT NULL DEFAULT 0 CHECK (purchased IN (0,1)), 
    PRIMARY KEY("id")
);