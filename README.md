# README

## MUSTR

Mustr is a turn-based, collaborative app for spontaneous, fearless writing. From film to commercial, stories to speeches, Mustr provides guided prompts (forms, patterns, and gmeas) for writers to collaborate, and let their creativity flourish together. 

## How to Install

Fork and clone from GitHub: 

https://github.com/mikahado/phase-2-project

Run a json server:

~~~
json-server --watch db.json --port 3000  
~~~

Run the scripts, to view in browser:

~~~
npm start
~~~

Follow the on-screen instructions. 

## Instructions

1. Gather 3 or more people together.

2. Create a Working Title for your project.

3. Choose a type: 
    * film
    * commercial
    * story
    * poem. 

4. Choose a method, a program that guides the form of their writing, but keeps the text box ready to fill. 

    In this MVP, the first available feature -- The Exquisite Horse -- is available to try.

## The Exquisite Horse

The Exquisite Horse is the first of many features of MUSTR. 

>*The Exquisite Corpse* was a classic, collaborative, writing game, invented in the 1920s. 

In this app, we call it **The Exquisite Horse** (yes, yes, a donkey).

### Rules

General rule: each collaborator is unaware of what the others have written. 

Here, the current author is only aware of what the previous author has written. All lines written beforehand are hidden! 

The entries are saved in order, and only revealed after all lines have been saved, individually.

>This writing method incites a sometimes absurd, often beautiful, piece of writing. 

## Why Turn-Based Writing?

MUSTR is turn-based. In all of our features the same rule follows: After one user writes their piece, they pass it on to the next! After you send your writing to your collaborator, it is set in stone! (Of course, that is, until everyone has had a turn -- then you can edit).

The benefit of turn-based (as opposed to synchronous writing -- like GoogleDocs -- where everyone can edit simultaneously) is that it works for *democratic collaboration*. No one writer can take control until a complete full draft has been drafted!

