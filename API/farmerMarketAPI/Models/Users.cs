using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace farmerMarketAPI.Models
{
    public class Users
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Pwd { get; set; }
        public string Email { get; set; }
        public string Location { get; set; }
        public string Type { get; set; }

    }
}