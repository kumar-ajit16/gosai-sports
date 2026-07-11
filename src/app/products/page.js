"use client";

import { Suspense, useState, useEffect } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { 
  Trophy, Dumbbell, Star, Eye, ShoppingCart, 
  Search, X, ExternalLink, ArrowUpDown 
} from "lucide-react";
import { products, CATEGORIES } from "@/data/products";

function ProductsCatalog() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // URL state synchronization and derived states
  const categoryParam = searchParams.get("category") || "all";
  const subcategoryParam = searchParams.get("subcategory") || "all";

  let selectedCategory = categoryParam;
  let selectedSubcategory = subcategoryParam;

  if (subcategoryParam !== "all" && categoryParam === "all") {
    const parent = Object.values(CATEGORIES).find(cat => 
      Object.values(cat.subcategories).some(sub => sub.id === subcategoryParam)
    );
    if (parent) {
      selectedCategory = parent.id;
    }
  }

  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState("");

  // Handle category sidebar click
  const handleCategorySelect = (categoryId) => {
    setSearchQuery("");
    if (categoryId === "all") {
      router.push("/products");
    } else {
      router.push(`/products?category=${categoryId}`);
    }
  };

  const handleSubcategorySelect = (subcategoryId) => {
    setSearchQuery("");
    router.push(`/products?subcategory=${subcategoryId}`);
  };

  // Filter products
  const filteredProducts = products.filter((product) => {
    // Category match
    const matchesCategory = 
      selectedCategory === "all" || product.category === selectedCategory;
    
    // Subcategory match
    const matchesSubcategory = 
      selectedSubcategory === "all" || product.subcategory === selectedSubcategory;
    
    // Search query match
    const matchesSearch = 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.subcategory.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSubcategory && matchesSearch;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const parsePrice = (priceStr) => parseInt(priceStr.replace(/[^0-9]/g, ""), 10);
    
    if (sortBy === "price-low") {
      return parsePrice(a.price) - parsePrice(b.price);
    }
    if (sortBy === "price-high") {
      return parsePrice(b.price) - parsePrice(a.price);
    }
    if (sortBy === "rating") {
      return b.rating - a.rating;
    }
    return 0; // default order
  });

  // Get total count of items in categories for sidebar badges
  const getProductCount = (type, value) => {
    if (type === "category") {
      return products.filter(p => p.category === value).length;
    }
    if (type === "subcategory") {
      return products.filter(p => p.subcategory === value).length;
    }
    return products.length;
  };

  return (
    <section className="section" style={{ minHeight: "80vh" }}>
      <div className="container">
        {/* Page Title Header */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <h1 className="gradient-text" style={{ fontSize: "40px", fontWeight: "900", marginBottom: "12px" }}>
            OUR CATALOG
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "16px", maxWidth: "600px", margin: "0 auto" }}>
            Browse through our heavy-duty, high-performance athletic collection. Clicking any product expands full specifications.
          </p>
        </div>

        {/* Filter controls */}
        <div className="glass-panel" style={{ padding: "16px 24px", marginBottom: "32px", display: "flex", gap: "20px", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ position: "relative", flex: "1", minWidth: "260px" }}>
            <Search size={18} style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
            <input
              type="text"
              placeholder="Search equipment..."
              className="form-control"
              style={{ paddingLeft: "42px", margin: 0 }}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <ArrowUpDown size={16} style={{ color: "var(--accent-primary)" }} />
            <select
              className="form-control"
              style={{ width: "180px", margin: 0, padding: "10px 14px", cursor: "pointer" }}
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Default Sorting</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>

        <div className="catalog-layout">
          {/* Sidebar Filter Navigation */}
          <aside className="glass-panel sidebar-filter" style={{ padding: "24px" }}>
            <h3 className="filter-title">Filter by Category</h3>

            {/* Category Groups */}
            <div className="filter-group">
              <button 
                onClick={() => handleCategorySelect("all")} 
                className={`filter-btn ${selectedCategory === "all" ? "active" : ""}`}
              >
                <span>All Products</span>
                <span className="filter-badge">{getProductCount("all")}</span>
              </button>
            </div>

            {Object.values(CATEGORIES).map((cat) => {
              const IconComponent = cat.icon === "Trophy" ? Trophy : Dumbbell;
              return (
                <div key={cat.id} className="filter-group">
                  <div className="filter-group-title" style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                    <IconComponent size={14} style={{ color: "var(--accent-primary)" }} />
                    {cat.name}
                  </div>
                  
                  <ul className="filter-list" style={{ paddingLeft: "12px", borderLeft: "1px solid rgba(255,255,255,0.05)" }}>
                    <li>
                      <button
                        onClick={() => handleCategorySelect(cat.id)}
                        className={`filter-btn ${selectedCategory === cat.id && selectedSubcategory === "all" ? "active" : ""}`}
                        style={{ fontSize: "13px" }}
                      >
                        <span>All {cat.name.split(" ")[0]}</span>
                        <span className="filter-badge">{getProductCount("category", cat.id)}</span>
                      </button>
                    </li>
                    {Object.values(cat.subcategories).map((sub) => (
                      <li key={sub.id}>
                        <button
                          onClick={() => handleSubcategorySelect(sub.id)}
                          className={`filter-btn ${selectedSubcategory === sub.id ? "active" : ""}`}
                          style={{ fontSize: "13px" }}
                        >
                          <span>{sub.name}</span>
                          <span className="filter-badge">{getProductCount("subcategory", sub.id)}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </aside>

          {/* Product Cards Grid */}
          <main>
            {sortedProducts.length === 0 ? (
              <div className="glass-panel" style={{ textAlign: "center", padding: "80px 24px" }}>
                <Trophy size={48} style={{ color: "var(--text-muted)", marginBottom: "16px", strokeWidth: 1.5 }} />
                <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "8px" }}>No Products Found</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "14px" }}>
                  Try refining your search or select a different category filter.
                </p>
              </div>
            ) : (
              <div className="products-grid">
                {sortedProducts.map((product) => (
                  <div key={product.id} className="glass-panel product-card">
                    {/* Image Wrapper */}
                    <div 
                      className="product-image-wrapper"
                      onClick={() => { setSelectedProduct(product); setActiveImage(product.image); }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 30vw"
                      />
                      <div className="product-rating">
                        <Star size={12} fill="#FFB800" stroke="none" />
                        <span>{product.rating}</span>
                      </div>
                      
                      {/* Hover Overlay Icon */}
                      <div style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        background: "rgba(0,0,0,0.5)",
                        display: "flex",
                        alignItems: "center",
                        justifycontent: "center",
                        opacity: 0,
                        transition: "all 0.3s ease",
                        cursor: "pointer"
                      }} className="hover-overlay-icon">
                        <div style={{
                          background: "var(--accent-primary)",
                          color: "white",
                          padding: "10px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center"
                        }}>
                          <Eye size={20} />
                        </div>
                      </div>
                      
                      <style jsx>{`
                        .product-image-wrapper:hover .hover-overlay-icon {
                          opacity: 1 !important;
                        }
                      `}</style>
                    </div>

                    <div className="product-meta">
                      <span className="product-tag">{product.subcategory.replace("-", " ")}</span>
                      <span className="product-price">{product.price}</span>
                    </div>

                    <a 
                      href="#" 
                      onClick={(e) => { e.preventDefault(); setSelectedProduct(product); setActiveImage(product.image); }} 
                      className="product-name"
                    >
                      {product.name}
                    </a>
                    
                    <p className="product-desc">{product.description}</p>

                    <div className="store-buttons">
                      <a
                        href={product.amazonLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-store btn-amazon"
                      >
                        Buy on Amazon
                      </a>
                      <a
                        href={product.meeshoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-store btn-meesho"
                      >
                        Buy on Meesho
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="modal-overlay" onClick={() => { setSelectedProduct(null); setActiveImage(""); }}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => { setSelectedProduct(null); setActiveImage(""); }}>
              <X size={20} />
            </button>

            <div className="modal-body">
              <div className="modal-img-container" style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ position: "relative", width: "100%", flex: 1, minHeight: "300px" }}>
                  <Image
                    src={activeImage || selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="product-rating" style={{ top: "16px", left: "16px" }}>
                    <Star size={12} fill="#FFB800" stroke="none" />
                    <span>{selectedProduct.rating} ({selectedProduct.reviews} reviews)</span>
                  </div>
                </div>
                
                {/* Image Gallery Thumbnails */}
                {selectedProduct.images && selectedProduct.images.length > 1 && (
                  <div style={{ display: "flex", gap: "8px", padding: "12px", background: "rgba(0,0,0,0.1)", borderTop: "1px solid rgba(255,255,255,0.05)", justifyContent: "center" }}>
                    {selectedProduct.images.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(imgUrl)}
                        style={{
                          position: "relative",
                          width: "50px",
                          height: "50px",
                          borderRadius: "6px",
                          overflow: "hidden",
                          border: activeImage === imgUrl ? "2px solid var(--accent-primary)" : "1px solid rgba(255,255,255,0.15)",
                          cursor: "pointer",
                          background: "none",
                          padding: 0,
                          transition: "all 0.2s ease"
                        }}
                      >
                        <Image
                          src={imgUrl}
                          alt={`${selectedProduct.name} View ${idx + 1}`}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="50px"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="modal-info">
                <span className="product-tag" style={{ marginBottom: "8px", display: "inline-block" }}>
                  {selectedProduct.category.replace("-", " & ")} / {selectedProduct.subcategory.replace("-", " ")}
                </span>
                
                <h2 className="modal-title">{selectedProduct.name}</h2>
                <div className="modal-price">{selectedProduct.price}</div>
                <p className="modal-desc">{selectedProduct.description}</p>
                
                <h4 className="modal-specs-title">Key Specifications</h4>
                <ul className="modal-specs-list">
                  {selectedProduct.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>

                <div style={{ marginTop: "auto", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <p style={{ fontSize: "12px", color: "var(--text-muted)", marginBottom: "12px", textAlign: "center" }}>
                    Select a marketplace store below to purchase this product:
                  </p>
                  <div className="store-buttons" style={{ gridTemplateColumns: "1fr 1fr" }}>
                    <a
                      href={selectedProduct.amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-store btn-amazon"
                      style={{ padding: "14px" }}
                    >
                      Buy on Amazon <ExternalLink size={14} />
                    </a>
                    <a
                      href={selectedProduct.meeshoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-store btn-meesho"
                      style={{ padding: "14px" }}
                    >
                      Buy on Meesho <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-secondary)" }}>
        <div style={{ textAlign: "center" }}>
          <Trophy size={40} className="pulse-dot" style={{ animation: "pulse-animation 1.5s infinite", marginBottom: "16px" }} />
          <p>Loading catalog products...</p>
        </div>
      </div>
    }>
      <ProductsCatalog />
    </Suspense>
  );
}
