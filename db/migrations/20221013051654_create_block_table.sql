-- migrate:up
CREATE TABLE block (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
blocking_user_id INT NOT NULL,
blocked_user_id INT NOT NULL,
created_at DATETIME NOT NULL DEFAULT NOW(),
FOREIGN KEY (blocked_user_id) REFERENCES users (id),
FOREIGN KEY (blocking_user_id) REFERENCES users (id),
UNIQUE KEY unique_block (blocking_user_id,blocked_user_id)
);

-- migrate:down
DROP TABLE block;
