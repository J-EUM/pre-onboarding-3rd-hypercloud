-- migrate:up
CREATE TABLE block (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
blocking_user_id INT,
blocked_user_id INT,
created_at DATETIME DEFAULT NOW(),
FOREIGN KEY (blocked_user_id) REFERENCES users (id),
FOREIGN KEY (blocking_user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE block;
