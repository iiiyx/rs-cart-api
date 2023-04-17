CREATE TABLE IF NOT EXISTS public.cart_items
(
    cart_id uuid NOT NULL,
    product_id uuid NOT NULL,
    count integer NOT NULL,
    CONSTRAINT "PK_dba960dbfd8636893d3c7acb18d" PRIMARY KEY (cart_id, product_id),
    CONSTRAINT cart_items_cart_id_fkey FOREIGN KEY (cart_id)
        REFERENCES public.carts (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE,
    CONSTRAINT cart_items_product_id_fkey FOREIGN KEY (product_id)
        REFERENCES public.products (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE CASCADE
)