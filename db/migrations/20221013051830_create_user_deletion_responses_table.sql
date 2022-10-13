-- migrate:up
CREATE TABLE user_deletion_responses (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
has_text TINYINT
);

-- migrate:down
DROP TABLE user_deletion_responses;
