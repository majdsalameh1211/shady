import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styleSheets/HomePage.css"; // Import your CSS file

function HomePage() {
  useEffect(() => {
    // Add scroll animation effect
    const fadeElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => observer.observe(el));

    return () => {
      fadeElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="home-container">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">רמ דיזיין - מצוינות בעיצוב פנים</h1>
          <p className="hero-subtitle">
            פתרונות עיצוב חדשניים המשולבים עם טכנולוגיות BIM ו-VR מתקדמות
          </p>
          <div className="button-group">
            <Link to="/projects" className="cta-button primary-btn">
              <span className="button-icon">👁️</span> צפה בפרויקטים
            </Link>
            <Link to="/form" className="cta-button secondary-btn">
              <span className="button-icon">🎓</span> הרשמה לקורסים
            </Link>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span className="scroll-dot"></span>
          <span className="scroll-dot"></span>
          <span className="scroll-dot"></span>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="section-heading fade-in">
          <h2>השירותים שלנו</h2>
          <p>שילוב מושלם בין יצירתיות לטכנולוגיה מתקדמת</p>
        </div>
        
        <div className="features-grid">
          {/* Feature Card 1 */}
          <div className="feature-card brown-accent fade-in">
            <div className="card-icon">🏠</div>
            <h3>עיצוב פנים מותאם</h3>
            <ul>
              <li><strong>מגורים:</strong> דירות, בתים פרטיים, פנטהאוזים</li>
              <li><strong>משרדים:</strong> חללי עבודה מותאמים לצרכים</li>
              <li><strong>מסחר:</strong> חנויות, מסעדות וחללי תצוגה</li>
              <li><strong>שימור:</strong> שיקום מבנים היסטוריים</li>
            </ul>
          </div>

          {/* Feature Card 2 */}
          <div className="feature-card beige-accent fade-in">
            <div className="card-icon">🎓</div>
            <h3>קורסי הכשרה מקצועית</h3>
            <div className="course-details">
              <div className="course-item">
                <span className="icon">📐</span>
                <p>קורס Revit בסיסי - 12 מפגשים</p>
              </div>
              <div className="course-item">
                <span className="icon">🖥️</span>
                <p>קורס Render מתקדם - 6 מפגשים</p>
              </div>
              <div className="course-item">
                <span className="icon">🏆</span>
                <p>סדנאות BIM ו-VR</p>
              </div>
            </div>
            <Link to="/form" className="cta-button tertiary-btn">
              פרטים והרשמה
            </Link>
          </div>

          {/* Feature Card 3 */}
          <div className="feature-card gold-accent fade-in">
            <div className="card-icon">💻</div>
            <h3>טכנולוגיות מתקדמות</h3>
            <ul>
              <li><strong>BIM:</strong> תכנון וניהול פרויקטים</li>
              <li><strong>VR:</strong> סיורים וירטואליים בחללים</li>
              <li><strong>הדמיות:</strong> תלת מיד ברזולוציה גבוהה</li>
              <li><strong>פרמטריקה:</strong> עיצוב אדפטיבי</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <div className="cta-card fade-in">
            <span className="benefits-badge">הרשמה מוקדמת - 10% הנחה!</span>
            <h3 className="cta-text">מוכנים להתחיל קריירה בעיצוב?</h3>
            <p className="cta-description">
              הקורסים שלנו מעניקים את כל הכלים הדרושים להצלחה בתחום, עם ליווי אישי ותיק עבודות מקצועי
            </p>
            <div className="button-group">
              <Link to="/form" className="cta-button primary-btn">
                הרשם עכשיו
              </Link>
              <Link to="/courses" className="cta-button secondary-btn">
                מידע על הקורסים
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="section-heading fade-in">
          <h2>על הסטודיו</h2>
          <p>הפילוסופיה והייחוד שלנו</p>
        </div>
        <div className="about-content fade-in">
          <p>
            רמ דיזיין הוא סטודיו לעיצוב פנים ואדריכלות בחיפה, המתמחה בעיצוב משרדים, חללי מגורים ופרויקטים מסחריים.
            אנו משלבים בין אסתטיקה עכשווית לטכנולוגיות מתקדמות ליצירת חללים פונקציונליים ויפים.
          </p>
          <p>
            הגישה שלנו מבוססת על מחקר מעמיק, הקשבה לצרכי הלקוח ופתרונות יצירתיים המותאמים אישית.
          </p>
          <div className="founder-note">
            <p className="quote">
              "העיצוב הטוב ביותר הוא זה שמשפר את איכות החיים של המשתמשים בו, תוך שמירה על אסתטיקה ופונקציונליות"
            </p>
            <p className="founder-signature">- ראשה מנסור, מייסדת הסטודיו</p>
          </div>
          <Link to="/about" className="cta-button primary-btn">
            הכירו אותנו יותר
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="section-heading fade-in">
          <h2>לקוחות מספרים</h2>
          <p>החוויות וההמלצות של אלו שעבדו איתנו</p>
        </div>
        
        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <div className="testimonial-card fade-in">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">
              העבודה עם רמ דיזיין שינתה לחלוטין את חוויית העבודה במשרד שלנו. קיבלנו חלל פונקציונלי ויפה שמשפר את התפוקה.
            </p>
            <div className="testimonial-author">
              <img src="/images/client1.jpg" alt="Client" className="testimonial-author-image" />
              <div>
                <div className="testimonial-author-name">דניאל כהן</div>
                <div className="testimonial-author-role">מנכ"ל, טק-סולושנס</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card fade-in">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">
              הקורס של RM Revit פתח לי דלתות רבות בשוק העבודה. הליווי האישי והתרגולים המעשיים נתנו לי את כל הכלים להצליח.
            </p>
            <div className="testimonial-author">
              <img src="/images/client2.jpg" alt="Client" className="testimonial-author-image" />
              <div>
                <div className="testimonial-author-name">מיכל לוי</div>
                <div className="testimonial-author-role">בוגרת קורס Revit</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card fade-in">
            <div className="testimonial-quote">"</div>
            <p className="testimonial-text">
              הדירה שלנו קיבלה חיים חדשים אחרי העיצוב מחדש. הצוות הקשיב לכל הבקשות שלנו וידע לתת מענה יצירתי ומדויק.
            </p>
            <div className="testimonial-author">
              <img src="/images/client3.jpg" alt="Client" className="testimonial-author-image" />
              <div>
                <div className="testimonial-author-name">אבי ואסנת מזרחי</div>
                <div className="testimonial-author-role">לקוחות פרטיים</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="counter-section">
        <div className="counter-grid">
          <div className="counter-item fade-in">
            <div className="counter-value" data-count="150">0</div>
            <div className="counter-label">פרויקטים שבוצעו</div>
          </div>
          <div className="counter-item fade-in">
            <div className="counter-value" data-count="98">0</div>
            <div className="counter-label">לקוחות מרוצים</div>
          </div>
          <div className="counter-item fade-in">
            <div className="counter-value" data-count="12">0</div>
            <div className="counter-label">שנות ניסיון</div>
          </div>
          <div className="counter-item fade-in">
            <div className="counter-value" data-count="300">0</div>
            <div className="counter-label">בוגרי קורסים</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;