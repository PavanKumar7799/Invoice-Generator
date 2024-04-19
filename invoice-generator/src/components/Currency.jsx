import {React, useState} from 'react';
import { setCurrency, setSymbol} from '../Redux/currencySlice.js';
import { useSelector, useDispatch } from 'react-redux';
const Currency = ({}) => {
    const {selectedCurrency} = useSelector((state) => state.currency);
    const dispatch = useDispatch();

    const [isFocused, setIsFocused] = useState(false);
  
    const handleCurrencyChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = event.target.options[selectedIndex];
        const symbol = selectedOption.getAttribute('symbol');
        dispatch(setCurrency(event.target.value));
        dispatch(setSymbol(symbol));
      };

      const handleFocus = () => {
        setIsFocused(true);
      };

      const currencyStyle = {
        width: 
        "160px", 
        height:"37px", 
        margin:"10px", 
        border: "1px solid rgba(196, 205, 213, .7)",
        boxShadow: isFocused ? "rgba(140, 152, 164, 0.25) 0px 0px 16px 0px": "none",
        borderRadius:"5px" ,
        outline: 'none',
        color: "#777"
      }

    return (
        <div>
            <div style={{marginLeft:"10px", color: 'rgb(119, 119, 119)', fontWeight: '500'}}>Currency</div>
            <select className="form-select form-select-sm ng-valid ng-touched ng-dirty ng-valid-parse" 
                ng-model="document.currency" 
                ng-options="currency.code as currency.name for (code, currency) in currencies"
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                onFocus={handleFocus}
                style={currencyStyle}>
                <option value="AED" label="AED (د.إ)" symbol="د.إ">AED (د.إ)</option>
<option value="AFN" label="AFN" symbol="AFN">AFN</option>
<option value="ALL" label="ALL (Lek)" symbol="Lek">ALL (Lek)</option>
<option value="AMD" label="AMD" symbol="AMD">AMD</option>
<option value="ANG" label="ANG (ƒ)" symbol="ƒ">ANG (ƒ)</option>
<option value="AOA" label="AOA (Kz)" symbol="Kz">AOA (Kz)</option>
<option value="ARS" label="ARS ($)" symbol="$">ARS ($)</option>
<option value="AUD" label="AUD ($)" symbol="$">AUD ($)</option>
<option value="AWG" label="AWG (ƒ)" symbol="ƒ">AWG (ƒ)</option>
<option value="AZN" label="AZN (ман)" symbol="ман">AZN (ман)</option>
<option value="BAM" label="BAM (KM)" symbol="KM">BAM (KM)</option>
<option value="BBD" selected="selected" label="BBD ($)" symbol="$">BBD ($)</option>
<option value="BDT" label="BDT (Tk)" symbol="Tk">BDT (Tk)</option>
<option value="BGN" label="BGN (лв)" symbol="лв">BGN (лв)</option>
<option value="BHD" label="BHD" symbol="BHD">BHD</option>
<option value="BIF" label="BIF" symbol="BIF">BIF</option>
<option value="BMD" label="BMD ($)" symbol="$">BMD ($)</option>
<option value="BND" label="BND ($)" symbol="$">BND ($)</option>
<option value="BOB" label="BOB ($b)" symbol="$b">BOB ($b)</option>
<option value="BOV" label="BOV" symbol="BOV">BOV</option>
<option value="BRL" label="BRL (R$)" symbol="R$">BRL (R$)</option>
<option value="BSD" label="BSD ($)" symbol="$">BSD ($)</option>
<option value="BTN" label="BTN" symbol="BTN">BTN</option>
<option value="BWP" label="BWP (P)" symbol="P">BWP (P)</option>
<option value="BYN" label="BYN (Br)" symbol="Br">BYN (Br)</option>
<option value="BZD" label="BZD (BZ$)" symbol="BZ$">BZD (BZ$)</option>
<option value="CAD" label="CAD ($)" symbol="$">CAD ($)</option>
<option value="CDF" label="CDF" symbol="CDF">CDF</option>
<option value="CHE" label="CHE" symbol="CHE">CHE</option>
<option value="CHF" label="CHF" symbol="CHF">CHF</option>
<option value="CHW" label="CHW" symbol="CHW">CHW</option>
<option value="CLF" label="CLF" symbol="CLF">CLF</option>
<option value="CLP" label="CLP ($)" symbol="$">CLP ($)</option>
<option value="CNY" label="CNY (¥)" symbol="¥">CNY (¥)</option>
<option value="COP" label="COP (p.)" symbol="p.">COP (p.)</option>
<option value="COU" label="COU" symbol="COU">COU</option>
<option value="CRC" label="CRC (₡)" symbol="₡">CRC (₡)</option>
<option value="CUC" label="CUC" symbol="CUC">CUC</option>
<option value="CUP" label="CUP (₱)" symbol="₱">CUP (₱)</option>
<option value="CVE" label="CVE" symbol="CVE">CVE</option>
<option value="CZK" label="CZK (Kč)" symbol="Kč">CZK (Kč)</option>
<option value="DJF" label="DJF (CHF)" symbol="CHF">DJF (CHF)</option>
<option value="DKK" label="DKK (kr)" symbol="kr">DKK (kr)</option>
<option value="DOP" label="DOP (RD$)" symbol="RD$">DOP (RD$)</option>
<option value="DZD" label="DZD" symbol="DZD">DZD</option>
<option value="EGP" label="EGP (E£)" symbol="E£">EGP (E£)</option>
<option value="ERN" label="ERN" symbol="ERN">ERN</option>
<option value="ETB" label="ETB" symbol="ETB">ETB</option>
<option value="EUR" label="EUR (€)" symbol="€">EUR (€)</option>
<option value="FJD" label="FJD ($)" symbol="$">FJD ($)</option>
<option value="FKP" label="FKP (£)" symbol="£">FKP (£)</option>
<option value="GBP" label="GBP (£)" symbol="£">GBP (£)</option>
<option value="GEL" label="GEL" symbol="GEL">GEL</option>
<option value="GHS" label="GHS (GH¢)" symbol="GH¢">GHS (GH¢)</option>
<option value="GIP" label="GIP (£)" symbol="£">GIP (£)</option>
<option value="GMD" label="GMD" symbol="GMD">GMD</option>
<option value="GNF" label="GNF" symbol="GNF">GNF</option>
<option value="GTQ" label="GTQ (Q)" symbol="Q">GTQ (Q)</option>
<option value="GYD" label="GYD ($)" symbol="$">GYD ($)</option>
<option value="HKD" label="HKD (HK$)" symbol="HK$">HKD (HK$)</option>
<option value="HNL" label="HNL (L)" symbol="L">HNL (L)</option>
<option value="HTG" label="HTG" symbol="HTG">HTG</option>
<option value="HUF" label="HUF (Ft)" symbol="Ft">HUF (Ft)</option>
<option value="IDR" label="IDR (Rp)" symbol="Rp">IDR (Rp)</option>
<option value="ILS" label="ILS (₪)" symbol="₪">ILS (₪)</option>
<option value="INR" label="INR (Rs)" symbol="Rs">INR (Rs)</option>
<option value="IQD" label="IQD" symbol="IQD">IQD</option>
<option value="IRR" label="IRR" symbol="IRR">IRR</option>
<option value="ISK" label="ISK (kr)" symbol="kr">ISK (kr)</option>
<option value="JMD" label="JMD (J$)" symbol="J$">JMD (J$)</option>
<option value="JOD" label="JOD" symbol="JOD">JOD</option>
<option value="JPY" label="JPY (¥)" symbol="¥">JPY (¥)</option>
<option value="KES" label="KES (KSh)" symbol="KSh">KES (KSh)</option>
<option value="KGS" label="KGS (лв)" symbol="лв">KGS (лв)</option>
<option value="KHR" label="KHR (៛)" symbol="៛">KHR (៛)</option>
<option value="KMF" label="KMF" symbol="KMF">KMF</option>
<option value="KPW" label="KPW (₩)" symbol="₩">KPW (₩)</option>
<option value="KRW" label="KRW (₩)" symbol="₩">KRW (₩)</option>
<option value="KWD" label="KWD (ك)" symbol="ك">KWD (ك)</option>
<option value="KYD" label="KYD ($)" symbol="$">KYD ($)</option>
<option value="KZT" label="KZT (лв)" symbol="лв">KZT (лв)</option>
<option value="LAK" label="LAK (₭)" symbol="₭">LAK (₭)</option>
<option value="LBP" label="LBP (£)" symbol="£">LBP (£)</option>
<option value="LKR" label="LKR (Rs)" symbol="Rs">LKR (Rs)</option>
<option value="LRD" label="LRD ($)" symbol="$">LRD ($)</option>
<option value="LSL" label="LSL" symbol="LSL">LSL</option>
<option value="LYD" label="LYD (LD)" symbol="LD">LYD (LD)</option>
<option value="MAD" label="MAD" symbol="MAD">MAD</option>
<option value="MDL" label="MDL" symbol="MDL">MDL</option>
<option value="MGA" label="MGA" symbol="MGA">MGA</option>
<option value="MKD" label="MKD (ден)" symbol="ден">MKD (ден)</option>
<option value="MMK" label="MMK" symbol="MMK">MMK</option>
<option value="MNT" label="MNT (₮)" symbol="₮">MNT (₮)</option>
<option value="MOP" label="MOP" symbol="MOP">MOP</option>
<option value="MRU" label="MRU" symbol="MRU">MRU</option>
<option value="MUR" label="MUR (Rs)" symbol="Rs">MUR (Rs)</option>
<option value="MVR" label="MVR" symbol="MVR">MVR</option>
<option value="MWK" label="MWK" symbol="MWK">MWK</option>
<option value="MXN" label="MXN ($)" symbol="$">MXN ($)</option>
<option value="MXV" label="MXV" symbol="MXV">MXV</option>
<option value="MYR" label="MYR (RM)" symbol="RM">MYR (RM)</option>
<option value="MZN" label="MZN (MT)" symbol="MT">MZN (MT)</option>
<option value="NAD" label="NAD (N$)" symbol="N$">NAD (N$)</option>
<option value="NGN" label="NGN (₦)" symbol="₦">NGN (₦)</option>
<option value="NIO" label="NIO (C$)" symbol="C$">NIO (C$)</option>
<option value="NOK" label="NOK (kr)" symbol="kr">NOK (kr)</option>
<option value="NPR" label="NPR (Rs)" symbol="Rs">NPR (Rs)</option>
<option value="NZD" label="NZD ($)" symbol="$">NZD ($)</option>
<option value="OMR" label="OMR" symbol="OMR">OMR</option>
<option value="PAB" label="PAB (B/.)" symbol="B/.">PAB (B/.)</option>
<option value="PEN" label="PEN (S/.)" symbol="S/.">PEN (S/.)</option>
<option value="PGK" label="PGK" symbol="PGK">PGK</option>
<option value="PHP" label="PHP (₱)" symbol="₱">PHP (₱)</option>
<option value="PKR" label="PKR (Rs)" symbol="Rs">PKR (Rs)</option>
<option value="PLN" label="PLN (zł)" symbol="zł">PLN (zł)</option>
<option value="PYG" label="PYG (Gs)" symbol="Gs">PYG (Gs)</option>
<option value="QAR" label="QAR" symbol="QAR">QAR</option>
<option value="RON" label="RON (lei)" symbol="lei">RON (lei)</option>
<option value="RSD" label="RSD (Дин.)" symbol="Дин.">RSD (Дин.)</option>
<option value="RUB" label="RUB (руб)" symbol="руб">RUB (руб)</option>
<option value="RWF" label="RWF" symbol="RWF">RWF</option>
<option value="SAR" label="SAR" symbol="SAR">SAR</option>
<option value="SBD" label="SBD ($)" symbol="$">SBD ($)</option>
<option value="SCR" label="SCR (Rs)" symbol="Rs">SCR (Rs)</option>
<option value="SDG" label="SDG" symbol="SDG">SDG</option>
<option value="SEK" label="SEK (kr)" symbol="kr">SEK (kr)</option>
<option value="SGD" label="SGD ($)" symbol="$">SGD ($)</option>
<option value="SHP" label="SHP (£)" symbol="£">SHP (£)</option>
<option value="SLE" label="SLE" symbol="SLE">SLE</option>
<option value="SOS" label="SOS (S)" symbol="S">SOS (S)</option>
<option value="SRD" label="SRD ($)" symbol="$">SRD ($)</option>
<option value="SSP" label="SSP" symbol="SSP">SSP</option>
<option value="STN" label="STN" symbol="STN">STN</option>
<option value="SVC" label="SVC ($)" symbol="$">SVC ($)</option>
<option value="SYP" label="SYP (£)" symbol="£">SYP (£)</option>
<option value="SZL" label="SZL" symbol="SZL">SZL</option>
<option value="THB" label="THB (฿)" symbol="฿">THB (฿)</option>
<option value="TJS" label="TJS" symbol="TJS">TJS</option>
<option value="TMT" label="TMT" symbol="TMT">TMT</option>
<option value="TND" label="TND (DT)" symbol="DT">TND (DT)</option>
<option value="TOP" label="TOP" symbol="TOP">TOP</option>
<option value="TRY" label="TRY" symbol="TRY">TRY</option>
<option value="TTD" label="TTD (TT$)" symbol="TT$">TTD (TT$)</option>
<option value="TWD" label="TWD (NT$)" symbol="NT$">TWD (NT$)</option>
<option value="TZS" label="TZS (TSh)" symbol="TSh">TZS (TSh)</option>
<option value="UAH" label="UAH (₴)" symbol="₴">UAH (₴)</option>
<option value="UGX" label="UGX (USh)" symbol="USh">UGX (USh)</option>
<option value="USD" label="USD ($)" symbol="$">USD ($)</option>
<option value="USN" label="USN" symbol="USN">USN</option>
<option value="UYI" label="UYI" symbol="UYI">UYI</option>
<option value="UYU" label="UYU ($U)" symbol="$U">UYU ($U)</option>
<option value="UYW" label="UYW" symbol="UYW">UYW</option>
<option value="UZS" label="UZS (лв)" symbol="лв">UZS (лв)</option>
<option value="VED" label="VED" symbol="VED">VED</option>
<option value="VES" label="VES" symbol="VES">VES</option>
<option value="VND" label="VND (₫)" symbol="₫">VND (₫)</option>
<option value="VUV" label="VUV" symbol="VUV">VUV</option>
<option value="WST" label="WST" symbol="WST">WST</option>
<option value="XAF" label="XAF" symbol="XAF">XAF</option>
<option value="XAG" label="XAG" symbol="XAG">XAG</option>
<option value="XAU" label="XAU" symbol="XAU">XAU</option>
<option value="XBA" label="XBA" symbol="XBA">XBA</option>
<option value="XBB" label="XBB" symbol="XBB">XBB</option>
<option value="XBC" label="XBC" symbol="XBC">XBC</option>
<option value="XBD" label="XBD" symbol="XBD">XBD</option>
<option value="XCD" label="XCD ($)" symbol="$">XCD ($)</option>
<option value="XDR" label="XDR" symbol="XDR">XDR</option>
<option value="XOF" label="XOF" symbol="XOF">XOF</option>
<option value="XPD" label="XPD" symbol="XPD">XPD</option>
<option value="XPF" label="XPF" symbol="XPF">XPF</option>
<option value="XPT" label="XPT" symbol="XPT">XPT</option>
<option value="XSU" label="XSU" symbol="XSU">XSU</option>
<option value="XTS" label="XTS" symbol="XTS">XTS</option>
<option value="XUA" label="XUA" symbol="XUA">XUA</option>
<option value="XXX" label="XXX" symbol="XXX">XXX</option>
<option value="YER" label="YER" symbol="YER">YER</option>
<option value="ZAR" label="ZAR (R)" symbol="R">ZAR (R)</option>
<option value="ZMW" label="ZMW (ZK)" symbol="ZK">ZMW (ZK)</option>
<option value="ZWL" label="ZWL" symbol="ZWL">ZWL</option>
</select>
        </div>
    );
};

export default Currency;
