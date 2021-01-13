using farmerMarketAPI.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace farmerMarketAPI.Controllers
{
    public class FarmerController : ApiController
    {
        public HttpResponseMessage Get()
        {
            string query = @"select * from dbo.Farmer";
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["MapsDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }
        public HttpResponseMessage Get(int id)
        {
            string query = @"select * from dbo.Farmer WHERE Id =" + id ;
            DataTable table = new DataTable();
            using (var con = new SqlConnection(ConfigurationManager.
                ConnectionStrings["MapsDB"].ConnectionString))
            using (var cmd = new SqlCommand(query, con))
            using (var da = new SqlDataAdapter(cmd))
            {
                cmd.CommandType = CommandType.Text;
                da.Fill(table);
            }

            return Request.CreateResponse(HttpStatusCode.OK, table);


        }

        public string Post([FromBody] Farmer farmer)
        {
            try
            {
                string query = @"insert into dbo.Farmer values
            ('" + farmer.Username + @"','" + farmer.Pwd + @"','" + farmer.Gender + @"','" + farmer.Nic + @"','" + farmer.Longitude + @"','" + farmer.Latitude + @"','" + farmer.QualityFlag + @"')";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["MapsDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Farmer Created Sucessfully";
            }
            catch (Exception ex)
            {
                return "Error occured when creating Farmer";
            }
        }

        public string PostProducts([FromBody] FarmerProducts farmer,int id)
        {
            try
            {
                string query = @"insert into dbo.FarmerProducts values
            ('" + id + @"','" + farmer.ProductName + @"','" + farmer.Price + @"','" + farmer.Quantity +@"')";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["MapsDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Farmer Product Created Sucessfully";
            }
            catch (Exception ex)
            {
                return "Error occured when creating Farmer Products";
            }
        }





    }
}
