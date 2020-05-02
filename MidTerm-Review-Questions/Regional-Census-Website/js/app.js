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

                event.preventDefault();
                const fullName = $("#fullName").val();
                const citizenId = $("#citizenId").val();
                const ssn = $("#ssn").val();
                const state = $("#ddlState").val();
                const senior = $("input[name='radioSeniorCitizen']:checked").val();
                let newDataRow = `<tr><td>${citizenId}</td><td>${ssn}</td><td>${fullName}</td><td>${state}</td><td>${citizenId}</td><td>${senior}</td>`
                // alert(`Form submitting .. ${newDataRow}`);
                $("#tbodyCitizenList").append(newDataRow);
                $("#fullName").val("");
                $("#citizenId").val("");
                $("#ssn").val("");
                $("#ddlState").val("");
                $("#radioSeniorCitizenYes").prop("checked", false);
                $("#radioSeniorCitizenNo").prop("checked", false);
                $("#fullName").focus();
        }
    );
});