# Posterific
This is the sample app used in the Masterclass for Developers training course

# Getting Started
These steps assume that you have already configured your development environment according to the instructions provided with the course materials.

* start the Android emulator or connect an Android device (Marshmallow or higher) to your computer
* clone this repository to a local folder
* open a terminal/command window to that local folder and enter the following commands

```sh
# install all project dependencies
> yarn install

# apply patches to modules that temporarily require modifications
> yarn prepare

# link dependencies
> react-native link

# build and install the application
> react-native run-android
```

This repository contains the following branches:

* master: the Posterific app with NO Facebook platform integrations
* facebook-login: the Posterific app with Facebook Login
* account-kit: the Posterific app with Email and SMS login
* analytics: the Posterific app with logging for pre-defined and custom events
* messenger: the Posterific app with an m.me link to the page associated with the bot
* posterific-complete: the Posterific app with ALL Facebook platform integrations

# About this project

## Current Dependency Versions

At the time this document was written, the React Native CLI produces a starter project that depends on react-native@0.48.4 and react@16.0.0-alpha.12.

The Posterific app is built on this foundation and includes the following dependencies:

* native-base@2.3.2
* react-native-view-shot@2.1.0
* react-native-image-crop-picker@0.16.1
* react-native-modal@4.0.0
* react-native-storage@0.2.2
* react-native-photo-grid@0.0.2
* react-native-deprecated-custom-components@0.1.1

The completed version of the Posterific app adds these two libraries to the list:

* react-native-fbsdk@0.6.1
* react-native-facebook-account-kit@0.8.0

## Managing versions

Only the versions listed above have been tested together and this project is not guaranteed to use the latest versions of all dependencies. The package.json file specifies all dependencies with exact version numbers to protect against the potential for introducing breaking changes into the code base. This project exists to support a learning exercise and the stability that locking versions down provides can not be overstated.

To find out how current we are, install the node-check-updates package (https://github.com/tjunnone/npm-check-updates) and run ```ncu```.

You can expect periodic updates to this repo to reflect the latest versions of all dependencies as new versions are released and tested with this code base.

## Applying temporary fixes to currently broken libraries
The /patches folder contains temporary fixes for react-native-fbsdk@0.6.1 and react-native-deprecated-custom-components@0.1.1. These patches apply to the specific versions upon which they were based and may become unnecessary in the future. These patches are applied automatically whenever you ```yarn install``` and can also be applied manually with ```yarn prepare```. The patch-package utility (https://github.com/ds300/patch-package) enables this.
