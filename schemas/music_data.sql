CREATE TABLE `music_game`.`music_data` (
  `create_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NOT NULL,
  `mapper` VARCHAR(20) NOT NULL,
  `mapper_id` INT NOT NULL,
  `difficulty` FLOAT NOT NULL,
  `bpm` FLOAT NOT NULL,
  `duration` INT NOT NULL,
  `key_count` INT NOT NULL,
  `origin_song` VARCHAR(100) NOT NULL,
  `producer` VARCHAR(45) NOT NULL,
  `youtube_id` VARCHAR(45) NOT NULL,
  `video_url` VARCHAR(100) NOT NULL,
  `img_src` VARCHAR(100) NOT NULL,
  `love_count` INT NULL,
  `play_count` INT NULL,
  `view_count` INT NULL,
  `map_data` TEXT NULL,
  PRIMARY KEY (`create_time`, `id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);