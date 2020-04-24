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
 |name|string|null: false, index: true|
 |email|string|null: false, unique: true|
 |password|string|null: false｜
## Association
 - has_many :messages
 
 - has_many :chat_members

## groupテーブル
 |Coloumn|Type|Options|
 |-------|----|-------|
 |name|string|null: false, unique: true|


## Association
 - has_many :chat_members
 - has_many :messages
 

## chat_memberテーブル
 |Coloumn|Type|Options|
 |-------|----|-------|
 |user|references|null: false, foreign_key: true|
 |group|references|null: false, foreign_key: true|
## Association
 - belongs_to :user
 - belongs_to :group
 
## messageテーブル
 |Coloumn|Type|Options|
 |-------|----|-------|
 |text|text||
 |image|text||
 |user|references|null: false, foreign_key: true|
 |group|references|null: false, foreign_key: true|
## Association
 - belongs_to :user
 - belongs_to :group