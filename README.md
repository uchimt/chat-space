# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
 |Coloumn|Type|Options|
 |-------|----|-------|
 |user_name|string|null: false|
 |email|string|null: false, unique: true|
 |password|string|null: false｜
## Association
 - has_many :message
 - has_many :group
 - has_many :chat_member

## groupテーブル
 |Coloumn|Type|Options|
 |-------|----|-------|
 |group_name|string|null: false, unique: true|
 |main_user_id|integer|null: false, forign_key: true|
 
## Association
 - has_many :chat_member 
 - has_many :message
 - belongs_to :user

## chat_memberテーブル
 |Coloumn|Type|Options|
 |-------|----|-------|
 |user_id|integer|foreign_key: true|
 |group_id|integer|null: false, foreign_key: true|
## Association
 - belongs_to :user
 - belongs_to :group
 
## msessageテーブル
 |Coloumn|Type|Options|
 |-------|----|-------|
 |text|text|null: false|
 |image|text||
 |user_id|integer|null: false, foreign_key: true|
 |group_id|integer|null: false, foreign_key: true|
## Association
 - belongs_to :user
 - belongs_to :group