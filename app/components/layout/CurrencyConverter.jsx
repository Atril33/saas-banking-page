
import Image from 'next/image';
import CurrencyConverterField from '../ui/CurrencyConverterField';

const CurrencyConverter = () => {
  return (
    <div className="currency-converter">
      <Image src="/assets/currency-converter.png" alt="Currency Converter" width={30} height={30} />
      <div className="currency-converter-content">
        <h3 className="currency-converter-title">Currency Converter</h3>
        <p className="currency-converter-description">Latest prices of top crypto assets.</p>
        <CurrencyConverterField />
        <Image src="/assets/conversion-icon.png" alt="Conversion Icon" width={20} height={20} />
        <CurrencyConverterField />
      </div>
      <Image src="/assets/converted-currency.png" alt="Converted Currency" width={30} height={30} />
    </div>
  )
}

export default CurrencyConverter;