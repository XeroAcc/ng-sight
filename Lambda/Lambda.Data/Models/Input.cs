using System;
using System.Collections.Generic;
using System.Text;

namespace Lambda.Data.Models
{
    public class Input
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public virtual ApplicationUser User { get; set; }
        public virtual IEnumerable<PostReply> Replies { get; set; }
        public virtual Post Post { get; set; }
        public string ImageUrl { get; set; }
        public DateTime Created { get; set; }
        public string Description { get; set; }

        public decimal bps { get; set; }
        public decimal hr { get; set; }
        public decimal qos { get; set; }
        public decimal bw { get; set; }
        public decimal bmi { get; set; }
        public int faq { get; set; }
        public int bomc { get; set; }

  }
}
