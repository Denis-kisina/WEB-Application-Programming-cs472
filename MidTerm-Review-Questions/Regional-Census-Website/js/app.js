/**
 * app.js
 *
 * @author D. Kisina
 * @since 2020-05-02
 */
"use strict";
$(document).ready(function () {
    $("#censusForm").submit(
        function (event) {
            alert("working");
            event.preventDefault();
            const fullName = $("#fullName").value();
            const citizenId = $("#citizenId").value();
            const ssn = $("#ssn").value();
            const state = $("#ddlState").value();
            const senior = $("input[name='radioSeniorCitizen']:checked").value();
            let newDataRow = `<tr><td>${citizenId}</td><td>${ssn}</td><td>${fullName}</td><td>${state}</td><td>${citizenId}</td><td>${senior}</td>`
            $("#tbodyCitizenList").append(newDataRow);
            $("#fullName").value("");
            $("#citizenId").value("");
            $("#ssn").value("");
            $("#ddlState").value("");
            $("#radioSeniorCitizenYes").prop("checked", false);
            $("#radioSeniorCitizenNo").prop("checked", false);
            $("#fullName").focus();
        }
    );
});