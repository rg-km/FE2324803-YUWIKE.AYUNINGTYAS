// TODO: answer here
export default function LikeDislikeButton({
  id,
  isLiked,
  isDisliked,
  likeCount,
  dislikeCount,
}) {
  // TODO: answer here
  return (
    <div>
      <button aria-label="Like Button" onClick={() => this.isLiked(id)}>
        Like
      </button>
      <button aria-label="Dislike Button" onClick={() => isDisliked(id)}>
        Dislike
      </button>
      <div aria-label="Like Count">
        <p>Like Count: {likeCount}</p>
      </div>
      <div aria-label="Dislike Count">
        <p>Dislike Count: {dislikeCount}</p>
      </div>
    </div>
  );
}
