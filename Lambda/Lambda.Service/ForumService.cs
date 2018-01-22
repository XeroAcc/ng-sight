using Lambda.Data;
using Lambda.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Lambda.Service
{
  public class ForumService : IForum
  {
    private readonly AppDbContext _ctx;
    private Forum forum;

    // Forum Service uses EntityFramework to interact w/ Data
    public ForumService(AppDbContext ctx)
    {
      _ctx = ctx;
    }

    public Task Create(Forum forum)
    {
      throw new NotImplementedException();
    }

    public Task Delete(int forumId)
    {
      throw new NotImplementedException();
    }

    public IEnumerable<Forum> GetAll()
    {
      return _ctx.Forums.Include(forum => forum.Posts);
    }

    public IEnumerable<ApplicationUser> GetAllActiveUsers()
    {
      throw new NotImplementedException();
    }

    public Task UpdateForumDescription(int forumId, string newDescription)
    {
      throw new NotImplementedException();
    }

    public Task UpdateForumTitle(int forumId, string newTitle)
    {
      throw new NotImplementedException();
    }

    public Forum GetById(int id)
    {
        var forum = _ctx.Forums.Where(f => f.Id == id)
        .Include(f => f.Posts).ThenInclude(p => p.User)
        .Include(f => f.Posts).ThenInclude(p => p.Replies)
        .ThenInclude(r => r.User)
        .FirstOrDefault();

        return forum;
    }
  }
}
