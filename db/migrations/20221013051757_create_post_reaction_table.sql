-- migrate:up
CREATE TABLE post_reaction (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
post_id INT NOT NULL,
user_id INT NOT NULL,
reaction_id INT NOT NULL,
created_at DATETIME NOT NULL DEFAULT NOW(),
FOREIGN KEY (user_id) REFERENCES users (id),
FOREIGN KEY (post_id) REFERENCES posts (id),
FOREIGN KEY (reaction_id) REFERENCES reactions (id),
UNIQUE KEY unique_pr (post_id,user_id,reaction_id)
);

-- migrate:down
DROP TABLE post_reaction;
