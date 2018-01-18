using System;
using System.Collections.Generic;
using System.Text;

namespace Lambda.Data.Models
{
    public class Input
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public DateTime Created { get; set; }
        public string ImageUrl { get; set; }

        public decimal Bps { get; set; }
        public decimal Hr { get; set; }
        public decimal Qos { get; set; }
        public decimal Bw { get; set; }
        public decimal Bmi { get; set; }
        public int Faq { get; set; }
        public int Bomc { get; set; }
    }
}
