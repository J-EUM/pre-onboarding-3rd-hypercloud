-- migrate:up
INSERT INTO privacy_settings (name) VALUES ("공개"),("친구공개"),("비공개");

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE privacy_settings;
SET FOREIGN_KEY_CHECKS = 1;
