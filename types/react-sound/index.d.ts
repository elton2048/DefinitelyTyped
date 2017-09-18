import { Component } from "react";

export as namespace ReactSound;

interface Status {
    PLAYING: "PLAYING";
    STOPPED: "STOPPED";
    PAUSED: "PAUSED";
}

export interface SoundProps {
    url: string;
    playStatus: string;
    playFromPosition?: number;
    position?: number;
    volume?: number;
    autoLoad?: boolean;
    onLoading?(): void;
    onLoad?(): void;
    onPlaying?(): void;
    onPause?(): void;
    onResume?(): void;
    onStop?(): void;
    onFinishedPlaying?(): void;
}

export class Sound extends Component<SoundProps> {
    static status: Status;
}

export default Sound;
