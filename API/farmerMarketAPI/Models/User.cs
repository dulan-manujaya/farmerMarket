using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace farmerMarketAPI.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string Username { get; set; }
        public string Pwd { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public bool IsDOA { get; set; }
        public bool IsAdmin { get; set; }
    }
}