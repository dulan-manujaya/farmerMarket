using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace farmerMarketAPI.Models
{
    public class FarmerLocation
    {
        public int Id { get; set; }
        public int FarmerId { get; set; }
        public string ProductName { get; set; }
        public decimal Price { get; set; }
        public decimal Quantity { get; set; }
    }
}