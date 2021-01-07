using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace farmerMarketAPI.Models
{
    public class FarmerProducts
    {
        public int FarmerId { get; set; }
        public string ProductName { get; set; }
        public string Quantity { get; set; }
        public string Price { get; set; }
    
    }
}