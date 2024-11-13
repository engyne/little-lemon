import '../styles/reservation.css'

function Reservation() {
  return (
    <>
      <form className="reservation content-center">
        <fieldset>
          <legend>Reserve a table</legend>
          <label>
            Number of people:
            <input type="number" placeholder="0" />
          </label>
          <label>
            Date:
            <input type="date" />
          </label>
          <label>
            Time:
            <input type="time"  min="19:00" />
          </label>
          <button>Submit</button>
        </fieldset>
      </form>
    </>
  )
}

export default Reservation;