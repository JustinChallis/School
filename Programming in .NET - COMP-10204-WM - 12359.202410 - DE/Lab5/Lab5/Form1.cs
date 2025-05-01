using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Lab5
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the 'northwind_March2024DataSet.Orders' table. You can move, or remove it, as needed.
            this.ordersTableAdapter.Fill(this.northwind_March2024DataSet.Orders);

            // TODO: This line of code loads data into the 'northwind_March2024DataSet.Orders' table. You can move, or remove it, as needed.

            this.customersTableAdapter.Fill(this.northwind_March2024DataSet.Customers);

        }

        private void customersListBox_SelectedIndexChanged(object sender, EventArgs e)
        {
            string shipperID = notesTextBox.Text;

            if (string.IsNullOrEmpty(shipperID)) 
            {
                return;
            }

            string connectionString = "server=.\\SQLEXPRESS01;Database=Northwind_March2024;Integrated Security=True;TrustServerCertificate=True";
            string sqlString = $"SELECT * FROM dbo.Shippers WHERE shipperID = {shipperID}";

            SqlDataAdapter sqlDataAdapter = new SqlDataAdapter(sqlString, connectionString);
            DataSet myDataSet = new DataSet();
            sqlDataAdapter.Fill(myDataSet);

            DataTable myDataTable = myDataSet.Tables[0];
            DataRow dataRow = myDataTable.Rows[0];

            string companyName = dataRow["CompanyName"].ToString();

            notesTextBox.Text = companyName;



        }
    }
}
