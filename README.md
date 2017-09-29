Bot steam Dota 2 counters pick
========

A bot steam dota 2 counters pick chat bot steam, consider it in alpha state.

## Installation

There are two ways to run Steam bot Dota2 Counters Pick. You can **deploy it to Heroku** or **install it in your
machine locally**.

If you want to host Steam bot Dota2 Counters Pick locally, you'll need to have your computer on 24/7 (provided you
need the bot running 24/7), and you'll need to install a few programs.

If you want to deploy it to Heroku, you'll need a [Heroku](https://www.heroku.com/home) account. You
don't need to spend any money, since their free plan is good enough. However you'll need to verify
your account with your credit card to have the bot running 24/7 (unverified accounts get 450 hours
per month of uptime, which is not enough to cover a full month. Verified accounts get 1000 hours,
which is enough). As long as you don't enable any paid service you won't get charged anything.

### Deploying to Heroku

In order to deploy the bot to Heroku, simply click on the following button:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/XxStR/dota2counterspick)

You'll be asked to log in or sign up. Then you'll be asked to choose an app name, and a server.
After that, you may press `Deploy`.

### Local installation

To run Steam bot Dota2 Counters Pick locally, you will need:

* [NodeJS](https://nodejs.org/en/download/) 6 or above.
* [git](https://git-scm.com/downloads), so you can easily clone this repo.

Start by cloning this repo, and then install the dependencies. In a command line (if you're on
Windows and have no idea what that means, open the `Git Bash` program that was installed with git),
do:

```sh
$ git clone https://github.com/XxStR/dota2counterspick.git
$ cd dota2counterspick
$ npm install
```

* Copy `config.example.js` to `config.js` and edit appropriately

```sh
$ npm run app
```

## Commands Bot
* `!dota2 counters < hero name>` - Shows the 10 counterspick of the informed hero.
* `!help` - Show all commands.
* `!contato` - Email Contact.
* `!sobre` - about `Steam bot Dota2 CountersPick` enum.


## Special thanks

Special thanks to:

- [Onur](https://github.com/onur)
- [DotaBuff](https://dotabuff.com)
- [RichMartel](https://github.com/RichMartel)
- [MeLlamoPablo](https://github.com/MeLlamoPablo/)

Thanks!

## License

ISC © [XxStR](https://github.com/XxStR)
