export default function App() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Hero Section */}
      <main style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '48px 16px'
      }}>
        <div style={{ 
          maxWidth: '896px', 
          margin: '0 auto', 
          textAlign: 'center' 
        }}>
          <h1 style={{ 
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '32px',
            color: '#000000'
          }}>
            Marketingowo.org
          </h1>
          
          <p style={{ 
            fontSize: '1.125rem',
            marginBottom: '32px', 
            color: '#374151',
            lineHeight: '1.75'
          }}>
            Domena premium idealna dla agencji marketingowych, firm reklamowych i specjalistów SEO
          </p>
          
          <div style={{ 
            background: 'linear-gradient(to right, #eff6ff, #faf5ff)',
            padding: '32px',
            borderRadius: '8px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
            marginBottom: '48px'
          }}>
            <h2 style={{ 
              fontSize: '2rem',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#000000'
            }}>
              Chcesz kupić tę domenę?
            </h2>
            <p style={{ 
              fontSize: '1rem',
              marginBottom: '16px', 
              color: '#374151'
            }}>
              Skontaktuj się z nami telefonicznie
            </p>
            <a 
              href="tel:+48694435251" 
              style={{ 
                display: 'inline-block',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '16px 32px',
                borderRadius: '8px',
                fontSize: '1.25rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'background-color 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              📞 +48 694 435 251
            </a>
          </div>

          {/* SEO Content */}
          <div style={{ 
            textAlign: 'left', 
            marginTop: '48px' 
          }}>
            <section style={{ marginBottom: '24px' }}>
              <h2 style={{ 
                fontSize: '1.875rem',
                fontWeight: '600',
                marginBottom: '12px',
                color: '#000000'
              }}>
                Dlaczego Marketingowo.org?
              </h2>
              <p style={{ 
                fontSize: '1rem',
                color: '#374151', 
                marginBottom: '16px',
                lineHeight: '1.625'
              }}>
                Marketingowo to krótka, łatwa do zapamiętania domena, która idealnie pasuje do branży marketingowej. 
                W dzisiejszych czasach silna obecność online zaczyna się od dobrej domeny.
              </p>
            </section>

            <section style={{ marginBottom: '24px' }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '12px',
                color: '#000000'
              }}>
                Dla kogo ta domena?
              </h3>
              <ul style={{ 
                listStyleType: 'disc',
                listStylePosition: 'inside',
                color: '#374151',
                fontSize: '1rem',
                lineHeight: '2'
              }}>
                <li>Agencje marketingowe i reklamowe</li>
                <li>Freelancerzy specjalizujący się w marketingu internetowym</li>
                <li>Firmy świadczące usługi SEO i SEM</li>
                <li>Specjaliści od social media marketingu</li>
                <li>Eksperci content marketingu</li>
                <li>Konsultanci strategii marketingowych</li>
              </ul>
            </section>

            <section style={{ marginBottom: '24px' }}>
              <h3 style={{ 
                fontSize: '1.5rem',
                fontWeight: '600',
                marginBottom: '12px',
                color: '#000000'
              }}>
                Korzyści z domeny Marketingowo
              </h3>
              <p style={{ 
                fontSize: '1rem',
                color: '#374151', 
                marginBottom: '16px',
                lineHeight: '1.625'
              }}>
                Domena zawierająca słowo kluczowe "marketingowo" ułatwia pozycjonowanie w wyszukiwarkach internetowych. 
                To inwestycja w rozpoznawalność marki i profesjonalny wizerunek Twojej firmy marketingowej.
              </p>
            </section>
          </div>

          {/* Footer with schema.org markup */}
          <footer style={{ 
            marginTop: '64px', 
            paddingTop: '32px', 
            borderTop: '1px solid #e5e7eb' 
          }}>
            <div itemScope itemType="https://schema.org/Product">
              <meta itemProp="name" content="Marketingowo.org - Domena Premium" />
              <meta itemProp="description" content="Domena internetowa marketingowo.org na sprzedaż" />
              <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <meta itemProp="priceCurrency" content="PLN" />
              </div>
            </div>
            <p style={{ 
              color: '#6b7280', 
              fontSize: '0.875rem' 
            }}>
              © 2025 Marketingowo.org
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
