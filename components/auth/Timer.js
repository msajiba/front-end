// timer.js

class Timer {
    constructor(duration, onTick, onCompleted) {
      this.duration = duration;
      this.onTick = onTick;
      this.onCompleted = onCompleted;
      this.intervalId = null;
      this.startTime = null;
    }
  
    start() {
      this.startTime = Date.now();
      this.intervalId = setInterval(() => {
        const elapsed = Date.now() - this.startTime;
        const remaining = Math.max(0, this.duration - elapsed);
        this.onTick(remaining / 1000);
  
        if (remaining === 0) {
          clearInterval(this.intervalId);
          this.onCompleted();
        }
      }, 1000);
    }
  
    stop() {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }
  
  export default Timer;
  