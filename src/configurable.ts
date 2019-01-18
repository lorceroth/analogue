export class Configurable {
    configure(callback: (config: this) => any): void {
        callback(this);
    }
}