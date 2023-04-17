CREATE TYPE carts_status_enum AS ENUM ('OPEN', 'ORDERED');

CREATE TABLE IF NOT EXISTS public.carts
(
    id uuid NOT NULL DEFAULT uuid_generate_v4(),
    user_id uuid NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT now(),
    updated_at timestamp without time zone NOT NULL DEFAULT now(),
    status carts_status_enum NOT NULL DEFAULT 'OPEN'::carts_status_enum,
    CONSTRAINT "PK_b5f695a59f5ebb50af3c8160816" PRIMARY KEY (id)
)