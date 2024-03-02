function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Demo Data')
      .addItem('Generate Demo Data', 'writeDemoHeader')
      .addToUi();
}

function writeDemoHeader() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();

  // Define the demo header row
  var demoHeader = ["Question", "Option A", "Option B", "Option C", "Option D", "Answer", "Trigger Date", "Trigger Time", "Posted"];

  // Write the demo header row to the sheet
  sheet.getRange(1, 1, 1, demoHeader.length).setValues([demoHeader]);

  // Add sample data for the "Trigger Date" and "Trigger Time" columns
  var currentDate = new Date();
  var triggerDate = Utilities.formatDate(currentDate, Session.getScriptTimeZone(), "yyyy-MM-dd");
  var triggerTime = Utilities.formatDate(currentDate, Session.getScriptTimeZone(), "HH:mm:ss");
  sheet.getRange(2, demoHeader.indexOf("Trigger Date") + 1).setValue(triggerDate);
  sheet.getRange(2, demoHeader.indexOf("Trigger Time") + 1).setValue(triggerTime);
}


