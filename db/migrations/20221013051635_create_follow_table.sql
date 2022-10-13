-- migrate:up
CREATE TABLE follow (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
following_user_id INT NOT NULL,
followed_user_id INT NOT NULL,
created_at DATETIME NOT NULL DEFAULT NOW(),
FOREIGN KEY (following_user_id) REFERENCES users (id),
FOREIGN KEY (followed_user_id) REFERENCES users (id),
UNIQUE KEY unique_follow (following_user_id,followed_user_id)
);

-- migrate:down
DROP TABLE follow;
