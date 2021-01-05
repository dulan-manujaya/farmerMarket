using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace farmerMarketAPI.Models
{
    public class Farmer
    {
        public int FarmerId { get; set; }
        public string Username { get; set; }
        public string Pwd { get; set; }
        public string Gender { get; set; }
        public string MaritalStatus { get; set; }
        public decimal Longitude { get; set; }
        public decimal Latitude { get; set; }
        public int QualityFlag { get; set; }
    }
}