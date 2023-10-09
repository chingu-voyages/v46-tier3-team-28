CREATE TABLE `category` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`name` varchar(50),
	CONSTRAINT `category_id` PRIMARY KEY(`id`),
	CONSTRAINT `category_name_unique` UNIQUE(`name`)
);
--> statement-breakpoint
CREATE TABLE `collection` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`userId` text NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()),
	`title` text NOT NULL,
	`private` boolean DEFAULT true,
	CONSTRAINT `collection_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `item_category` (
	`item_id` int NOT NULL,
	`category_id` int NOT NULL
);
--> statement-breakpoint
CREATE TABLE `item` (
	`id` serial AUTO_INCREMENT NOT NULL,
	`collection_id` text,
	`title` text NOT NULL,
	`description` text,
	`url` text,
	`image` text,
	`note` text,
	CONSTRAINT `item_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text NOT NULL,
	`fullName` text,
	`username` text,
	`email` text NOT NULL,
	`emailVerified` timestamp,
	`image` text,
	CONSTRAINT `user_id` PRIMARY KEY(`id`),
	CONSTRAINT `user_email_unique` UNIQUE(`email`)
);
