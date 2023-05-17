class Clock{
    constructor() {
        // creating new date object
        const currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes=currentTime.getMinutes();
        this.seconds=currentTime.getSeconds();
        this.ampm = this.hours>= 12 ? 'pm' : 'am';
        this.hours = this.hours%12;
        this.hours = this.hours ? this.hours : 12;
        this.printTime();
        setInterval(this._tick.bind(this),1000);
    }

    printTime() {
        // return ${this.hours};
        
        const time = `${this.hours}:${this.minutes}:${this.seconds} ${this.ampm}`;
        // console.log(time);
        document.getElementById('clock-container').innerText = time;
        document.getElementById('hour').innerText = new Date().getUTCMonth();
    }
    _tick() {
        this.seconds +=1;
        if (this.seconds === 60) {
            this.seconds=0;
            this._incrementMinutes();
            
        }
        this.printTime();
    
    }

    _incrementMinutes() {
        this.minutes +=1; 
        if (this.minutes === 60) {
            this.minutes =0;
            this._incrementHours();
        }
        
    }

    _incrementHours() {
        this.hours = (this.hours+1)%24;
    }

}

const clock = new Clock();

