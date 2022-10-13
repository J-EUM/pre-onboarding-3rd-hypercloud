-- migrate:up
CREATE TABLE user_deletion_responses (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
has_text TINYINT NOT NULL DEFAULT 0
);

-- migrate:down
DROP TABLE user_deletion_responses;
