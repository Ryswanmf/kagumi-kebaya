// Logika Aplikasi Interaktif Kagumi Sewa Kebaya

let currentCategory = 'all';
let selectedProduct = null;
let isFollowing = false;

document.addEventListener('DOMContentLoaded', () => {
  initBusinessProfile();
  initHighlights();
  renderProducts();
  renderArticles();
  renderRentalTerms();
  setupEventListeners();
  setupScrollEffects();
});

// 1. Inisialisasi Data Profil Bisnis
function initBusinessProfile() {
  // Update link WhatsApp utama
  const waLinks = document.querySelectorAll('.wa-order-link');
  const defaultWaMessage = encodeURIComponent(
    `Halo Kak, saya ingin konsultasi dan tanya jadwal sewa kebaya di Kagumi Sewa Kebaya.`
  );
  waLinks.forEach(link => {
    link.href = `https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${defaultWaMessage}`;
  });

  // Tombol Follow Instagram interaktif
  const followBtn = document.getElementById('btn-follow');
  if (followBtn) {
    followBtn.addEventListener('click', () => {
      isFollowing = !isFollowing;
      if (isFollowing) {
        followBtn.classList.remove('bg-neutral-900', 'text-white', 'hover:bg-neutral-800');
        followBtn.classList.add('bg-stone-200', 'text-stone-800', 'hover:bg-stone-300');
        followBtn.innerHTML = `<i class="fa-solid fa-check mr-1.5 text-xs"></i> Mengikuti`;
        showToast('Terima kasih telah mengikuti @kagumi.sewakebaya ✨');
      } else {
        followBtn.classList.remove('bg-stone-200', 'text-stone-800', 'hover:bg-stone-300');
        followBtn.classList.add('bg-neutral-900', 'text-white', 'hover:bg-neutral-800');
        followBtn.innerHTML = `Ikuti`;
      }
    });
  }

  // Tombol Bagikan Profil
  const shareBtn = document.getElementById('btn-share-profile');
  if (shareBtn) {
    shareBtn.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({
          title: 'Kagumi Sewa Kebaya Bandar Lampung',
          text: 'Sewa Kebaya Wisuda & Lamaran Elegan di Bandar Lampung',
          url: window.location.href,
        }).catch(() => {});
      } else {
        navigator.clipboard.writeText(window.location.href);
        showToast('Link profil Kagumi Kebaya berhasil disalin!');
      }
    });
  }
}

// 2. Render Sorotan Cerita (Story Highlights)
function initHighlights() {
  const container = document.getElementById('highlights-container');
  if (!container) return;

  container.innerHTML = HIGHLIGHTS.map(h => {
    return `
      <div class="flex flex-col items-center flex-shrink-0 cursor-pointer group" onclick="handleHighlightClick('${h.categoryFilter || ''}', '${h.action || ''}')">
        <div class="story-ring transition-transform group-hover:scale-105">
          <div class="p-0.5 bg-white rounded-full">
            <img 
              src="${h.cover}" 
              alt="${h.title}" 
              class="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-stone-100"
              loading="lazy"
            />
          </div>
        </div>
        <span class="text-xs sm:text-sm font-medium text-stone-700 mt-2 text-center max-w-[80px] sm:max-w-[90px] truncate group-hover:text-amber-800">
          ${h.title}
        </span>
      </div>
    `;
  }).join('');
}

// Handle Klik Highlight
window.handleHighlightClick = function(category, action) {
  if (action === 'openTermsModal') {
    openTermsModal();
    return;
  }

  if (category) {
    filterProducts(category);
    // Scroll mulus ke katalog
    const katalogSection = document.getElementById('katalog');
    if (katalogSection) {
      katalogSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

// 3. Render Katalog Produk (Maksimal 6 produk di beranda, susunan 3 3)
function renderProducts(filter = 'all') {
  currentCategory = filter;
  const container = document.getElementById('products-grid');
  if (!container) return;

  const filtered = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  // Ambil maksimal 6 produk untuk beranda (format 3 3)
  const displayProducts = filtered.slice(0, 6);

  if (displayProducts.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-stone-500">
        <i class="fa-solid fa-vest-patches text-4xl mb-3 text-stone-300"></i>
        <p class="text-base font-medium">Belum ada koleksi kebaya pada kategori ini.</p>
        <button onclick="filterProducts('all')" class="mt-4 px-5 py-2 text-sm bg-neutral-900 text-white rounded-full hover:bg-neutral-800">
          Lihat Semua Koleksi
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = displayProducts.map(item => {
    const formattedPrice = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(item.price);

    const waOrderUrl = generateWaOrderUrl(item.name, formattedPrice, item.rentalDuration);

    return `
      <div class="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
        <!-- Image Card Container -->
        <div class="relative overflow-hidden bg-stone-100 aspect-[4/5] cursor-pointer" onclick="openProductModal(${item.id})">
          <img 
            src="${item.image}" 
            alt="${item.name}" 
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
          />
          
          <!-- Badge -->
          <div class="absolute top-2 left-2 sm:top-3 sm:left-3 flex flex-col gap-1.5">
            <span class="bg-neutral-900/85 backdrop-blur-sm text-white text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full uppercase tracking-wider">
              ${item.badge}
            </span>
          </div>

          <!-- Rating -->
          <div class="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 rounded-full flex items-center gap-1 text-[10px] sm:text-xs font-semibold text-stone-800 shadow-sm">
            <i class="fa-solid fa-star text-amber-500 text-[9px] sm:text-[10px]"></i>
            <span>${item.rating}</span>
          </div>

          <!-- Overlay CTA on Hover (Desktop) -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <button class="bg-white text-stone-900 text-xs font-semibold px-4 py-2.5 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2">
              <i class="fa-regular fa-eye"></i> Lihat Detail Kebaya
            </button>
          </div>
        </div>

        <!-- Product Content Details -->
        <div class="p-3 sm:p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between text-[10px] sm:text-xs text-stone-500 mb-1 sm:mb-1.5">
              <span class="font-medium text-amber-800 truncate">${item.categoryName}</span>
              <span class="flex items-center gap-1 whitespace-nowrap text-[9px] sm:text-xs"><i class="fa-solid fa-clock text-[9px] sm:text-[10px]"></i> ${item.rentalDuration}</span>
            </div>
            
            <h3 class="font-serif-title text-xs sm:text-base lg:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors line-clamp-1 cursor-pointer leading-snug" onclick="openProductModal(${item.id})">
              ${item.name}
            </h3>

            <p class="text-[11px] sm:text-xs text-stone-600 line-clamp-2 mt-1 sm:mt-1.5 leading-relaxed">
              ${item.description}
            </p>

            <!-- Size pills preview (Hidden on small phone to maintain clean 2-column height) -->
            <div class="hidden sm:flex flex-wrap items-center gap-1.5 mt-2.5 sm:mt-3">
              ${item.sizes.slice(0, 3).map(s => `
                <span class="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded-md font-medium border border-stone-200">
                  ${s}
                </span>
              `).join('')}
              <span class="text-[10px] bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md font-medium border border-amber-200">
                + Free Resize
              </span>
            </div>
          </div>

          <!-- Price & Order Action -->
          <div class="mt-3 sm:mt-4 pt-2 sm:pt-3 border-t border-stone-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span class="text-[9px] sm:text-[11px] text-stone-400 block leading-tight">Harga Sewa</span>
              <span class="text-xs sm:text-base lg:text-lg font-bold text-stone-900">
                ${formattedPrice}
              </span>
            </div>

            <div class="flex items-center gap-1.5 w-full sm:w-auto">
              <button 
                onclick="openProductModal(${item.id})" 
                title="Lihat Detail Lengkap"
                class="flex-1 sm:flex-initial p-1.5 sm:px-3 sm:py-2 text-stone-600 bg-stone-100 hover:bg-stone-200 rounded-lg sm:rounded-xl transition text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1">
                <i class="fa-solid fa-circle-info text-[10px] sm:text-xs"></i>
                <span class="hidden sm:inline">Detail</span>
              </button>

              <a 
                href="${waOrderUrl}" 
                target="_blank" 
                rel="noopener noreferrer"
                class="flex-1 sm:flex-initial px-2 py-1.5 sm:px-3.5 sm:py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg sm:rounded-xl transition text-[11px] sm:text-xs font-semibold flex items-center justify-center gap-1 shadow-sm hover:shadow">
                <i class="fa-brands fa-whatsapp text-xs sm:text-sm"></i>
                <span>Sewa</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  // Update visual active state di tombol filter
  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.category === filter) {
      btn.classList.add('bg-neutral-900', 'text-white', 'shadow-sm');
      btn.classList.remove('bg-white', 'text-stone-700', 'hover:bg-stone-100');
    } else {
      btn.classList.remove('bg-neutral-900', 'text-white', 'shadow-sm');
      btn.classList.add('bg-white', 'text-stone-700', 'hover:bg-stone-100');
    }
  });
}

// Filter Helper
window.filterProducts = function(category) {
  renderProducts(category);
};

// 4. Generate Link WhatsApp dengan Pesan Otomatis
function generateWaOrderUrl(productName, price, duration, selectedSize = 'Custom Fit', eventDate = '') {
  let message = `Halo Kak admin Kagumi Sewa Kebaya (@kagumi.sewakebaya),\n\n`;
  message += `Saya tertarik untuk menyewa kebaya berikut:\n`;
  message += `*Nama Kebaya:* ${productName}\n`;
  message += `*Harga:* ${price} / ${duration}\n`;
  message += `*Pilihan Ukuran:* ${selectedSize}\n`;
  if (eventDate) {
    message += `*Rencana Tanggal Acara:* ${eventDate}\n`;
  }
  message += `*Paket:* Free Resize & Free Laundry\n\n`;
  message += `Apakah kebaya ini masih tersedia untuk tanggal tersebut? Mohon informasi jadwal fitting di studio Way Halim ya Kak. Terima kasih!`;

  return `https://wa.me/${BUSINESS_DATA.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// 5. Render Artikel Tips Kebaya (3 artikel terbaru di beranda)
function renderArticles() {
  const container = document.getElementById('articles-grid');
  if (!container) return;

  const homeArticles = ARTICLES.slice(0, 3);

  container.innerHTML = homeArticles.map(art => `
    <article class="bg-white rounded-2xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
      <div>
        <div class="relative aspect-video overflow-hidden bg-stone-100">
          <img 
            src="${art.image}" 
            alt="${art.title}" 
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <span class="absolute top-2 left-2 sm:top-3 sm:left-3 bg-white/95 text-stone-800 text-[9px] sm:text-[11px] font-semibold px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full shadow-sm">
            ${art.category}
          </span>
        </div>
        <div class="p-3 sm:p-5">
          <div class="flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-xs text-stone-500 mb-1.5 sm:mb-2">
            <span><i class="fa-regular fa-calendar mr-1"></i>${art.date}</span>
            <span>•</span>
            <span><i class="fa-regular fa-clock mr-1"></i>${art.readingTime}</span>
          </div>
          <h3 class="font-serif-title text-xs sm:text-base lg:text-lg font-bold text-stone-900 hover:text-amber-800 transition cursor-pointer line-clamp-2 leading-snug" onclick="openArticleModal(${art.id})">
            ${art.title}
          </h3>
          <p class="text-[11px] sm:text-xs text-stone-600 mt-1 sm:mt-2 line-clamp-2 leading-relaxed">
            ${art.summary}
          </p>
        </div>
      </div>
      <div class="p-3 pt-0 sm:p-5 sm:pt-0">
        <button 
          onclick="openArticleModal(${art.id})"
          class="text-[10px] sm:text-xs font-semibold text-amber-800 hover:text-amber-900 inline-flex items-center gap-1 transition">
          <span>Baca Selengkapnya</span> <i class="fa-solid fa-arrow-right text-[9px] sm:text-[11px]"></i>
        </button>
      </div>
    </article>
  `).join('');
}

// 6. Render Syarat & Ketentuan Penyewaan
function renderRentalTerms() {
  const container = document.getElementById('terms-list-container');
  if (!container) return;

  container.innerHTML = RENTAL_TERMS.map((t, idx) => `
    <div class="p-4 sm:p-5 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-start gap-4">
      <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center flex-shrink-0 text-base font-bold">
        <i class="${t.icon}"></i>
      </div>
      <div>
        <h4 class="text-sm sm:text-base font-bold text-stone-900 mb-1">${idx + 1}. ${t.title}</h4>
        <p class="text-xs sm:text-sm text-stone-600 leading-relaxed">${t.desc}</p>
      </div>
    </div>
  `).join('');
}

// 7. Modal Pop-up Detail Produk
window.openProductModal = function(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  selectedProduct = product;
  const modal = document.getElementById('product-modal');
  if (!modal) return;

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(product.price);

  // Set detail data ke elemen modal
  document.getElementById('modal-product-img').src = product.image;
  document.getElementById('modal-product-badge').innerText = product.badge;
  document.getElementById('modal-product-category').innerText = product.categoryName;
  document.getElementById('modal-product-name').innerText = product.name;
  document.getElementById('modal-product-rating').innerText = `${product.rating} (${product.reviewsCount} review sewa)`;
  document.getElementById('modal-product-price').innerText = formattedPrice;
  document.getElementById('modal-product-duration').innerText = `/ ${product.rentalDuration}`;
  document.getElementById('modal-product-desc').innerText = product.description;
  document.getElementById('modal-product-material').innerText = product.material;

  // Render list kelengkapan
  const includesContainer = document.getElementById('modal-product-includes');
  includesContainer.innerHTML = product.includes.map(inc => `
    <li class="flex items-center gap-2 text-xs text-stone-700">
      <i class="fa-solid fa-circle-check text-emerald-600 text-[13px]"></i>
      <span>${inc}</span>
    </li>
  `).join('');

  // Render opsi ukuran
  const sizeContainer = document.getElementById('modal-product-sizes');
  sizeContainer.innerHTML = product.sizes.map((s, idx) => `
    <label class="cursor-pointer">
      <input type="radio" name="product-size" value="${s}" class="peer sr-only" ${idx === 0 ? 'checked' : ''} onchange="updateModalWaLink()">
      <span class="inline-block px-3 py-1.5 text-xs font-semibold rounded-lg border border-stone-300 peer-checked:border-neutral-900 peer-checked:bg-neutral-900 peer-checked:text-white transition">
        ${s}
      </span>
    </label>
  `).join('');

  // Event listener input tanggal
  const dateInput = document.getElementById('modal-event-date');
  if (dateInput) {
    // Set minimal tanggal H+1
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    dateInput.min = tomorrow.toISOString().split('T')[0];
    dateInput.onchange = updateModalWaLink;
  }

  updateModalWaLink();

  // Tampilkan modal
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

window.updateModalWaLink = function() {
  if (!selectedProduct) return;

  const sizeInput = document.querySelector('input[name="product-size"]:checked');
  const selectedSize = sizeInput ? sizeInput.value : 'Custom Fit';
  
  const dateInput = document.getElementById('modal-event-date');
  const eventDate = dateInput ? dateInput.value : '';

  const formattedPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(selectedProduct.price);

  const orderUrl = generateWaOrderUrl(
    selectedProduct.name,
    formattedPrice,
    selectedProduct.rentalDuration,
    selectedSize,
    eventDate
  );

  const btn = document.getElementById('modal-btn-order-wa');
  if (btn) {
    btn.href = orderUrl;
  }
};

window.closeProductModal = function() {
  const modal = document.getElementById('product-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
};

// 8. Modal Syarat & Ketentuan
window.openTermsModal = function() {
  const modal = document.getElementById('terms-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

window.closeTermsModal = function() {
  const modal = document.getElementById('terms-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
};

// 9. Modal Baca Artikel
window.openArticleModal = function(articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  const modal = document.getElementById('article-modal');
  if (!modal) return;

  document.getElementById('modal-article-img').src = article.image;
  document.getElementById('modal-article-category').innerText = article.category;
  document.getElementById('modal-article-date').innerText = `${article.date} • ${article.readingTime}`;
  document.getElementById('modal-article-title').innerText = article.title;
  
  // Format paragraf artikel
  const formattedContent = article.content.trim().split('\n\n').map(p => `
    <p class="text-sm text-stone-700 leading-relaxed mb-4">${p.trim().replace(/\n/g, '<br>')}</p>
  `).join('');
  
  document.getElementById('modal-article-body').innerHTML = formattedContent;

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
};

window.closeArticleModal = function() {
  const modal = document.getElementById('article-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
};

// 10. Event Listeners & Keyboard Escape
function setupEventListeners() {
  // Mobile Nav Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenu.classList.toggle('hidden');
      const icon = mobileMenuBtn.querySelector('i');
      if (icon) {
        if (isExpanded) {
          icon.className = 'fa-solid fa-bars text-xl';
        } else {
          icon.className = 'fa-solid fa-xmark text-xl';
        }
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) icon.className = 'fa-solid fa-bars text-xl';
      });
    });
  }

  // Close modals on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProductModal();
      closeTermsModal();
      closeArticleModal();
    }
  });

  // Close modal when clicking outside modal-box (overlay backdrop)
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeProductModal();
        closeTermsModal();
        closeArticleModal();
      }
    });
  });
}

// 11. Scroll Effects (Sticky Header shadow)
function setupScrollEffects() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('shadow-md', 'bg-white/95');
      header.classList.remove('bg-white/90');
    } else {
      header.classList.remove('shadow-md', 'bg-white/95');
      header.classList.add('bg-white/90');
    }
  });
}

// 12. Toast Feedback Notification
function showToast(text) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full shadow-2xl flex items-center gap-2 pointer-events-none transition-opacity duration-300 opacity-0';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-check text-amber-400"></i> ${text}`;
  toast.classList.remove('opacity-0');
  toast.classList.add('opacity-100');

  setTimeout(() => {
    toast.classList.remove('opacity-100');
    toast.classList.add('opacity-0');
  }, 3000);
}
