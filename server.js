// const express = require('express');
const xlsx = require('xlsx');
// const fs = require('fs');
// const util = require('util');


const readExcel = () => {
  const workbook = xlsx.readFile('./excel.xlsx');
  const sheet_name_list = workbook.SheetNames;
  const rows = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
  console.log(rows);
};

readExcel();
