CREATE TABLE IF NOT EXISTS public.orders
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL,
    cart_id uuid NOT NULL,
    payment text COLLATE pg_catalog."default",
    delivery text COLLATE pg_catalog."default",
    comments character varying(2000) COLLATE pg_catalog."default" NOT NULL,
    status character varying(10) COLLATE pg_catalog."default" NOT NULL,
    total numeric(10,2) NOT NULL,
    CONSTRAINT "PK_710e2d4957aa5878dfe94e4ac2f" PRIMARY KEY (id),
    CONSTRAINT "REL_f42b1d95404c45b10bf2451d81" UNIQUE (cart_id),
    CONSTRAINT orders_cart_id_fkey FOREIGN KEY (cart_id)
        REFERENCES public.carts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)