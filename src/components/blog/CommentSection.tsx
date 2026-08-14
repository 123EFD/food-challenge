'use client';
import { useState, FormEvent } from 'react';

type Comment = {
  id: number;
  author: string;
  text: string;
  date: string;
};

const initialComments: Comment[] = [
  { id: 1, author: "MakanKaki99", text: "Bro, you missed out the legendary Nasi Kandar near LRT Bangsar! Best giler.", date: "2 hours ago" },
  { id: 2, author: "LRT_Rider", text: "Foo Hing Dim Sum is top tier, but the queue weekend morning is crazy. Go early!", date: "1 day ago" }
];

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;

    const comment: Comment = {
      id: Date.now(),
      author: "GuestVisitor", 
      text: newComment,
      date: "Just now"
    };

    setComments([comment, ...comments]);
    setNewComment("");
  };

  return (
    <section className="comment-section glass-container">
      <h2 style={{ fontFamily: 'var(--font-heading)' }}>Borak-borak Corner</h2>
      <p className="comment-subtitle">Share your favorite <i>port makan</i> (food spots) near public transport!</p>
      
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea 
          className="comment-input"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Got other solid port makan near LRT/MRT? Kongsi sikit your recommendation here lah!"
          rows={3}
          required
        ></textarea>
        <button type="submit" className="btn comment-submit">Post Comment</button>
      </form>

      <div className="comments-list">
        {comments.map(c => (
          <div key={c.id} className="comment-bubble">
            <div className="comment-header">
              <span className="comment-author">{c.author}</span>
              <span className="comment-date">{c.date}</span>
            </div>
            <p className="comment-text">{c.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
