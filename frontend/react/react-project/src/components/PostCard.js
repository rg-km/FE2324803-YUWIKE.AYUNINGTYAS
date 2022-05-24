// TODO: answer here
export default function PostCard({ image, caption, username, userId, date }) {
  // TODO: answer here
  return (
    <div aria-label="Post Card">
      <img aria-label="Post Image" src={image} alt="Post Image" />
      <div aria-label="Post User Name">
        <p>{username}</p>
      </div>
      <div aria-label="Post Caption">
        <p>{caption}</p>
      </div>
      <div aria-label="Post Date">
        <p>{date}</p>
      </div>
      <button aria-label="Like Button" onClick={() => this.isLiked(id)}>
        Like
      </button>
      <button aria-label="Dislike Button" onClick={() => isDisliked(id)}>
        Dislike
      </button>
    </div>
  );
}
