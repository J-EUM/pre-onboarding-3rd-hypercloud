-- migrate:up
CREATE TABLE post_reaction (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
post_id INT,
user_id INT,
reaction_id INT,
created_at DATETIME DEFAULT NOW(),
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (post_id) REFERENCES posts (id),
FOREIGN KEY (reaction_id) REFERENCES reactions (id)
);

-- migrate:down
DROP TABLE post_reaction;
