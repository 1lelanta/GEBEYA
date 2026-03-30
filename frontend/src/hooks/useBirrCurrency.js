import { useEffect, useMemo, useState } from 'react';
import { DEFAULT_ETB_RATE, formatUsdAsBirr, getUsdToEtbRate } from '../utils/currency';

const useBirrCurrency = () => {
  const [exchangeRate, setExchangeRate] = useState(DEFAULT_ETB_RATE);

  useEffect(() => {
    let isMounted = true;

    const loadRate = async () => {
      try {
        const liveRate = await getUsdToEtbRate();
        if (isMounted) {
          setExchangeRate(liveRate);
        }
      } catch (error) {
        console.error('Failed to fetch live ETB rate. Using fallback rate.', error);
      }
    };

    loadRate();

    return () => {
      isMounted = false;
    };
  }, []);

  const formatBirr = useMemo(
    () => (usdAmount) => formatUsdAsBirr(usdAmount, exchangeRate),
    [exchangeRate]
  );

  return {
    exchangeRate,
    formatBirr,
  };
};

export default useBirrCurrency;
