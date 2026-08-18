// assets/js/core-ui.js

window.initUI = function () {
  if (window.Modal) Modal.init();
  if (window.Tabs) Tabs.init();
  if (window.Dropdown) Dropdown.init();
  if (window.Switches) Switches.init();
};
