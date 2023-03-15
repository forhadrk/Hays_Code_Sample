using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShapeWebApp.Models
{
    public class ShapeDBModel
    {
        public string Type { get; set; }
        public double Radius { get; set; }
        public double Length { get; set; }
        public double Width { get; set; }
        public double Square { get; set; }
        public double RectangleSide1 { get; set; }
        public double RectangleSide2 { get; set; }
        public double RectangleSide3 { get; set; }
    }
}