using ShapeWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShapeWebApp.DataAccess
{
    public class ShapeCalculate
    {
        public double CalculateValue(ShapeDBModel _dbModel)
        {
            double _shapeVal = 0;
            if (_dbModel.Type == "Circle") {
                _shapeVal = CalculateCircleShape(_dbModel);
            }
            else if (_dbModel.Type == "Square")
            {
                _shapeVal = CalculateSquareShape(_dbModel);
            }
            else if (_dbModel.Type == "Rectangle")
            {
                _shapeVal = CalculateRectangleShape(_dbModel);
            }
            else if (_dbModel.Type == "Triangle")
            {
                _shapeVal = CalculateTriangleShape(_dbModel);
            }

            return _shapeVal;
        }

        public double CalculateCircleShape(ShapeDBModel _dbModel)
        {
            return Math.PI * _dbModel.Radius * _dbModel.Radius;
        }

        public double CalculateSquareShape(ShapeDBModel _dbModel)
        {
            return _dbModel.Square * _dbModel.Square;
        }

        public double CalculateRectangleShape(ShapeDBModel _dbModel)
        {
            return _dbModel.Length * _dbModel.Width;
        }

        public double CalculateTriangleShape(ShapeDBModel _dbModel)
        {
            double _perimeter = (_dbModel.RectangleSide1 + _dbModel.RectangleSide2 + _dbModel.RectangleSide3) / 2;
            return Math.Sqrt(_perimeter * (_perimeter - _dbModel.RectangleSide1) * (_perimeter - _dbModel.RectangleSide2) * (_perimeter - _dbModel.RectangleSide3));            
        }
    }
}