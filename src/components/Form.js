import { useState } from "react";

function Form({ addCardInfo, setShowForm }) {
  // useState() -> [state, setState]
  let [form, setForm] = useState({
    company: "",
    number: ""
  });

  function handleChange(e) {
    // let newForm = { ...form }
    // newForm[e.target.id] = e.target.value
    // setForm(newForm)
    setForm({ ...form, [e.target.id]: e.target.value });
  }

  return (
    <form>
      <label htmlFor="company">Card Company</label>
      <input id="company" value={form.company} onChange={handleChange} />

      <label htmlFor="number">Card Number</label>
      <input id="number" value={form.number} onChange={handleChange} />
    </form>
  );
}

export default Form;
