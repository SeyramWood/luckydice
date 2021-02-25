export default class Sound{
    constructor(){
        this.audioCtx;
        this.offset = 0;
        try {
            this.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioCtx = new AudioContext();
        } catch (e) {
            alert('Sorry! Your browser does not support Web Audio API')
        }
    }
    async getFile(path){
        const response = await fetch(path);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await this.audioCtx.decodeAudioData(arrayBuffer);
        return audioBuffer;
    }
    async loadFile(path){
        const track = await this.getFile(path)
        return track
    }
    play(audioBuffer){
        const trackSource = this.audioCtx.createBufferSource();
        trackSource.buffer = audioBuffer;
        trackSource.connect(this.audioCtx.destination);
        if(this.offset === 0){
            trackSource.start();
            this.offset = this.audioCtx.currentTime;
        }else{
            trackSource.start(0, this.audioCtx.currentTime - this.offset)
        }
        return trackSource;
    }
}