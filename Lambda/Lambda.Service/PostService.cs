using Lambda.Data;
using Lambda.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lambda.Service
{
  public class PostService : IPost
  {
    private readonly AppDbContext _ctx;

    public PostService(AppDbContext ctx)
    {
      _ctx = ctx;
    }

    public Task Add(Post post)
    {
      throw new NotImplementedException();
    }

    public Task AddReply(PostReply reply)
    {
      throw new NotImplementedException();
    }

    public Task Delete(int id)
    {
      throw new NotImplementedException();
    }

    public Task EditPostContent(int id, string newContent)
    {
      throw new NotImplementedException();
    }

    public IEnumerable<Post> GetAll(int id)
    {
      throw new NotImplementedException();
    }

    public Post GetById(int id)
    {
      throw new NotImplementedException();
    }

    public IEnumerable<Post> GetFilteredPosts(string searchQuery)
    {
      throw new NotImplementedException();
    }

    public IEnumerable<Post> GetPostsByForum(int id)
    {
      return _ctx.Forums
          .Where(forum => forum.Id == id).First()
          .Posts;
    }
  }
}
