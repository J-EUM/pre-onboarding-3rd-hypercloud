-- migrate:up
CREATE TABLE posts (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
user_id INT NOT NULL,
title VARCHAR(255) NOT NULL,
text VARCHAR(3000) NOT NULL,
privacy_setting_id INT NOT NULL DEFAULT 1,
updated_at DATETIME DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP,
created_at DATETIME DEFAULT NOW(),
FOREIGN KEY (privacy_setting_id) REFERENCES privacy_settings(id),
FOREIGN KEY (user_id) REFERENCES users (id)
);

-- migrate:down
DROP TABLE posts;
