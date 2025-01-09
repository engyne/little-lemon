import { useMemo, useRef } from "react";
import { InputWithLabel } from "../InputWithLabel";
import { Button } from "../Button";
import { fetchAPI } from "../../helpers/getAvailableReservationTimes";
import './BookingForm.css';



export function BookingForm({
  form,
  handleChange,
  handleSubmit,
}) {
  const emailInputRef = useRef(null);
  const timeInputRef = useRef(null);

  const submitDisabled = useMemo(() => {
    return Object.keys(form).some(k => !form[k] && !['outdoorTable', 'occasion'].includes(k)) ||
      form.people === '0' ||
      !timeInputRef.current.validity.valid ||
      !emailInputRef.current.validity.valid;
  }, [form]);

  function getMinDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
  }

  const availableTimes = (() => {
    const times = fetchAPI(new Date());
    return {
      min: times[0],
      max: times.at(-1),
    }
  })();

  return (
    <form className="booking-form content-center">
      <fieldset>
        <legend>Reserve a table</legend>
        <InputWithLabel
          data-testid="name-input"
          label="Name"
          type="text"
          placeholder="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <InputWithLabel
          ref={emailInputRef}
          data-testid="email-input"
          label="Email"
          name="email"
          type="email"
          placeholder="email"
          value={form.email}
          invalid={!emailInputRef.current?.validity.valid}
          validationMessage={emailInputRef.current?.validationMessage}
          onChange={handleChange}
        />
        <InputWithLabel
          data-testid="phone-input"
          label="Phone number"
          name="phone"
          placeholder="phone number"
          value={form.phone}
          onChange={handleChange}
        />
        <InputWithLabel
          data-testid="people-input"
          label="Number of people"
          name="people"
          placeholder="1"
          invalid={form.people === '0'}
          validationMessage="Needs to be at least 1 or more"
          value={form.people}
          onChange={handleChange}
        />
        <InputWithLabel
          data-testid="date-input"
          label="Date"
          name="date"
          type="date"
          min={getMinDate()}
          onChange={handleChange}

        />
        <InputWithLabel
          ref={timeInputRef}
          data-testid="time-input"
          label="Time"
          name="time"
          type="time"
          min={availableTimes.min}
          max={availableTimes.max}
          step="1800"
          value={form.time}
          invalid={!timeInputRef.current?.validity.valid}
          validationMessage={timeInputRef.current?.validationMessage}
          onChange={handleChange}
        />
        <InputWithLabel
          data-testid="occasion-input"
          label="Occasion"
          type="text"
          placeholder="occasion"
          name="occasion"
          onChange={handleChange}
        />
        <label className='outdoor-table'>
          <span>Need outdoor table?:</span>
          <input type='checkbox' name='outdoorTable' value={form.outdoorTable} onChange={handleChange} />
        </label>
        <Button
          className="submit"
          disabled={submitDisabled}
          variant="primary"
          onClick={(event) => !submitDisabled && handleSubmit(event)}
        >
          Submit
        </Button>
      </fieldset>
    </form>
  )
}