# interview-scheduler
A clean and interactive **Interview Scheduler** application built with **HTML, CSS, and JavaScript**. This tool helps recruiters efficiently schedule 30-minute interviews between candidates and available engineers during working hours (Mon–Fri, 9 AM–6 PM).

## 🚀 Features

- Candidate selection via dropdown
- Weekly calendar view (Mon–Fri) broken into 30-minute slots
- Visual availability highlighting for 3 engineers
- Candidate preferred time range highlighting
- Overlapping slot detection (between candidate & engineers) with an error message
- Only overlapping (valid) slots are selected to schedule the interview
- Confirmation message showing selected engineer, candidate, and time

## 📌 Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**

## 📂 Project Structure

interview-scheduler/
├── interview-scheduler.html # Main HTML file
├── interview-scheduler.js # Main JavaScript file
├── interview-scheduler.css # All project CSS styles
├── scheduler.test.js # Unit test for time slots
├── package.json # 

## ✅ How It Works

1. Select a candidate from the dropdown.
2. The candidate's preferred availability window will be highlighted.
3. Slots where both at least one engineer and the candidate are available will be marked as overlapping in green colour to indicate acess.
4. Click on an overlapping time slot to select it.
5. Click **Confirm Interview** to finalize.
6. A confirmation message displays the selected engineer, candidate, and scheduled time.

## 💡 Demo Use Case

- **Engineer A** is available: `Mon 09:00`, `Tue 14:00`, `Wed 10:00`
- **Candidate Alice Johnson** prefers: `Tue 14:00–17:00`
- ➡️ Overlap exists at `Tue 14:00`, allowing a valid scheduling slot.

## 🧪 Testing

Currently, the base project is not framework-dependent. To add automated testing, you could:

- Port to React and write unit tests using **Jest** + **React Testing Library**
- Write integration tests using **Cypress**

## 🛠️ Improvements

- Add backend for persistent data storage
- Allow multi-engineer selection or load balancing
- Enable rescheduling and notifications
- Use React framework for resuable UI logic

## 👨‍💻 Author

**Ibi-ilate Braide**  
Frontend Engineer | UX Advocate | Systems Thinker  
[GitHub Profile](https://github.com/ibraide) • [LinkedIn](https://www.linkedin.com/in/ibi-ilate-braide-840500136/)
