class Clock{
    constructor() {
        // creating new date object
        const currentTime = new Date();
        this.hours = currentTime.getHours();
        this.minutes=currentTime.getMinutes();
        this.seconds=currentTime.getSeconds();

        this.printTime();
        setInterval(this._tick.bind(this),1000);
    }

    printTime() {
        // return '${this.hours}:${this.minutes}:${this.seconds}';
        let hour = '${this.hours}';
        console.log(hour);
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
        this.hours = (this.hours+1)%12;
    }

}

const clock = new Clock();