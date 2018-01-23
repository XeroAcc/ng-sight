using Lambda.Data;
using Lambda.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
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

    public async Task Add(Post post)
    {
      _ctx.Add(post);
      await _ctx.SaveChangesAsync();
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

    public IEnumerable<Post> GetAll()
    {
      return _ctx.Posts
           .Include(post => post.User)
           .Include(post => post.Replies).ThenInclude(reply => reply.User)
           .Include(post => post.Forum);
    }

    public Post GetById(int id)
    {
      return _ctx.Posts.Where(post => post.Id == id)
          .Include(post => post.User)
          .Include(post => post.Replies).ThenInclude(reply => reply.User)
          .Include(post => post.Forum)
          .First();
    }

    public IEnumerable<Post> GetFilteredPosts(string searchQuery)
    {
      throw new NotImplementedException();
    }

    public IEnumerable<Post> GetLatestPosts(int n)
    {
      return GetAll().OrderByDescending(post => post.Created).Take(n);
    }

    public IEnumerable<Post> GetPostsByForum(int id)
    {
      return _ctx.Forums.Where(forum => forum.Id == id).First().Posts;
    }
  }
}
