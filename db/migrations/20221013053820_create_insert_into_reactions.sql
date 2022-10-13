-- migrate:up
INSERT INTO reactions (name) VALUES ("좋아요"),("싫어요"),("보는중");

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE reactions;
SET FOREIGN_KEY_CHECKS = 1;
