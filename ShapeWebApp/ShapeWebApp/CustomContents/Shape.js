$(function () {
    $(document).delegate('#ddlShape', 'change', function (e) {
        e.preventDefault();
        $("#spResult").text("");
        if ($(this).val() === "") {
            $("#divHtml").empty();
            return false;
        }
        GenerateInputArea($(this).val());
    });
    $(document).delegate('#btnCalculate', 'click', function (e) {
        e.preventDefault();
        CalculateShape($('#ddlShape').val());
    });
});

function CalculateShape(ShapeName) {
    var _dbModel;

    if (ShapeName === "Circle") {
        var _radius = $("#txt0").val();
        _dbModel = { 'Type': ShapeName, 'Radius': _radius };
    }
    else if (ShapeName === "Rectangle") {
        var _length = $("#txt0").val();
        var _width = $("#txt1").val();

        _dbModel = { 'Type': ShapeName, 'Length': _length, 'Width': _width };
    }
    else if (ShapeName === "Square") {
        var _square = $("#txt0").val();

        _dbModel = { 'Type': ShapeName, 'Square': _square };
    }
    else if (ShapeName === "Triangle") {
        var _side1 = $("#txt0").val();
        var _side2 = $("#txt1").val();
        var _side3 = $("#txt2").val();

        _dbModel = { 'Type': ShapeName, 'RectangleSide1': _side1, 'RectangleSide2': _side2, 'RectangleSide3': _side3 };
    }

    $(".txt").removeClass("customError");
    var _isError = 0;

    $("#divEntry .txt").each(function () {
        if ($(this).val() === "") {
            $(this).addClass("customError");
            _isError = 1;
        }
    });

    if (_isError === 1) {
        return false;
    }

    $.ajax({
        type: "POST",
        url: "/Shape/CalculateShape",
        data: JSON.stringify(_dbModel),
        contentType: "application/json",
        datatype: "json",
        async: true,
        success: function (data) {
            if (data.Success === true)
                $("#spResult").text("The area of the " + ShapeName + " is: " + data.Shape);
            else
                $("#spResult").text("Something Went Wrong. Please check your input data..!");
        }
    });
}

function GenerateInputArea(ShapeName) {
    if (ShapeName === "Circle") {
        GenerateInputBox("Radius", ShapeName);
    }
    else if (ShapeName === "Rectangle") {
        GenerateInputBox("Length,Width", ShapeName);
    }
    else if (ShapeName === "Square") {
        GenerateInputBox("Side", ShapeName);
    }
    else if (ShapeName === "Triangle") {
        GenerateInputBox("Value1,Value2,Value3", ShapeName);
    }
}

function GenerateInputBox(Labels, Type) {
    var arrInputNames = Labels.split(',');
    var _html = "";
    $("#divHtml").empty();
    $.each(arrInputNames, function (indexes, values) {
        _html += "<div class='col-sm-3'>" +
            "<div class='col-sm-12'>" +
            "<label class='col-sm-12'>Enter " + Type + " " + values + " </label>" +
            "</div>" +
            "<div class='col-sm-12'>" +
            "<input id='txt" + indexes + "' type='number' class='form-control txt' />" +
            "</div>" +
            "</div>";
    });
    $("#divHtml").append('<div id="divEntry" class="row">' + _html + '</div><hr/><div class="row">' +
        '<div class="col-sm-12" style="padding-left: 30px;"><button id="btnCalculate" class="btn btn-primary"> Calculate</button></div></div>');
}