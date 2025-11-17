export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <main className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="mb-8">
            Marketingowo.pl
          </h1>
          
          <p className="mb-8 text-gray-700">
            Domena premium idealna dla agencji marketingowych, firm reklamowych i specjalistów SEO
          </p>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg shadow-lg mb-12">
            <h2 className="mb-4">
              Chcesz kupić tę domenę?
            </h2>
            <p className="mb-4 text-gray-700">
              Skontaktuj się z nami telefonicznie
            </p>
            <a 
              href="tel:+48694435251" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-xl"
            >
              📞 +48 694 435 251
            </a>
          </div>

          {/* SEO Content */}
          <div className="text-left space-y-6 mt-12">
            <section>
              <h2 className="mb-3">
                Dlaczego Marketingowo.pl?
              </h2>
              <p className="text-gray-700 mb-4">
                Marketingowo to krótka, łatwa do zapamiętania domena, która idealnie pasuje do branży marketingowej. 
                W dzisiejszych czasach silna obecność online zaczyna się od dobrej domeny.
              </p>
            </section>

            <section>
              <h3 className="mb-3">
                Dla kogo ta domena?
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Agencje marketingowe i reklamowe</li>
                <li>Freelancerzy specjalizujący się w marketingu internetowym</li>
                <li>Firmy świadczące usługi SEO i SEM</li>
                <li>Specjaliści od social media marketingu</li>
                <li>Eksperci content marketingu</li>
                <li>Konsultanci strategii marketingowych</li>
              </ul>
            </section>

            <section>
              <h3 className="mb-3">
                Korzyści z domeny Marketingowo
              </h3>
              <p className="text-gray-700 mb-4">
                Domena zawierająca słowo kluczowe "marketingowo" ułatwia pozycjonowanie w wyszukiwarkach internetowych. 
                To inwestycja w rozpoznawalność marki i profesjonalny wizerunek Twojej firmy marketingowej.
              </p>
            </section>
          </div>

          {/* Footer with schema.org markup */}
          <footer className="mt-16 pt-8 border-t border-gray-200">
            <div itemScope itemType="https://schema.org/Product">
              <meta itemProp="name" content="Marketingowo.pl - Domena Premium" />
              <meta itemProp="description" content="Domena internetowa marketingowo.pl na sprzedaż" />
              <div itemProp="offers" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <meta itemProp="priceCurrency" content="PLN" />
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              © 2024 Marketingowo.pl - Wszystkie prawa zastrzeżone
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
