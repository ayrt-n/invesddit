// Production urls
const prod = {
  urls: {
    API_URL: 'https://thawing-atoll-42002.herokuapp.com'
  }
};

// Development urls
const dev = {
  urls: {
    API_URL: 'http://localhost:3001'
  }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
