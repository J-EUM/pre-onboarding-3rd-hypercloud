-- migrate:up
CREATE TABLE privacy_settings (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255)
);

-- migrate:down
DROP TABLE privacy_settings;
