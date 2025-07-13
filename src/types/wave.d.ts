declare module '@foobar404/wave' {
  export default class Wave {
    fromElement(
      audio: HTMLAudioElement,
      canvas: HTMLCanvasElement,
      options?: {
        type?: string;
        colors?: string[];
        stroke?: number;
        rounded?: boolean;
        mirroredX?: boolean;
      },
    ): void;

    stop(): void;
  }
}
