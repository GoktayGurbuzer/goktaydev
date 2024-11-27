declare global {
    interface Window {
        [key: string]: any[]; // dataLayer'ın olmayabileceği durumları da destekler
    }
}
