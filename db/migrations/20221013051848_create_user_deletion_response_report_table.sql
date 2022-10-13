-- migrate:up
CREATE TABLE user_deletion_response_report (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
response_id INT NOT NULL,
text VARCHAR(1000),
created_at DATETIME  NOT NULL DEFAULT NOW(),
FOREIGN KEY (response_id) REFERENCES user_deletion_responses (id)
);

-- migrate:down
DROP TABLE user_deletion_response_report;
