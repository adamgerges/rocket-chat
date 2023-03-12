This guide assumes that you have already followed the guide on [how to develop the Desktop App](https://github.com/RocketChat/Rocket.Chat.Electron/blob/master/docs/development/getting-started.md) and that you are familiar with the development stack (git/node/javascript/electron).

## Assets

Usually, the first thing you want to change is the icons. There are a few folders that you need to take note of. From your root project directory, assets can be changed or customized in the following directories:

-   `./src/ui/icons/`
-   `./src/ui/assets/`

Pay attention that these files are React components and you can change them correctly. When the changes are done, generate your new files by running...

bashCopy code

`yarn build-assets`

The icons you want to replace with are stored in the folder "strategy-chat-icons".

## Tray Icon

If you want to customize the Tray Icon, there are two ways:

-   Open `public/images/tray` there you can check all current icons used by the application. You can change files if you want.
-   Open and change `ui/icon/AppIcon.tsx`. This is the icon base used to automatically generate all the icons. If you are used with tsx/jsx probably this is the easiest way to go.

To update the Tray Icon, change `ui/icon/AppIcon.tsx` and run

bashCopy code

`yarn build-assets`

## About

To change the about screen, head on to `./src/ui/components/AboutDialog/index.tsx` where you can change the copyright. If you've changed the logo already, it will automatically reflect on this page.

javascriptCopy code

``const copyright = `© 2016-${new Date().getFullYear()}, Rocket.Chat`;``

## Building and Packaging

We use [electron-builder](https://www.electron.build/) to "compile" and produce the executable files. You can find the configuration file `electron-builder.json` in the root project directory. Here you should change all references to the term `rocket.chat/rocket/chat.rocket/rocketchat` according to what each setting means.

The electron-builder has a webpage explaining what each attribute means, and cover other uses that we don't. You probably should look at this section if you want to maintain the automatic update.

After that, you just need to run the following commands:

bashCopy code

`yarn build yarn release`