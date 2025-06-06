const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
  const times = [];
  for (let h = 9; h < 18; h++) {
    times.push(`${String(h).padStart(2, '0')}:00`);
    times.push(`${String(h).padStart(2, '0')}:30`);
  }

  const engineerAvailability = {
    'Engineer A': ['Mon 09:00', 'Tue 14:00', 'Wed 10:00'],
    'Engineer B': ['Tue 14:00', 'Wed 11:00', 'Fri 13:00'],
    'Engineer C': ['Tue 15:00', 'Thu 11:00', 'Fri 13:30']
  };

  let selectedSlot = null;
  let selectedCandidate = null;
  let candidateRange = null;

  function buildCalendar() {
    const calendar = document.getElementById('calendar');
    calendar.innerHTML = '';

    days.forEach(day => {
      const col = document.createElement('div');
      col.className = 'day-column';

      const header = document.createElement('div');
      header.className = 'day-header';
      header.textContent = day;
      col.appendChild(header);

      times.forEach(time => {
        const slotKey = `${day} ${time}`;
        const div = document.createElement('div');
        div.className = 'slot';
        div.dataset.slot = slotKey;

        const isEngineerAvailable = Object.values(engineerAvailability).some(arr => arr.includes(slotKey));
        if (isEngineerAvailable) div.classList.add('engineer-available');

        div.textContent = time;
        div.addEventListener('click', () => {
          document.querySelectorAll('.slot').forEach(s => s.classList.remove('selected'));
          div.classList.add('selected');
          selectedSlot = slotKey;
        });

        col.appendChild(div);
      });

      calendar.appendChild(col);
    });
  }

  function highlightCandidateAvailability() {
    const select = document.getElementById('candidate');
    const [day, range] = select.value.split(' ');
    if (!day || !range) return;

    selectedCandidate = select.options[select.selectedIndex].text;
    candidateRange = select.value;

    const [start, end] = range.split('-');
    const toMinutes = t => parseInt(t.split(':')[0]) * 60 + parseInt(t.split(':')[1]);

    document.querySelectorAll('.slot').forEach(slot => {
      slot.classList.remove('candidate-available', 'overlap');
      const slotTime = slot.dataset.slot;
      if (!slotTime) return;
      const [slotDay, time] = slotTime.split(' ');

      if (slotDay === day) {
        const t = toMinutes(time);
        if (t >= toMinutes(start) && t < toMinutes(end)) {
          slot.classList.add('candidate-available');
          if (slot.classList.contains('engineer-available')) {
            slot.classList.add('overlap');
          }
        }
      }
    });
  }

  function confirmInterview() {
    const confirmation = document.getElementById('confirmation');
    const errorBox = document.getElementById('errorMessage');
    errorBox.textContent = '';
  
    if (selectedCandidate && selectedSlot) {
      const slotDiv = document.querySelector(`.slot[data-slot='${selectedSlot}']`);
      if (slotDiv && slotDiv.classList.contains('overlap')) {
        let assignedEngineer = 'Unknown Engineer';
        for (const [eng, slots] of Object.entries(engineerAvailability)) {
          if (slots.includes(selectedSlot)) {
            assignedEngineer = eng;
            break;
          }
        }
        errorBox.textContent = '';
        confirmation.innerHTML = `Interview confirmed with <strong>${selectedCandidate}</strong> and <strong>${assignedEngineer}</strong> at <strong>${selectedSlot}</strong>.`;
        confirmation.style.display = 'block';
      } else {
        errorBox.textContent = 'Selected time is not available for both candidate and engineers.';
      }
    } else {
      errorBox.textContent = 'Please select a candidate and a time slot.';
    }
    confirmation.scrollIntoView({ behavior: 'smooth' });
    errorBox.scrollIntoView({ behavior: 'smooth' });
  }
  
  buildCalendar();