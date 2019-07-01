/*
 * @Author: li
 * @Date: 2018-04-16 15:24:28
 * @Last Modified by: li
 * @Last Modified time: 2018-04-18 11:37:12
 */

// @flow

import { app, BrowserWindow } from 'electron';

let mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit();
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready', () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    fullscreen: true
  });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
});
