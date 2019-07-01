/*
 * @Author: li
 * @Date: 2018-04-16 15:24:28
 * @Last Modified by: li
 * @Last Modified time: 2019-03-18 09:38:27
 */

// @flow

import Path from 'path';
import { app, BrowserWindow } from 'electron';
import installExtension, { REACT_DEVELOPER_TOOLS } from 'electron-devtools-installer';

let mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({ width: 540, height: 960, frame: true });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + Path.join(__dirname, '../build') + '/index.html');

  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err));

  mainWindow.webContents.openDevTools(); //open dev tools for debugging

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
