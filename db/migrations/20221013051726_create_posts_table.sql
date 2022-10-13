-- migrate:up
CREATE TABLE posts (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_id INT,
title VARCHAR(255),
text VARCHAR(3000),
privacy_setting_id INT,
updated_at DATETIME DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP,
created_at DATETIME DEFAULT NOW(),
FOREIGN KEY (privacy_setting_id) REFERENCES privacy_settings(id),
FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE posts;
