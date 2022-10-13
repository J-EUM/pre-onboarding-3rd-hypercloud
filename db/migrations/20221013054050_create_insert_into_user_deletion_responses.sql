-- migrate:up
INSERT INTO user_deletion_responses (name) VALUES ("개인정보 유출이 우려돼서"),("서비스 이용이 불편해서"),("사용빈도가 낮아서"),("컨텐츠가 맘에 안들어서"),("다른 사이트가 더 좋아서");

-- migrate:down
SET FOREIGN_KEY_CHECKS = 0;
TRUNCATE user_deletion_responses;
SET FOREIGN_KEY_CHECKS = 1;
