using Lambda.Models.Forum;
using System;

namespace Lambda.Models.Post
{
  public class PostListingModel
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
    public int AuthorRating { get; set; }
    public string AuthorId { get; set; }
    public DateTime DatePosted { get; set; }

    public ForumListingModel Forum { get; set; }

    public int RepliesCount { get; set; }
  }
}
