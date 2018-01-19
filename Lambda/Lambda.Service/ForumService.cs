using Lambda.Data;
using Lambda.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Lambda.Service
{
  public class ForumService : IForum
  {
    private readonly AppDbContext _ctx;

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

    public IForum GetById(int id)
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
  }
}
