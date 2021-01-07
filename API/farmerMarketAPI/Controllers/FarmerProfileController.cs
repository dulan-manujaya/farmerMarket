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
    public class FarmerProfileController : ApiController
    {

        public HttpResponseMessage Get()
        {
            string query = @"select * from dbo.FarmerProducts";
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
            string query = @"select * from dbo.FarmerProducts WHERE FarmerId ="+ id;
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

        public string Post([FromBody] Farmer user)
        {
            try
            {
                string query = @"EXEC [dbo].[UpdateFarmerStatus]
		 @FarmerId =" + user.FarmerId + ", @Status=  N'" + user.QualityFlag+"'" ;

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["MapsDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "Status updated!";
            }
            catch (Exception ex)
            {
                return "Error updating the Status!";
            }
        }

    }
}
