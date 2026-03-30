const EXCHANGE_RATE_URL = 'https://open.er-api.com/v6/latest/USD';
const CACHE_DURATION_MS = 30 * 60 * 1000;
const DEFAULT_ETB_RATE = 130;

let cachedRate = null;
let cachedAt = 0;
let rateRequest = null;

const birrFormatter = new Intl.NumberFormat('en-ET', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const getUsdToEtbRate = async () => {
  const now = Date.now();

  if (cachedRate && now - cachedAt < CACHE_DURATION_MS) {
    return cachedRate;
  }

  if (rateRequest) {
    return rateRequest;
  }

  rateRequest = fetch(EXCHANGE_RATE_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load exchange rate: ${response.status}`);
      }

      return response.json();
    })
    .then((payload) => {
      const liveRate = Number(payload?.rates?.ETB);
      if (!liveRate || Number.isNaN(liveRate)) {
        throw new Error('ETB exchange rate not found in API response');
      }

      cachedRate = liveRate;
      cachedAt = Date.now();
      return cachedRate;
    })
    .finally(() => {
      rateRequest = null;
    });

  return rateRequest;
};

const formatUsdAsBirr = (usdAmount, exchangeRate) => {
  const amount = Number(usdAmount) || 0;
  const converted = amount * exchangeRate;
  return `${birrFormatter.format(converted)} Birr`;
};

const formatEtbAsBirr = (etbAmount) => {
  const amount = Number(etbAmount) || 0;
  return `${birrFormatter.format(amount)} Birr`;
};

export { DEFAULT_ETB_RATE, getUsdToEtbRate, formatUsdAsBirr, formatEtbAsBirr };
