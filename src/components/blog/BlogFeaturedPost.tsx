export function BlogFeaturedPost({ article }: { article: any }) {
  return (
    <div className="featured-post glass-container">
      <img src={article.thumbnailUrl} alt={article.title} className="featured-img" />
      
      <div className="featured-overlay">
        <div className="featured-content">
          <span className="blog-category">{article.category}</span>
          <h2 className="featured-title" style={{ fontFamily: 'var(--font-heading)' }}>{article.title}</h2>
          <p className="featured-summary">{article.summary}</p>
          
          <div className="blog-meta">
            <p className="transport-info">🚆 {article.transportInfo}</p>
            <a href={article.mapLink} target="_blank" rel="noopener noreferrer" className="btn map-link-btn">📍 View on Google Maps</a>
            {article.priceRange && <p className="price-tag featured-price">💰 {article.priceRange}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}
