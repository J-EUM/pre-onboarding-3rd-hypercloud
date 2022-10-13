-- migrate:up
CREATE TABLE reactions (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL
);

-- migrate:down
DROP TABLE reactions;
