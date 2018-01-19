using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Lambda.Data.Models;

namespace Lambda.Data
{
  public class AppDbContext : IdentityDbContext<ApplicationUser>
  {
      public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
      {
      }

      public DbSet<ApplicationUser> ApplicationUsers { get; set; }
      public DbSet<Forum> Forums { get; set; }
      public DbSet<Post> Posts { get; set; }
      public DbSet<PostReply> PostReplies { get; set; }
      public DbSet<Input> Inputs { get; set; }
  }
}
