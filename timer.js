// // This game shell was happily modified from Googler Seth Ladd's "Bad Aliens" game and his Google IO talk in 2011

// class Timer {
//     constructor() {
//         this.gameTime = 0;
//         this.maxStep = 0.05;
//         this.lastTimestamp = 0;
//     };

//     tick() {
//         const current = Date.now();
//         const delta = (current - this.lastTimestamp) / 1000;
//         this.lastTimestamp = current;

//         const gameDelta = Math.min(delta, this.maxStep);
//         this.gameTime += gameDelta;
//         return gameDelta;
//     };
// };
class Timer {
    constructor() {
        this.gameTime = 0;
        this.maxStep = 0.05;
        this.lastTimestamp = 0;
    };

    cooltick() {
        const current = Date.now();
        const delta = (current - this.lastTimestamp) / 1000;
        this.lastTimestamp = current;

        const gameDelta = Math.min(delta, this.maxStep);
        this.gameTime += gameDelta;
        
        const minutes = Math.floor(this.gameTime / 60);
        const seconds = Math.floor(this.gameTime % 60);
        const milliseconds = Math.floor((this.gameTime % 1) * 1000);
        
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
    };
        tick() {
        const current = Date.now();
        const delta = (current - this.lastTimestamp) / 1000;
        this.lastTimestamp = current;

        const gameDelta = Math.min(delta, this.maxStep);
        this.gameTime += gameDelta;
        return gameDelta;
    };
};
