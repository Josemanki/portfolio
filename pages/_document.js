import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;900&family=Barlow:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-custom-navy">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
