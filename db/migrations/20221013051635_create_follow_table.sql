-- migrate:up
CREATE TABLE follow (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
following_user_id INT,
followed_user_id INT,
created_at DATETIME DEFAULT NOW(),
FOREIGN KEY (following_user_id) REFERENCES users (id),
FOREIGN KEY (followed_user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE follow;
