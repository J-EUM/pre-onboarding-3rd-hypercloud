-- migrate:up
CREATE TABLE comments (
id INT PRIMARY KEY,
post_id INT,
user_id INT,
text VARCHAR(1000),
updated_at DATETIME DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP,
created_at DATETIME DEFAULT NOW(),
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (post_id) REFERENCES posts (id)
);

-- migrate:down
DROP TABLE comments;
