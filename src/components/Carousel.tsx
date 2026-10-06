'use client';
import { useRef, useState, UIEvent } from 'react';

const dishes = [
  { img: '/images/nasi-lemak.jpg', title: 'Nasi Lemak', desc: 'Considered the national dish of Malaysia. Fragrant rice cooked in coconut milk and pandan leaf, served with spicy sambal, fried anchovies, peanuts, and boiled egg.' },
  { img: '/images/laksa.jpg', title: 'Penang Asam Laksa', desc: 'A sour, fish and tamarind-based broth loaded with thick rice noodles, fresh mint, cucumber, and pineapple. Complex, tangy flavor profile.' },
  { img: '/images/char-kway-teow.jpg', title: 'Char Kway Teow', desc: 'Flat rice noodles stir-fried over intense heat (wok hei) with plump prawns, cockles, Chinese lap cheong, eggs, bean sprouts, and chives in dark soy sauce.' },
  { img: '/images/roti-canai.jpg', title: 'Roti Canai', desc: 'A crispy, flaky flatbread with soft, buttery layers inside. Traditionally served with a side of warm dhal (lentil curry) or spicy sambal for dipping.' },
  { img: '/images/Curry-mee.jpg', title: 'Curry Mee', desc: 'A spicy and creamy coconut-based curry soup with yellow noodles, often topped with tofu puffs, cockles, cuttlefish, and mint leaves.' },
  { img: '/images/Fish-Cake-Noodles-@-He-Kiaw-Mee.jpg', title: 'He Kiaw Mee', desc: 'Springy noodles served with fish cakes, fish balls, and a savory broth, offering a delightful and comforting taste.' },
  { img: '/images/Sang-Har-Mee.jpg', title: 'Sang Har Mee', desc: 'Freshwater prawns cooked in a rich, eggy gravy served over crispy fried noodles. A luxurious and satisfying noodle dish.' },
  { img: '/images/Sweet-Red-Sauce-Chee-Cheong-Fun.jpg', title: 'Chee Cheong Fun', desc: 'Steamed rice noodle rolls served with a distinct, sweet red sauce, chili paste, and a sprinkle of toasted sesame seeds.' },
  { img: '/images/bah-kut-teh-and-Black-Vinegar-Pork-Trotter.jpg', title: 'Bak Kut Teh', desc: 'A hearty, complex herbal soup with meaty pork ribs simmered for hours, often enjoyed with black vinegar pork trotters.' },
  { img: '/images/Saizeriya_Maluri.jpg', title: 'Spaghetti beef bolognese in Saizeriya Aeon Mall in Maluri ', desc: 'Besides being a classic Italian dish with dirt cheap price, this one is a delicious twist on the traditional bolognese sauce with cheesy power spread over the noodles. The downside is that it is too little portion for one person.' },
  { img: '/images/SS15-Wongzi-Noodle.jpg', title: 'Ipoh Kai Si Hor Fun in SS15 Wongzi Noddle ', desc: 'Very rich shrimp-flavored noodle soup with juicy prawn meat. You can add on prawn oil, fried shallots, kuchai and so on without any additional cost.' },
  { img: '/images/Stir-fried-springbean.jpg', title: 'Stir fried springbean in Ming Kee Porridge SS2 ', desc: 'Even though their main dish is porridges, I will rather prefer to try their stir-fried spring bean which is full of wokhay. The portion is also big enough for one people.' },
];

export default function Carousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollWidth - target.clientWidth;
    const progress = maxScroll > 0 ? (target.scrollLeft / maxScroll) : 0;
    setScrollProgress(progress);
  };

  const scrollByAmount = (amount: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  const dotsCount = dishes.length;
  const activeDot = Math.min(
    dotsCount - 1,
    Math.max(0, Math.round(scrollProgress * (dotsCount - 1)))
  );

  return (
    <div className="carousel-layout">
      <div className="carousel-wrapper">
        <button className="carousel-btn left-btn" aria-label="Scroll Left" onClick={() => scrollByAmount(-350)}>❮</button>
        
        <div className="carousel-container" id="carousel" ref={scrollRef} onScroll={handleScroll}>
          {dishes.map((dish, i) => (
            <article key={i} className="carousel-card glass-container">
              <img src={dish.img} alt={dish.title} loading="lazy" />
              <h3>{dish.title}</h3>
              <p>{dish.desc}</p>
            </article>
          ))}
        </div>
        
        <button className="carousel-btn right-btn" aria-label="Scroll Right" onClick={() => scrollByAmount(350)}>❯</button>
      </div>

      <div className="progress-dots">
        {dishes.map((_, i) => (
          <div key={i} className={`dot ${i === activeDot ? 'active' : ''}`} />
        ))}
      </div>
    </div>
  );
}
