using ShapeWebApp.DataAccess;
using ShapeWebApp.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ShapeWebApp.Controllers
{
    public class ShapeController : Controller
    {
        // GET: Shape
        public ActionResult Calculator()
        {
            return View();
        }

        public ActionResult Calculaton()
        {
            return View();
        }

        [HttpPost]
        public JsonResult CalculateShape(ShapeDBModel _dbModel)
        {
            try
            {
                ShapeCalculate _objItem = new ShapeCalculate();
                var _output = _objItem.CalculateValue(_dbModel);

                return Json(new { Shape = _output, Success= true });
            }
            catch (Exception ex)
            {
                return Json(new { Shape = 0, Success = false });
            }
        }

    }
}