const refs = {
  timerSet: document.querySelector('#timer-1'),
  days: document.querySelector('.value[data-value="days"]'),
  hours: document.querySelector('.value[data-value="hours"]'),
  mins: document.querySelector('.value[data-value="mins"]'),
  secs: document.querySelector('.value[data-value="secs"]'),
 
};
  
class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = selector;
        this.targetDate = targetDate; 
    }

    setInt = setInterval(() => {
        const nowDate = Date.now();
        const newTime = this.targetDate - nowDate;
        const time = this.getTime(newTime);
        
        this.updateClockFace(time);
        this.timeFinish(time);     
    }, 1000);
          
    timeFinish(time) {
        if (time < 0) {
            clearInterval(this.setInt);
            refs.timerSet.textContent = "Finish!";
        }
    }
  
    updateClockFace({days, hours, mins, secs}) {    
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;  
    }


    getTime(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        return { days, hours, mins, secs };
    }


     pad(value) {
    return String(value).padStart(2, '0');
    }
};
  
const timer = new CountdownTimer({
        selector: '#timer-1',
    targetDate: new Date("July 27, 2021"),
    });