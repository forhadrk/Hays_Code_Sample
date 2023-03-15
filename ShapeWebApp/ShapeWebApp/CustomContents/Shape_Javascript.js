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


    if (ShapeName === "Circle") {
        CalculateCircle($("#txt0").val());
    }
    else if (ShapeName === "Rectangle") {
        CalculateRectangle();
    }
    else if (ShapeName === "Square") {
        CalculateSquare($("#txt0").val());
    }
    else if (ShapeName === "Triangle") {
        CalculateTriangle();
    }   
}

function CalculateCircle(radius) {
    var _result = Math.PI * parseFloat(radius) * parseFloat(radius);

    $("#spResult").text("The area of the Rectangle is: " + _result);
}

function CalculateRectangle() {
    var _length = $("#txt0").val();
    var _width = $("#txt1").val();

    $("#spResult").text("The area of the Rectangle is: " + (parseFloat(_length) * parseFloat(_width)));
}

function CalculateSquare(value) {
    $("#spResult").text("The area of the Square is: " + (parseFloat(value) * parseFloat(value)));
}

function CalculateTriangle() {
    var _side1 = $("#txt0").val();
    var _side2 = $("#txt1").val();
    var _side3 = $("#txt2").val();

    var _perimeter = (parseFloat(_side1) + parseFloat(_side2) + parseFloat(_side3)) / 2;

    var _triangleArea = Math.sqrt(_perimeter * (_perimeter - _side1) * (_perimeter - _side2) * (_perimeter - _side3));

    $("#spResult").text("The area of the Triangle is: " + _triangleArea);
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
        '<div class="col-sm-12" style="padding-left: 30px;"><button id="btnCalculate" class="btn btn-success"> Calculate</button></div></div>');
}