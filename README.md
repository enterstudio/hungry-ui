# Hungry UI - AngularJS App

https://hungry-server.azurewebsites.net/hungry-ui/

# install Hungry? app

## prerequisites

install npm

install gulp with:
>npm install --global gulp
>npm install --save-dev gulp

## build

>mvn clean install
does:

- npm install // installs build tool dependencies in package.json in dir "/node_modules"
- bower --allow-root install // installs JS dependencies in bower.json into dir "/bower_components" (specified in .bowerrc)
- gulp
