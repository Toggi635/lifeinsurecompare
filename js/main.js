const articles = [
  {
    id: 1,
    title: "Term Life vs Whole Life: Which Policy Is Right for You?",
    excerpt: "Compare term life and whole life insurance policies. Learn about costs, benefits, cash value, and how to choose the right coverage for your family's needs.",
    category: "Life Insurance",
    url: "posts/article-1/",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    alt: "Family reviewing life insurance documents together",
    date: "January 15, 2026"
  },
  {
    id: 2,
    title: "How Much Life Insurance Do You Really Need?",
    excerpt: "Calculate the right amount of life insurance coverage for your family. Learn about income replacement, debt coverage, future expenses, and the DIME method.",
    category: "Coverage Guide",
    url: "posts/article-2/",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&h=600&fit=crop",
    alt: "Calculator and financial planning documents on a desk",
    date: "February 14, 2026"
  },
  {
    id: 3,
    title: "Best Life Insurance Companies 2026: Rates and Reviews Compared",
    excerpt: "Compare the top life insurance companies of 2026. Side-by-side rates, financial strength ratings, customer reviews, and policy features reviewed.",
    category: "Company Reviews",
    url: "posts/article-3/",
    image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=600&fit=crop",
    alt: "Comparison chart showing top life insurance companies",
    date: "March 21, 2026"
  }
];

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('searchInput');
  const searchBtn = document.getElementById('searchBtn');
  const articlesGrid = document.getElementById('articlesGrid');

  function filterArticles(query) {
    const q = query.toLowerCase().trim();
    const filtered = q === '' ? articles : articles.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q)
    );
    renderArticles(filtered);
  }

  function renderArticles(items) {
    if (!articlesGrid) return;
    if (items.length === 0) {
      articlesGrid.innerHTML = '<div class="no-results">No articles found. Try a different search term.</div>';
      return;
    }
    articlesGrid.innerHTML = items.map(a => `
      <article class="article-card">
        <a href="${a.url}">
          <img src="${a.image}" alt="${a.alt}" loading="lazy" width="600" height="400">
        </a>
        <div class="article-card-body">
          <span class="category">${a.category}</span>
          <h3><a href="${a.url}">${a.title}</a></h3>
          <p>${a.excerpt}</p>
          <span class="date">${a.date}</span>
        </div>
      </article>
    `).join('');
  }

  if (searchInput && searchBtn && articlesGrid) {
    searchBtn.addEventListener('click', function() {
      filterArticles(searchInput.value);
    });
    searchInput.addEventListener('keyup', function(e) {
      if (e.key === 'Enter') {
        filterArticles(searchInput.value);
      }
    });
    renderArticles(articles);
  }

  if (articlesGrid && !searchInput) {
    renderArticles(articles);
  }
});
