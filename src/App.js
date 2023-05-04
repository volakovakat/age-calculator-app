import './App.css';

function App() {
  return (
    <div className="App">
        <section className="app--age-calculator">
            <div className="app--form">
                <form>
                    <div className="app--form-inputs">
                        <label>
                            Day
                            <input type="number" name="day" placeholder="DD" pattern="[0-31]{1}" />
                        </label>
                        <label>
                            Month
                            <input type="number" name="month" placeholder="MM" pattern="[0-12]{2}" />
                        </label>
                        <label>
                            Year
                            <input type="number" name="year" placeholder="YYYY" pattern="[0-2023]{4}" />
                        </label>
                    </div>
                    <div className="app--form-submit">
                        <div className="form-divider">
                            <hr/>
                            <input className="btn-submit" type="submit" value="" />
                        </div>
                    </div>
                </form>
            </div>
            <div className="app--result">
                <p><span className="c--highlight js-years">--</span> years</p>
                <p><span className="c--highlight js-months">--</span> months</p>
                <p><span className="c--highlight js-days">--</span> days</p>
            </div>
        </section>
        <footer className="app--attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
            Coded by <a href="https://katerinavolakova.cz/" target="_blank">Kateřina N. Voláková</a>.
        </footer>
    </div>
  );
}

export default App;
