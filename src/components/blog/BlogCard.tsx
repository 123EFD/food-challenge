export function BlogCard({ article }: { article: any }) {
  return (
    <article className="blog-card glass-container">
      <img src={article.thumbnailUrl} alt={article.title} loading="lazy" className="blog-card-img" />
      <div className="blog-card-content">
        <span className="blog-category">{article.category}</span>
        <h3 className="blog-title" style={{ fontFamily: 'var(--font-heading)' }}>{article.title}</h3>
        <p className="blog-summary">{article.summary}</p>
        
        <div className="blog-meta">
          <p className="transport-info">🚆 {article.transportInfo}</p>
          <a href={article.mapLink} target="_blank" rel="noopener noreferrer" className="map-link">📍 Google Maps</a>
        </div>
      </div>
    </article>
  );
}
