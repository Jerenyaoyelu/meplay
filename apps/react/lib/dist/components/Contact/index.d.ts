/// <reference types="react" />
export interface DataItem {
    value: string;
    label: string;
}
export interface ContactItem {
    index: string;
    dataArray: DataItem[];
}
interface ContactProps {
    items: ContactItem[];
}
export declare const Contact: React.FC<ContactProps>;
export {};
