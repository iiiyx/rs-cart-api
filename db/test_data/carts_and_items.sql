-- Insert test data into cart_items table
INSERT INTO cart_items (cart_id, product_id, count) VALUES
  ('2edc4069-0ca2-4c39-9e52-88ebc8cf1170', '92a667bf-5d24-4d52-a34d-c220edbde01d', 2),
  ('2edc4069-0ca2-4c39-9e52-88ebc8cf1170', '01972f89-a5fe-4229-a5d2-38ccbbf7141f', 1),
  ('b6c2d6f5-197e-4886-98ce-cd7d1e9b6da8', '01972f89-a5fe-4229-a5d2-38ccbbf7141f', 3),
  ('b6c2d6f5-197e-4886-98ce-cd7d1e9b6da8', '66a4291d-9694-4d0c-81db-98609cf4d7e2', 2),
  ('b6c2d6f5-197e-4886-98ce-cd7d1e9b6da8', '5e3ee9d2-1daa-4882-95fb-12004023bf31', 1),
  ('b6c2d6f5-197e-4886-98ce-cd7d1e9b6da8', '4603f470-4cd7-4c59-8453-0ce13f0a2b6f', 4),
  ('b6c2d6f5-197e-4886-98ce-cd7d1e9b6da8', '15c9bd73-1f0c-4000-b5c6-988c1dffbafb', 1),
  ('b6c2d6f5-197e-4886-98ce-cd7d1e9b6da8', '174f1585-5b45-4e6e-82fb-77aa06eefb96', 3),
  ('b6c2d6f5-197e-4886-98ce-cd7d1e9b6da8', '550cd614-3eff-4a41-9208-3d9607856887', 2);

-- Insert test data into carts table
INSERT INTO carts (id, user_id, status) VALUES 
  ('2edc4069-0ca2-4c39-9e52-88ebc8cf1170', 'd155f96a-9cb9-4f05-b80f-8327d1eafca4', 'OPEN'),
  ('b6c2d6f5-197e-4886-98ce-cd7d1e9b6da8', '1a52c23d-6d12-496e-8fcb-44d1a93849e9', 'ORDERED');

