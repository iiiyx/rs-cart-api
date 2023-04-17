CREATE TABLE IF NOT EXISTS public.products
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    description character varying(2000) COLLATE pg_catalog."default" NOT NULL,
    price numeric(4,2) NOT NULL,
    title character varying(100) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY (id)
)
