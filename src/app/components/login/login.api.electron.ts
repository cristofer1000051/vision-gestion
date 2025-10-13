export { };
declare global {
    
    export interface ElectronAPI {
        sendMessage(message: string): void;
        http: HttpAPI;
    }
}