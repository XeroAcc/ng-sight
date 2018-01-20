using Lambda.Data.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Lambda.Data
{
  public interface IPost
  {
        Post GetById(int id);
        IEnumerable<Post> GetAll(int id);
        IEnumerable<Post> GetFilteredPosts(string searchQuery);
        IEnumerable<Post> GetPostsByForum(int id);

        Task Add(Post post);
        Task Delete(int id);
        Task EditPostContent(int id, string newContent);
        Task AddReply(PostReply reply);
  }
}
