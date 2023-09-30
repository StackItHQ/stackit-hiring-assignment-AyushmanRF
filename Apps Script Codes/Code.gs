function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Custom CSV Importer')
      .addItem('Open Sidebar', 'openSidebar')
      .addToUi();
}

/**
 * Open a sidebar in the Google Sheets document.
 */

function openSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Page')
      .setTitle('CSV Importer')
      .setWidth(300);
  SpreadsheetApp.getUi().showSidebar(html);
}

function getSheetNames() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    return ss.getSheets().map(function(sheet) {
        return sheet.getName();
    });
}

function uploadCSV(data, fileName, selectedColumns, filterColumn, filterValue, chosenSheet, actionType) {
    try {
        var csvData = Utilities.parseCsv(data);

        // Apply Filter
        if (filterValue) {
            csvData = csvData.filter(function(row) {
                return row[filterColumn] === filterValue;
            });
        }

        // Filter the data based on the selectedColumns
        csvData = csvData.map(function(row) {
          return selectedColumns.map(function(colIndex) {
            return row[colIndex];
          });
        });

        var ss = SpreadsheetApp.getActiveSpreadsheet();
        
        var sheet;
        if (actionType === "new") {
            sheet = ss.getSheetByName(chosenSheet);
            if (sheet) {
                sheet.clear();  // Overwrite existing data
            } else {
                sheet = ss.insertSheet(chosenSheet);  // Create a new sheet
            }
        } else {
            sheet = ss.getSheetByName(chosenSheet) || ss.insertSheet(chosenSheet);
        }

        // Append the data.
        sheet.getRange(sheet.getLastRow() + 1, 1, csvData.length, selectedColumns.length).setValues(csvData);
        return "Data imported successfully.";
    } catch (e) {
        Logger.log("Error: " + e.toString());
        return "Error during import: " + e.toString();
    }
}
