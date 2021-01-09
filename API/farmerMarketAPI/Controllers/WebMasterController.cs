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
    public class WebMasterController : ApiController
    {

  //      //login
  //      public HttpResponseMessage Post([FromBody] UserAdmin user)
  //      {
  //          try
  //          {
  //              string query = @"EXEC [dbo].[WebUserSignUp]
		//@username =" + user.Username + ", @pwd=" + user.Pwd;

  //              DataTable table = new DataTable();
  //              using (var con = new SqlConnection(ConfigurationManager.
  //                  ConnectionStrings["MapsDB"].ConnectionString))
  //              using (var cmd = new SqlCommand(query, con))
  //              using (var da = new SqlDataAdapter(cmd))
  //              {
  //                  cmd.CommandType = CommandType.Text;
  //                  da.Fill(table);
  //              }
  //              return Request.CreateResponse(HttpStatusCode.OK, "User Created!");
  //          }
  //          catch (Exception ex)
  //          {
  //              return Request.CreateResponse(HttpStatusCode.OK, "ERROR!");
  //          }
  //      }
        public string Post([FromBody] Users user)
        {
            try
            {
                string query = @"insert into [dbo].[User] values ('" + user.Username + @"','" + user.Pwd + @"','" + user.Email + @"','" + user.Location + @"','" + user.Type+ @"')";

                DataTable table = new DataTable();
                using (var con = new SqlConnection(ConfigurationManager.
                    ConnectionStrings["MapsDB"].ConnectionString))
                using (var cmd = new SqlCommand(query, con))
                using (var da = new SqlDataAdapter(cmd))
                {
                    cmd.CommandType = CommandType.Text;
                    da.Fill(table);
                }
                return "User Created Sucessfully";
            }
            catch (Exception ex)
            {
                return "Error occured when creating User";
            }
        }
    }
}
