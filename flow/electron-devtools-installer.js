declare module 'electron-devtools-installer' {
  declare opaque type TOOL_ID: Object;
  declare export var EMBER_INSPECTOR: TOOL_ID;
  declare export var REACT_DEVELOPER_TOOLS: TOOL_ID;
  declare export var BACKBONE_DEBUGGER: TOOL_ID;
  declare export var JQUERY_DEBUGGER: TOOL_ID;
  declare export var ANGULARJS_BATARANG: TOOL_ID;
  declare export var VUEJS_DEVTOOLS: TOOL_ID;
  declare export var REDUX_DEVTOOLS: TOOL_ID;
  declare export var REACT_PERF: TOOL_ID;
  declare export var CYCLEJS_DEVTOOL: TOOL_ID;
  declare export var MOBX_DEVTOOLS: TOOL_ID;
  declare export default (TOOL_ID) => Promise<string>
}
