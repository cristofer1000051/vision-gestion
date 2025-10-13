
export { }//Questo significa che aggiungeremo al global, in window, la interfaccia ElectronAPI
declare global {

    interface HttpAPI {
        get(path: string): Promise<any>;
        post(path: string, body: unknown): Promise<any>;
    }
    
    interface Window {
        readonly electronAPI?: Readonly<ElectronAPI>;
    }
}