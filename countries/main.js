const api_url ='https://restcountries.com/v2/name/'
let country = 'NEPAL'
// ========country name ============
const country_name = document.querySelector('.country_name .name')
// =========== country flag =========
const country_flag = document.querySelector('.country_flag img')
// ========== country capital =========
const country_nativeName = document.querySelector('.country_capital .nativeName')
const country_short = document.querySelector('.country_capital sup')
const country_capital = document.querySelector('.country_capital .capital')
// ================= country area ==============
const country_area = document.querySelector('.country_area .area')
const country_region = document.querySelector('.country_area span .region')
const country_subRegion = document.querySelector('.country_area .subRegion')

// ================ country language ===============
const country_call = document.querySelector('.country_language .call')
const country_nationality = document.querySelector('.country_language .nationality')
const country_language = document.querySelector('.country_language .language')
const country_nativeLanguage = document.querySelector('.country_language .nativeLanguage')

// ================= country currency ==============
const country_currency = document.querySelector('.country_currency .currency')
const country_code = document.querySelector('.country_currency .code')
const country_symbol = document.querySelector('.country_currency .symbol')

// ================== input =================
const search = document.querySelector('#country')
const form = document.querySelector('form')

async function countryInfo(){
    const response = await fetch(api_url + country)
    const data = await response.json()
    country_name.textContent = data[0].name
    country_flag.src = data[0].flags.svg
    country_nativeName.textContent = data[0].nativeName
    country_short.textContent = data[0].alpha2Code
    country_capital.textContent = data[0].capital
    country_call.textContent = data[0].callingCodes[0]
    country_area.textContent = data[0].area
    country_region.textContent = data[0].region
    country_subRegion.textContent = data[0].subregion
    country_nationality.textContent = data[0].demonym
    country_language.textContent = data[0].languages[0].name
    country_nativeLanguage.textContent = data[0].languages[0].nativeName
    country_currency.textContent = data[0].currencies[0].name
    country_code.textContent = data[0].currencies[0].code
    country_symbol.textContent = data[0].currencies[0].symbol
    document.querySelector('.flag img').src = data[0].flags.svg
}

function searchCountry(event){
    search.focus()
    event.preventDefault()
    country = (search.value).toLowerCase()
    search.value=''
    if(country === 'india')country = 'Republic of India'
    if(country === 'us')country = 'usa'
    if(country === 'uk')country = 'united kingdom'
    if(country === 'korea')country = 'Korea (Republic of)'
    if(country === 'south korea')country = 'Korea (Republic of)'
    if(country === 'north korea')country = 'Korea (Democratic People\'s Republic of)'
        
    countryInfo()
}

form.addEventListener('submit',searchCountry)

window.addEventListener('DOMContentLoaded', (event) => {
    search.focus();
    countryInfo()
  });
  