import "./styles.css";
import Form from "./components/Form";

export default function App() {
  // takes the form field value and returns true on valid number
  function validCard(value) {
    // accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    // The Luhn Algorithm. It's so pretty.
    let nCheck = 0,
      nDigit = 0,
      bEven = false;
    value = value.replace(/\D/g, "");

    for (let n = value.length - 1; n >= 0; n--) {
      var cDigit = value.charAt(n),
        nDigits = parseInt(cDigit, 10);

      if (bEven) {
        if ((nDigits *= 2) > 9) nDigits -= 9;
      }

      nCheck += nDigit;
      bEven = !bEven;
    }

    return nCheck % 10 === 0;
  }

  function addCardInfo(num) {
    set([...employees, emp]);
  }
}
